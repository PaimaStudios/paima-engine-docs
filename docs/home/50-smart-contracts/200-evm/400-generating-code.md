# Generating Code

Once you've configured all the contracts for your project, typically the next step is to generate bindings for them for your contract.

## Option 1) Raw ABI

This option is best if you're trying to use a code generation we don't have documentation for.

Although [@paima/evm-contracts](../../10000-libraries/100-evm-contracts/1-introduction.md) comes with ABIs built-in for the Paima smart contracts, generally you only want to generate code for the subset of the Paima contracts you use and then mix in the ABI for any other contract you included in your app.

To achieve this, Paima's templates include a hardhat config with the `hardhat-abi-exporter` plugin to generate the ABI files (and typescript wrappers as a work around to [this issue](https://github.com/microsoft/TypeScript/issues/32063)) at the root of your project inside `./contracts/evm/abi`.

## Option 2) [Viem](https://viem.sh)

Leveraging the ABIs for your contracts generated for you by Paima's hardhat setup, you can use Viem with your project easily

First, expose the ABI folder in your `tsconfig.json` for any workspace where you need to use it

```json
{
  "compilerOptions": {
    "paths": {
      "@abi/*": ["../contracts/evm/abi/*"]
    }
  },
}
```

Then, import the ABI into your project

```ts
import nativeNftSaleAbi from "@abi/@paima/evm-contracts/contracts/NativeNftSale.sol/NativeNftSale";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import type { PublicClient, WalletClient } from "viem";
import { WalletMode, WalletModeMap } from "@paima/sdk/providers";

const viemChain = 
function getClient(): PublicClient {
  return createPublicClient({
    chain: viemChain,
    transport: http(),
  });
}
function getWallet(account: string): WalletClient {
  return createWalletClient({
    account: account as `0x${string}`,
    chain: viemChain,
    transport: custom(
      WalletModeMap[WalletMode.EvmInjected].getOrThrowProvider().getConnection()
        .api,
    ),
  });
}

async function buyNft() {
  const userAddress = "..."; // get this from Paima.userWalletLogin
  const nftSaleProxyAddress = "..."; // you can get this from your deployed_addresses.json
  const { request } = await getClient().simulateContract({
    account: userAddress as `0x${string}`,
    address: nftSaleProxyAddress as `0x${string}`,
    abi: nativeNftSaleAbi,
    functionName: "buyNft",
    gas: 800000n, // set as needed
    gasPrice,
    value: accountNftPrice, // set the price of your NFT
    args: [
        account as `0x${string}`,
        "" // put the initialization data for your ERC721 mint CDE here
    ],
  });
  const txHash = await getWallet(account).writeContract(request);
  return txHash;
}
```

## Option 3) Ethers / Typechain

Inside your `hardhat.config.ts`, add the following in the config:

```typescript
typechain: {
  outDir: './contracts/evm/typechain-types',
  target: 'ethers-v6',
  // https://github.com/dethcrypto/TypeChain/issues/849
  alwaysGenerateOverloads: false,
},
```

Then, include the generated files into the `tsconfig.json` of any workspace where you want to use the typechain files

```json
{
  "compilerOptions": {
    "paths": {
      "@typechain/*": [
        "../contracts/evm/typechain-types/*"
      ],
    }
  },
  "include": [
    "../contracts/evm/typechain-types/**/*",
  ]
}
```

Now you can use the generated typechain code directly from your application

```typescript
import {
  AnnotatedMintNft__factory,
} from "@typechain/index";
import type { WalletMode } from "@paima/providers";
import { WalletModeMap } from "@paima/providers";
import { BrowserProvider, JsonRpcProvider } from "ethers";
import type { JsonRpcSigner } from "ethers";

const getWalletClient = (_account: string): BrowserProvider => {
  const provider = new BrowserProvider(
    WalletModeMap[WalletMode.EvmInjected].getOrThrowProvider().getConnection().api,
  );
  return provider;
};
const getPublicClient = (): JsonRpcProvider => {
  return new JsonRpcProvider(
    CHAIN_URI // comes from your env file
  );
};
export const getProvider = (account?: string): SignerProvider => {
  if (account) {
    return getWalletClient(account);
  }
  return getPublicClient();
};
export const getSigner = async (account: string): Promise<JsonRpcSigner> => {
  return await getWalletClient(account).getSigner();
};

export const NftContract = async (account: string) => {
  const signer = await getSigner(account);
  return AnnotatedMintNft__factory.connect(
    NFT, // comes from your env file
    signer
  );
};
```