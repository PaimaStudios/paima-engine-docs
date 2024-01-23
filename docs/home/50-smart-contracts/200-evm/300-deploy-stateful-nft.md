# Deploying a Stateful NFT

Paima Engine supports both standard NFT contracts (such as [ERC721](https://eips.ethereum.org/EIPS/eip-721)) and [Paima Extended ERC721 NFT](../../10000-libraries/100-evm-contracts/200-solidity/200-generated-docs.mdx#AnnotatedMintNft) contracts for Stateful NFTs.

To provide developers more power in customizing how Stateful NFTs are initialized in their game, we have extended the ERC721 standard to allow selecting a pre-defined string when minting the NFT. This string gets routed through the Paima stack and ends up as a part of the scheduled input which your STF reads to initialize the NFT state (ex. "Warrior", "Mage", "Archer").

The instructions below will walk you through all the steps required to deploy your own Paima Extended ERC721 NFT contract, together with an NFT Sale contract which will allow anyone to purchase your Stateful NFTs (and have it all automatically integrate with Paima Engine seamlessly).

## Deploying a Paima Stateful NFT

Paima NFTs usually require 3 contracts:
1. The contract for the NFT itself
2. The sale contract for the NFT
3. The proxy for the sale contract to make the sale contract it upgradeable

Paima comes with some options for sale contracts built-in:
1. [Native NFT Sale](../../10000-libraries/100-evm-contracts/200-solidity/200-generated-docs.mdx#nativenftsale) used for selling the NFT for native tokens (ex: ETH)
2. [ERC20 NFT Sale](../../10000-libraries/100-evm-contracts/200-solidity/200-generated-docs.mdx#erc20nftsale) used for selling the NFT for a set of ERC20 tokens

All sale contracts used need to be registered with your NFT contract using `setMinter` (see below code for an example)

In our example, we'll use the `NativeNftSale` contract

Deploying the NFT and the sale contract has a few steps:
1. Add the contracts to your build process (see [here](100-introduction.md#adding-new-contracts)).
2. Add the deployment logic to your [Hardhat Ignition](https://hardhat.org/ignition/docs/getting-started#overview) configuration (`./contracts/evm/ignition/modules/deploy.ts`)
3. Specify the parameters for your deployment (`./contracts/evm/ignition/parameters.json`)
4. Register any primitives required for the contracts in your `extensions.yaml`

Concretely, here are the values use in the [trading card template](https://github.com/PaimaStudios/paima-game-templates/tree/main/trading-cards):

### Compiling the contracts

Add the following to your `hardhat.config.ts` config:
```ts
dependencyCompiler: {
    paths: [
      '@paima/evm-contracts/contracts/AnnotatedMintNft.sol',
      '@paima/evm-contracts/contracts/NativeNftSale.sol',
      '@paima/evm-contracts/contracts/Proxy/NativeNftSaleProxy.sol',
    ],
  },
```

### Writing the deployment script

Add the following in a new deploy file in your `modules` repo

```ts
export default buildModule('NftContract', m => {
  // This address is the owner of the ProxyAdmin contract,
  // so it will be the only account that can upgrade the proxy when needed.
  // https://github.com/NomicFoundation/hardhat-ignition/issues/673
  const proxyAdminOwner = m.getAccount(0);

  const name = m.getParameter('name');
  const ticker = m.getParameter('ticker');
  const supply = m.getParameter('supply');
  const nftContract = m.contract('Nft', [name, ticker, supply, proxyAdminOwner]);
  const baseUri = m.getParameter('baseUri');
  m.call(nftContract, 'setBaseUri', [baseUri]);

  const nftSaleContract = m.contract('NativeNftSale', []);

  const price = m.getParameter('price');
  m.call(nftSaleContract, 'updatePrice', [price]);

  const nftSaleProxyContract = m.contract('NativeProxy', [
    nftSaleContract,
    proxyAdminOwner,
    nftContract,
    price,
  ]);

  // make that the NFT can be bought through the sale contract (and only the sale contract)
  // you need this, otherwise you'll get a `not authorized to mint` error
  m.call(nftContract, 'setMinter', [nftSaleProxyContract]);

  return { nftContract, nftSaleProxyContract };
});
```


### Update your `parameters.json`

Update your `parameters.json` to use the following

```json
{
    "NftContract": {
        "name": "Your NFT",
        "ticker": "TICKER",
        "price": 1,
        "supply": 10000,
        "baseUri": "..."
    }
}
```

#### Update your `extensions.yml`

When you run `npm run chain:deploy`, you'll see addresses shown for the deployments (you can also find them later in the `deployed_addresses.json` file)

Use these to populate your `.yml` file base on any [primitive](../../300-react-to-events/2-primitive-catalogue/10-evm/3-ERC721.md) you need

```yml
extensions:
  - name: "Account NFT"
    type: erc721
    contractAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    startBlockHeight: 0
    scheduledPrefix: accMint
```


## Differentiating NFT content

The mint function in the contract allows accepting any data. This can be useful in enabling your game to, for example, using the same NFT contract for multiple items in your game (each differentiated by the data passed into the mint function).

If you want better type safety for these different cases, you can extend the base `NativeNftSale` contract and annotate it with custom [Solidity enums](https://solidity-by-example.org/enum/).

```sol
/// define the different enums to differentiate your NFT
enum NftType {
    FIRE,
    WATER
}
```

```sol
/// Provide an easy-to-use mapping between the enum values and their string representation
contract NftTypeMapper {
    mapping(NftType => string) internal nftTypeToString;

    constructor() {
        nftTypeToString[NftType.FIRE] = "fire";
        nftTypeToString[NftType.WATER] = "water";
    }

    function getNftTypeString(NftType nftType) external view returns (string memory) {
        return nftTypeToString[nftType];
    }
}
```

```sol
import "@paima/evm-contracts/contracts/NativeNftSale.sol";

/// extend the base NFT sale contract to provide a type-safe function
contract TypedNativeNftSale is NativeNftSale {
    NftTypeMapper public typeMapper;

    function initialize(address owner, address _nft, uint256 _price) public override {
        require(!initialized, "Contract already initialized");
        // initialize state here first since parent constructor emits event
        typeMapper = new NftTypeMapper();
        super.initialize(owner, _nft, _price);
    }

    function buyNftType(address receiverAddress, NftType nftType) public payable returns (uint256) {
        return super.buyNft(receiverAddress, typeMapper.getNftTypeString(nftType));
    }
}
```

## Withdrawing funds from a sale

See [here](./100-introduction.md#interacting-with-contracts)