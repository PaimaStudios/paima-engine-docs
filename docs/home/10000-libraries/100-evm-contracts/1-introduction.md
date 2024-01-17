# Introduction


:::info
NPM package: [@paima/evm-contracts](https://www.npmjs.com/package/@paima/evm-contracts)
:::

This package contains 3 core folders:

- [`contracts`](./200-solidity/200-generated-docs.mdx) which holds all the Solidity contracts for Paima
- `abi` which holds the ABI for all the contracts
- [`plugin`](./300-hardhat-tasks.md) which contains a Hardhat plugin containing [Hardhat tasks](https://hardhat.org/hardhat-runner/docs/advanced/create-task) to easily interact with these contracts from the command line

# Goals in designing this package

Users can:

- Access utility functions for Paima contracts (ex: withdraw from NFT sale contract)
- Use Paima Solidity contracts from their projects
- Use Paima ABIs from their projects (ex: can easily generate types for the contracts)
- Pin a specific version of the contracts so that the deployment is reproducible
- Combine the setup with other Hardhat plugins & tools

