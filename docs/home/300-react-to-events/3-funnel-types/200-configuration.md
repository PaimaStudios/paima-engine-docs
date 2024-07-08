# Configuring your Funnel

On startup, Paima Engine will look for a file name either
`config.${NETWORK}.yml` or `config.${NETWORK}.yaml` for this. If this is not
provided, the config defaults to the one provided with the environment
variables (learn more [here](../../1-setup/4-environment-config-values.md))

## Format

The format of the config file is a yaml object mapping of a network name to the
config object. The name is used then in the `extensions.yml` configuration in
order to associate Paima Primitives with a particular network.

Each entry should have a `type` variable, which can be one of
- `evm-main`
- `evm-other`
- `cardano`
- `mina`
- `avail-main`
- `avail-other`

There can be only one entry of the `main` type. In the case of `evm-main`, this
network is the one that has the Paima contract deployed. 

Currently also there should only be one entry of type `cardano` and `mina`.

There can be multiple entries of the `evm-other` or `avail-other` types. A
funnel is instantiated for each one of these.

## Variables

For EVM networks, the following variables are required:

```js
chainUri: string
chainId: number
chainCurrencyName: string
chainCurrencySymbol: string
chainCurrencyDecimals: number
```

Also, if the network is `evm-main`, the paima contract address needs to be provided: 

```js
paimaL2ContractAddress: string
```

There are also some optional variables:

```js
chainExplorerUri: string
funnelBlockGroupSize: number
presyncStepSize: number
```

**Note:** These do *not* default to the value in the corresponding
environment configuration if not provided. Paima only defaults to the values in
the ENV file when the entire config file is missing.

All the variables except `funnelBlockGroupSize` have the same purpose and
default values as they have in the environment configuration. Please refer to
[that section](../../1-setup/4-environment-config-values.md) for details.

`funnelBlockGroupSize` it's used to control how many blocks are fetched in a
single request per network, which helps if a network has a lower rate limit.

Also, for funnels that synchronize a parallel network, there are options to set
up a delayed state. See [this](common-concepts/parallel-networks#delayed-state)
for more details.

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

Hardhat2:
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

Avail:
  type: avail-other
  lightClient: 'http://localhost:7007'
  rpc: ws://127.0.0.1:9944
  delay: 200 
  confirmationDepth: 10
  funnelBlockGroupSize: 100
  presyncStepSize: 1000
```

## Extensions

If the config file is present, then the extensions should use the `network` key to assign the primitive to a particular funnel. Learn more about extensions [here](../2-primitive-catalogue/1-introduction.md#configuration)

```yaml
# extensions.yml
extensions:
  - name: "Bar"
    type: "erc20"
    contractAddress: "0x0000000000000000000000000000000000000001"
    startBlockHeight: 0
    # This is required so that the funnel can know which extensions it should care about
    network: "Hardhat1"

  - name: "Foo"
    type: "erc20"
    contractAddress: "0x0000000000000000000000000000000000000002"
    startBlockHeight: 100
    network: "Hardhat2"
```
