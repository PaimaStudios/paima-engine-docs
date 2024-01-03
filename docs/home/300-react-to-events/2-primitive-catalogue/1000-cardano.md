# Cardano Primitives

- [Stake Delegation](#stake-delegation).
- [Delayed asset](#delayed-asset).

## Stake Delegation {#stake-delegation}

### Example

```yaml
extensions:
  - name: "Cardano Stake Delegation"
    type: cardano-stake-delegation
    pools:
      - "00000000000000000000000000000000000000000000000000000001"
      - "00000000000000000000000000000000000000000000000000000002"
    startSlot: 32815320
    stopSlot: 32815924
    scheduledPrefix: cd
```

### Meaning

- `startSlot` is required and means that only delegation events after that slot (exclusive) will be considered.
- `stopSlot` is optional, and it stops the indexing at that point for that pool.
- `pools` is a list of pool credentials to keep track of.

### Paima Concise format

The scheduled input for each event is of the following form.

```
prefix|address|pool
```

where:

- `prefix` is the `scheduledPrefix` specified in the config file,
- `address` is the stake credential of the address in CBOR.
- `pool` if the event is a delegation event, this is the pool. If the staking key is deregistered, or delegated to a pool outside the indexed ones, this will be null.

### Utility functions

`getCardanoAddressDelegation` can be used to get the current pool (if any). It
must be called with the stake credential of the address. This is the state up to
the last delegation transaction associated to this address, but this doesn't
mean that the there is an epoch boundary between this delegation event an the
current epoch, so this address may still not be receiving rewards from the pool
returned by this function.

```ts
export declare function getCardanoAddressDelegation(
  readonlyDBConn: Pool,
  address: string
): Promise<string | null>;
```

Example using cml:

```ts
const address = Address.from_bech32(addressBech32);
const stakingCred = address.staking_cred();

let credential: Buffer;

if (stakingCred) {
  credential = Buffer.from(stakingCred.to_bytes());
}

getCardanoAddressDelegation(dbConn, walletAddress);
```

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
