# Cardano Mint and Burn {#mint-burn}

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
  assets: (keyName: string, input: string) => {
    return JSON.parse(input);
  },
};

export interface CardanoMint {
  txId: string;
  metadata: string | null;
  assets: { asset: { policyId: string; assetName: string }; amount: string };
}
```

- The `metadata` field is hex encoded (if any), and it's the metadata in binary
form.
- The `assets` field has the minted or burned assets. The difference between a
mint and a burn is in the sign of `amount` when interpreted as a number.