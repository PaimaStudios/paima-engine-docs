# Delayed State

Different blockchains may have different block times & finality, so trying to guarantee the state of blockchain A from blockchain B often requires timelock systems like [projected data](../../../700-multichain-support/1-projected-nfts/1-introduction.mdx).

However, not all use-cases care about having the data entirely up-to-date. For example, NFT-gated features should work even if your knowledge of whether or not the user owns an NFT is 5 minutes delayed. That is to say, delayed data is **not** guaranteed to be up-to-date (hence *delayed*)

This delay is also generically unavoidable with chains that don't have instant finality like Cardano as we generally want our app to update only with changes that have been finalized (which takes time).

## Delayed asset {#delayed-asset}

### Example

```yaml
extensions:
  - name: "delayed-asset1"
    type: cardano-delayed-asset
    fingerprints:
      - "asset1c43p68zwjezc7aaaaaaaaaaaaaaaaaaaaaaaaa"
      - "asset1c43p68zwjezc7bbbbbbbbbbbbbbbbbbbbbbbbb"
      - "asset1c43p68zwjezc7ccccccccccccccccccccccccc"
    policyIds:
      - "919d4c2c9455016289341b1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      - "919d4c2c9455016289341b1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
    startSlot: 22505578
    stopSlot: 32815924
```

### Meaning

- `startSlot` is required and means that only events after that slot (exclusive)
  will be considered. This should be a slot that happened before the first
  transaction involving the assets.
- `stopSlot` is optional, and it stops the indexing at that point.
- `fingerprints` and `policyIds` select the assets to be indexed. It's not
necessary to provide both.
- `fingerprints` takes the cip14 fingerprint in bech32, and indexes a single
asset (per entry in the array).
- `policyIds` will instead index all the assets in that policy.

### Utility functions

There are two functions that can be used to get the utxo entries for an address.
Depending on whether the filtering is done by fingerprint or by policy id. Note
that this doesn't necessarily return one entry per utxo, since each entry is for
a single asset. This means there may be more than one entry in the array with
the same `txId-outputIndex` pair. This can happen when filtering by policy id,
because an output have more than one asset.  In that case, the `assetName` can
be used to discriminate.

```ts
export interface CardanoAssetUtxo {
  txId: string;
  outputIndex: number;
  amount: string;
  policyId: string;
  assetName: string;
}

export declare function getCardanoAssetUtxosByFingerprint(
  readonlyDBConn: Pool,
  address: string,
  cip14Fingerprint: string
): Promise<CardanoAssetUtxo[]>;


export declare function getCardanoAssetUtxosByPolicyId(
  readonlyDBConn: Pool,
  address: string,
  policyId: string
): Promise<CardanoAssetUtxo[]>;
```
