# Cardano Projected NFT

Different blockchains may have different block times & finality, so trying to guarantee the state of blockchain A from blockchain B often requires timelock systems like [projected data](../../../700-multichain-support/1-nfts/2-projected-nfts/1-basics.mdx).

This primitive implements the Projected NFT system and, given Cardano NFTs are treated the same as any other asset in a UTXO, is seamlessly extended to be a general projected asset system (it is not limited to NFTs).

If your use-case does not require a guarantee the data is up-to-date to the second, consider using [the delayed state primitive](./20-delayed-state.md) instead.

## Projected NFT {#projected-nft}

### Example

```yaml
extensions:
  - name: "projected-nft"
    scheduledPrefix: cpn
    type: cardano-projected-nft
    startSlot: 22505578
    stopSlot: 32815924
    network: CardanoNetworkConfigEntryName
```

### Meaning

- `startSlot` is required and means that only events after that slot (exclusive)
  will be considered. This should be a slot that happened before the first
  transaction involving the assets.
- `stopSlot` is optional, and it stops the indexing at that point.

### Paima Concise format

The scheduled input for each event is of the following form.

```
cardanoTransfer = cpn|ownerAddress|previousTxHash|previousOutputIndex|currentTxHash|currentOutputIndex|policyId|assetName|status
```

Where `status` is one of:
- `Lock`
- `Unlocking`
- `Claim`
- `Invalid`

### Utility functions

You can get all the projected NFTs for an address with the utility function below

```ts
export interface ICdeCardanoGetProjectedNftResult {
  amount: string;
  asset_name: string;
  current_tx_hash: string;
  current_tx_output_index: number | null;
  for_how_long: string | null;
  owner_address: string;
  plutus_datum: string;
  policy_id: string;
  previous_tx_hash: string | null;
  previous_tx_output_index: number | null;
  status: 'Lock' | 'Unlocking' | 'Claim' | 'Invalid';
}

export declare function getCardanoAddressProjectedNfts(
  readonlyDBConn: Pool,
  address: string
): Promise<ICdeCardanoGetProjectedNftResult[]>;
```
