# Hardhat task list

Paima Hardhat tasks allow easily interacting with the Paima contracts through the CLI or other external tools.

To use the Paima Hardhat tasks, follow these steps:

1. [Install Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started) (and all required peer dependencies) to your project.
2. Add `import @paima/evm-contracts/plugin` to the top of your `hardhat.config.ts` file
3. Run `npx hardhat paima` to see a list of all utilities provided

These are all the [hardhat tasks](https://hardhat.org/hardhat-runner/docs/advanced/create-task) available for the scope `paima`.

You can call each of these tasks using `npx hardhat paima task_name`

## Task list

### `PaimaL2Contract:setFee`

Sets the fee of a Paima L2 contract

Parameters:

- **contract** _(optional, string)_ : The contracts's address
- **fee** _(optional, string)_ : The new fee (wei)

### `PaimaL2Contract:setOwner`

Sets the owner of a Paima L2 contract

Parameters:

- **contract** _(optional, string)_ : The contracts's address
- **owner** _(optional, string)_ : The new owner address

### `PaimaL2Contract:withdrawFunds`

Withdraws funds out of the Paima L2 contract

Parameters:

- **contract** _(optional, string)_ : The contracts's address

### `PaimaL2Contract:submitGameInput`

Submit data to the Paima L2 contract

Parameters:

- **contract** _(optional, string)_ : The contracts's address
- **data** _(optional, string)_ : The data to submit either hex-encoded (0x...) or Paima concise-encoded

### `PaimaL2Contract:recentInputs`

Gets data recently submitted to the Paima L2 contract

Parameters:

- **contract** _(optional, string)_ : The contracts's address
- **data** _(optional, string)_ : The data to submit in hex-encoded for (0x...)
- **range** _(optional, int)_ : How far back to get events (default: look back 1000 blocks from tip)
