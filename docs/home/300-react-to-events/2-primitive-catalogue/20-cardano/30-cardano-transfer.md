
# Cardano Transfer {#transfer}

Keeps track of the entire (between the indexed slots) transaction history of a
payment credential or particular address.

### Example

```yaml
extensions:
  - name: "CardanoTransfer"
    type: cardano-transfer
    credential: 8200581c55edc34de172a4a3ba9cac51f041187c84478d68e788dd6cf6f0b3d9 
    startSlot: 12472120
    stopSlot: 12500000
    scheduledPrefix: ct
    network: CardanoNetworkConfigEntryName
```

### Meaning

- `startSlot` is required and means that only transactions that happen after that slot (exclusive) will be considered.
- `stopSlot` is optional, and it stops the indexing at that point.
- `credential` can be a hex encoded payment credential, in which case all
associated addresses are indexed, regardless of the staking part. Or it can be
bech32 address instead, in this case the indexed transactions are those with the
same exact address (same payment part and staking part).

### Paima Concise format

The scheduled input for each event is of the following form.

```
cardanoTransfer  = ct|txId|metadata|inputCredentials|outputs
```

It can be parsed with a rule of the form:

```ts
const cardanoTransfer: ParserRecord<CardanoTransfer> = {
  txId: PaimaParser.NCharsParser(0, 64),
  metadata: PaimaParser.OptionalParser(null, PaimaParser.RegexParser(/[a-f0-9]*/)),
  inputCredentials: PaimaParser.ArrayParser({
    item: PaimaParser.RegexParser(/[a-f0-9]*/),
  }),
  outputs: (keyName: string, input: string) => {
    return JSON.parse(input);
  },
};

interface CardanoTransfer {
  txId: string;
  metadata: string | null;
  inputCredentials: string[];
  outputs: {
    asset: { policyId: string; assetName: string } | null;
    amount: string;
    address: string;
  }[];
}
```

- The metadata field is in its binary form, but hex encoded.
- The entries in `inputCredentials` are also hex encoded. Each one is the binary
representation of the payment key (64 characters or 32 bytes).
- `outputs` preserves the same order as in the binary transaction. The `asset`
will be `null` when the amount is in lovelace.

