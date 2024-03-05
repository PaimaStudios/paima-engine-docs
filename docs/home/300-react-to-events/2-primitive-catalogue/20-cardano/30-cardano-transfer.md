
# Cardano Transfer {#transfer}

Keeps track of the entire (between the indexed slots) transaction history of a
particular address.

### Example

```yaml
extensions:
  - name: "CardanoTransfer"
    type: cardano-transfer
    credential: addr_test1qp27ms6du9e2fga6njk9ruzprp7gg3uddrnc3htv7mct8kwrwdlnpt07ycmdqyuw7lft338dt33tmr6xdwnn8ezsudpquved20
    startSlot: 12472120
    stopSlot: 12500000
    scheduledPrefix: ct
    network: CardanoNetworkConfigEntryName
```

### Meaning

- `startSlot` is required and means that only transactions that happen after that slot (exclusive) will be considered.
- `stopSlot` is optional, and it stops the indexing at that point.
- `credential` is the address to track. This can be a bech32 address, or a hex encoded credential.

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

