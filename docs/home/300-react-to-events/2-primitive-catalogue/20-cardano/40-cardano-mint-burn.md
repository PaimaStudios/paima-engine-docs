# Cardano Mint and Burn {#mint-burn}

Tracks all the instances of a mint or burn of set of policy IDs.

If you're looking to track these assets after they've been minted, use the [delayed state](./20-delayed-state.md) primitive.

### Example

```yaml
extensions:
  - name: "CARDANO-MINT-BURN"
    type: cardano-mint-burn
    policyIds:
      - "0fc891fb7368d3b7c7b88815c203fda0d6862b0f1d797222672e91fe"
      - "0fc891fb7368d3b7c7b88815c203fda0d6862b0f1d797222672e91ff"
    startSlot: 722300
    stopSlot: 733216
    scheduledPrefix: cmb
    network: CardanoNetworkConfigEntryName
```

### Meaning

- `startSlot` is required and means that only mints events after that slot (exclusive) will be considered.
- `stopSlot` is optional, and it stops the indexing at that point.
- `policyIds` is an array with the collections to index.

### Paima Concise format

The scheduled input for each event is of the following form.

```
cardanoMint = cmb|txId|metadata|assets
```

It can be parsed with a rule of the form:

```ts
const cardanoMint: ParserRecord<CardanoMint> = {
  txId: PaimaParser.NCharsParser(0, 64),
  metadata: PaimaParser.OptionalParser(null, PaimaParser.RegexParser(/[a-f0-9]*/)),
  assets: PaimaParser.Json(),
};

interface AssetAmount {
    policyId: string;
    assetName: string;
    amount: string;
}
export interface CardanoMint {
  txId: string;
  metadata: string | null;
  assets: { [policyId: string]: { [assetName: string]: string } };
  inputAddresses: { [address: string]: AssetAmount[] }
  outputAddresses: { [address: string]: AssetAmount[] }
}
```

- The `metadata` field is hex encoded (if any), and it's the metadata in binary
form.
- The `assets` field has the minted or burned assets. The difference between a
mint and a burn is in the sign of `amount` when interpreted as a number.
- The `inputAddresses` represents addresses who at least partially burned the tracked tokens
- The `outputAddresses` represents addresses who at least partially minted the tracked tokens

### Detecting who minted and who burned

Some key facts about Cardano transactions to help understand how to parse this information:
- Cardano transactions can contain multiple mints & burns of different tokens in the same transaction
- Different addresses can mint/burn tokens in the same transactions (txs have multiple inputs & outputs)
- The same address can mint/burn multiple times in the same transaction (different inputs or different outputs)
- All mints & burns share the same `metadata` field

A consequence of this is that not all the token supply found in the input may have been burned. In other words, the following transaction is possible:
1. `inputAddresses` contains 50 token X
2. `assets` contains -30 token X
3. `outputAddresses` contains 20 token X
