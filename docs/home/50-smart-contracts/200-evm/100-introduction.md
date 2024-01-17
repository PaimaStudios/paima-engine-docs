# Contract Configurations

Paima templates leverage [Hardhat](https://hardhat.org/) for deploying and managing EVM contracts.

Typically, deploying your contracts involve two steps:
1. `npm run chain:start` to start a chain on the local network
2. `npm run chain:deploy` to deploy contracts to the local network (see `hardhat.config.ts` for network names)

Deployments are done leveraging [Hardhat Ignition](https://hardhat.org/ignition/docs/getting-started#overview). You can modify the scripts to deploy all the EVM contracts for your app by modifying `./contracts/evm/ignition/modules/deploy` and you can modify the core Hardhat configs in `hardhat.config.ts`

Paima comes with multiple contracts for the basic use-cases. You can find all the EVM contracts that come with Paima in the [@paima/evm-contracts](../../10000-libraries/100-evm-contracts/200-solidity/200-generated-docs.mdx) NPM package.

### Deploying to a testnet or mainnet

By default, Hardhat will spin up a local EVM chain for you to interact with (learn more [here](https://hardhat.org/hardhat-network/docs/overview)). If you want to use a real network (testnet or mainnet), the following steps will help you get set up:

1. Fund a (non-hardware wallet) EVM account on your target chain with enough to cover the cost of deploying a contract (this is your deployment account).
2. Export the private key of the account from your wallet software (Metamask supports this in the "Account details" section).
3. Set the deployment account private key to an environment variable called `DEPLOYER_PRIVATE_KEY` and export it. For example, in Bash, run `export DEPLOYER_PRIVATE_KEY=...` with your private key (without an `0x` prefix) instead of the ellipsis.
4. Deploy the contract by running `npm run chain:deploy`
5. Hardhat will proceed forward with doing all of the steps required to get the contract compiled and deployed, using the wallet you specified the `DEPLOYER_PRIVATE_KEY` for.
6. Once finished you will get a summary of the deployment which includes the address of the newly deployed contract

## Adding New Contracts

To add new contracts to your project and have them available from your Hardhat Ignition deployment script, you have two options:

### Contracts you want to use as-is

If you want to use a contract as-is, you can add it to your compilation process by modifying your `hardhat.config.ts`

```typescript
const config: HardhatUserConfig = {
  dependencyCompiler: {
    paths: [
      // add your contract here. Example ↓
      // '@paima/evm-contracts/contracts/PaimaL2Contract.sol',
    ],
  },
};
```

### Contracts with custom logic

If you want to add your own custom contract for your game, you place it in `/contracts/evm/solidity`.

More generally speaking, you can modify the place where new contracts are loaded by modifying your `hardhat.config.ts`

```typescript
const config: HardhatUserConfig = {
  paths: {
    sources: './contracts/evm/solidity', // ← here
  },
}
```

## Modifying the Paima Built-In Contract

You can extend the functionality of the built-in contracts using Solidity [inheritance](https://solidity-by-example.org/inheritance/), as for example the L2 contract can be found in `@paima/evm-contracts/contracts/PaimaL2Contract.sol`. However, for cases where that is not sufficient, Paima allows you to extract a copy of all the built-in contracts by running `./paima-engine contracts` which emits a `contracts` folder.

## Interacting with Contracts

You can interact with the contracts you've deployed using the [hardhat-interact plugin](https://github.com/Synthetixio/hardhat-interact) using `npx hardhat --network localhost interact`

## Finding Your Deployed Contracts

You can find the deployment address of the contract anytime in `./contracts/evm/ignition/deployments/chain-XXX/deployed_addresses.json`
