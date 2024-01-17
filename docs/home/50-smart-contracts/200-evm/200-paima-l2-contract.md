# Deploying the L2 Contract

The [Paima L2 Contract](../../10000-libraries/100-evm-contracts/200-solidity/200-generated-docs.mdx#PaimaL2Contract) is built for developers to deploy their own game as an L2 which seamlessly works with Paima Engine.

In addition to being a core part of infrastructure for the L2 itself, this contract enables developers to earn revenue through collecting fees on every single posted game input. This fee will be held internally in the contract, and can be withdrawn by a specific **owner account** (which is defined upon deploying the contract).

The owner of the deployed L2 smart contract has the ability to:

- Set/change the fee
- Change the owner of the contract to a new address
- Withdraw collected funds from the contract

## Deploying the Contract

Generally the L2 contract requires no modification, and so you can simply follow the [general steps for deploying](./100-introduction.md).

More concretely, you can use the following in your Hardhat Ignition deploy file

```ts
const deploy = m.contract('PaimaL2Contract', [owner, fee]);
```

## Interacting with the Contract

Paima comes with some built-in tasks to easily interact with the Paima L2 contract. You can find all these commands by running `npx hardhat paima` or see the docs in the [@paima/evm-contracts](../../10000-libraries/100-evm-contracts/300-hardhat-tasks.md) NPM package.

This involves everything from withdrawing funds from the contract, changing the owner or changing the fees.

## Conclusion

Congratulations, you have officially deployed your L2 smart contract for your game! You will only need to deploy the contract once, and it will continue to work without any further interactions needed.
