# Multiple EVM network configuration

In order to be able to sync multiple evm networks, the (per network)
configuration needs to be provided in a yaml file instead of using the ENV vars.

On startup, Paima Engine will look for a file name either
`config.${NETWORK}.yml` or `config.${NETWORK}.yaml` for this. If this is not
provided, the config defaults to the one provided with the environment
variables.


## Format

The format of the config file is a yaml object mapping of a network name to the
config object. The name is used then in the `extensions.yml` configuration in
order to associate CDE's with a particular network, and also in some logs.

Each entry should have a `type` variable, which can be one of `evm-main`,
`evm-other` or `cardano`.

There can be only one entry with the `evm-main` type. This network is the one
that has the paima contract deployed. Currently also there should only be one
entry of type `cardano`.

There can be multiple entries of the `evm-other` type. A funnel is instantiated
for each one of these.

## Variables

For EVM networks, the following variables are required:

```js
chainUri: string
chainId: number
chainCurrencyName: string
chainCurrencySymbol: string
chainCurrencyDecimals: number
blockTime: number
```

Also, if the network is `evm-main`, the paima contract address needs to be provided: 

```js
paimaL2ContractAddress: string
```

There are also some optional variables:

```js
chainExplorerUri: string
pollingRate: number
funnelBlockGroupSize: number
presyncStepSize: number
```

**Note:** These do *not* default to the value in the corresponding
*environment configuration if not provided. Paima only defaults to the values in
*the ENV file when the entire config file is missing.

All the variables except `funnelBlockGroupSize` have the same purpose and
default values as they have in the environment configuration. Please refer to
[that section](environment-config-values) for details.

`funnelBlockGroupSize` it's used to control how many blocks are fetched in a
single request per network, which helps if a network has a lower rate limit.

## Example

```yaml
# config.localhost.yml
Hardhat1:
  type: evm-main
  chainUri: 'http://localhost:8545'
  chainId: 31337
  chainCurrencyName: 'Test Hardhat Tokens'
  chainCurrencySymbol: 'TEST'
  chainCurrencyDecimals: 18
  blockTime: 2
  paimaL2ContractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3'

Hardat2:
  type: evm-other
  chainUri: 'http://localhost:8546'
  chainId: 31338
  chainCurrencyName: 'ETH'
  chainCurrencySymbol: 'ETH'
  chainCurrencyDecimals: 18
  blockTime: 4
  # this regulates the amount of blocks fetched during the sync in a single round. It helps to avoid rate-limiting.
  funnelBlockGroupSize: 20

Cardano:
  type: cardano
  carpUrl: http://localhost:3000
  network: preview
  confirmationDepth: 10
  paginationLimit: 2
```

## Extensions

If the config file is present, then the extensions should use the `network` key to assign the primitive to a particular funnel.

```yaml
# extensions.yml
extensions:
  - name: "Bar"
    type: "erc20"
    network: "Hardhat"
    contractAddress: "0x0000000000000000000000000000000000000001"
    startBlockHeight: 0
    network: "Hardhat1"

  - name: "Foo"
    type: "erc20"
    contractAddress: "0x0000000000000000000000000000000000000002"
    startBlockHeight: 100
    # This is required so that the funnel can know which extensions should it care about
    network: "Hardhat2"
```