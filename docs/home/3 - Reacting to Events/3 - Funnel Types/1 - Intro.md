# Paima Funnel

A core library which allows a consumer to initialize a chain funnel object which holds state regarding:

- The blockchain node (`CHAIN_URI`)
- The deployed Paima Contract address (`CONTRACT_ADDRESS`)
- The set of [Chain Data Extension (CDEs)](../2%20-%20chain-data-extensions.md) that the developer provided

Notably, funnels play a key role in allowing Paima to not just synchronize a single chain, but also combine multiple different data sources together such as DA layers, merging L1+L2 data together, or merging NFT data from different chains.

All Paima Funnels implement a simple interface

```typescript
interface ChainFunnel {
  getExtensions: () => ChainDataExtension[];
  extensionsAreValid: () => boolean;
  recoverState: () => Promise<void>;
  readData: (blockHeight: number) => Promise<ChainData[]>;
  readPresyncData: (fromBlock: number, toBlock: number) => Promise<PresyncChainData[]>;
}
```

Multiple funnels are combined together based on the developer's needs using the [decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern), allowing to mix-and-match funnel types depending on the game's setup to get all the data they need.

At its core, Paima will call the `readData` function according to `POLLING_RATE` (which by default is based on `BLOCK_TIME`), and pass in the next expected block height (based off what is stored on disk by the Paima state machine).

Paima funnel is in charge of filling the `ChainData` which represents the combined output of all the different funnels for a block. Its type is as follows

```typescript
export interface ChainData {
  timestamp: number;
  blockHash: string;
  blockNumber: number;
  submittedData: SubmittedData[];
  extensionDatums?: ChainDataExtensionDatum[];
}
```