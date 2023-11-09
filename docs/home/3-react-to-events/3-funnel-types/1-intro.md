# Paima Funnel

A core library which allows a consumer to initialize a chain funnel object which holds state regarding:

- The blockchain node (`CHAIN_URI`)
- The deployed Paima Contract address (`CONTRACT_ADDRESS`)
- The set of [Primitives](../2-primitive-catalogue/1-introduction.md) that the developer provided

Notably, funnels play a key role in allowing Paima to not just synchronize a single chain, but also combine multiple different data sources together such as DA layers, merging L1+L2 data together, or merging NFT data from different chains.

All Paima Funnels implement a simple interface:

```typescript
interface ChainFunnel {
  readData: (blockHeight: number) => Promise<ChainData[]>;
  readPresyncData: (fromBlock: number, toBlock: number) => Promise<PresyncChainData[]>;
  getDbTx(): PoolClient;
}
```

Funnels are meant to be stateless between blocks to avoid subtle bugs in the case of errors during the sync process (so that state properly gets reset), as well as to encapsulate the fact that funnels are executed together in a joint SQL transaction. Funnels that need state should use:
- For persistent storage, use the Paima SQL database. This can be use to hydrate the funnel type using a custom-defined `recoverState`. If used, you should NOT assume that data for your funnel being persisted in the database implies the game state machine will successfully be updated. Fetching data (funnels) and update the game machine are done in separate SQL transactions (so it's possible fetching data succeeds, but updating the game fails so re-fetching the data is required)
- A custom cache entry in `FunnelCacheManager` for state that either needs to be persisted (ex: query a batch of data that gets processed across multiple blocks) or that needs to be shared between funnels

Multiple funnels are combined together based on the developer's needs using a combination of the [composite pattern](https://en.wikipedia.org/wiki/Composite_pattern) and the [decorator pattern](https://en.wikipedia.org/wiki/Decorator_pattern), allowing to mix-and-match funnel types depending on the game's setup to get all the data they need.

## readData function

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
## readPresyncData function

When extensions are used, the runtime must start polling from a block height that was before any of the contracts referenced in the Primitives were deployed. Thus all events that take place (ie. all NFT mints/transfer events) are accounted for and are saved in the DB so the state machine has proper access to a valid copy of the current state of the contract. We call this the _pre-sync_ phase.

In other words, this function is meant to gather events for [Primitives](../2-primitive-catalogue/1-introduction.md#accessing-the-collected-data) that happened before `START_BLOCKHEIGHT`

## getDbTx

Gets the database transaction used when executing this funnel
