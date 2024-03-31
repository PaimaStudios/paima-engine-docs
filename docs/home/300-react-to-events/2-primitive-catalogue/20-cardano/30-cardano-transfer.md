
# Cardano Transfer {#transfer}

Keeps track of the entire (between the indexed slots) transaction history of a
payment credential or particular address.

Rules for how this primitive gets triggered:
- Credential appears in the transaction witness (ex: an input to the transaction)
- Credential appears in the transaction output

Note: this primitive only gets triggered a single time per transaction (even if the transaction contains multiple outputs to the specified address)

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
representation of the payment key (64 characters or 32 bytes). This can give a hint on who made the transaction (see [below](#who-paid) for more on this).
- `outputs` preserves the same order as in the binary transaction. The `asset`
will be `null` when the amount is in lovelace.

### Detecting who made the payment  {#who-paid}

Trying to detect who actually made the transaction is difficult because transactions in Cardano can have multiple inputs and multiple outputs.

Example of edge-cases:
1. Multiple input addresses that don't belong to the user (ex: multiple exchanges addresses)
2. Script credentials (instead of payment credentials)
3. Funds coming from other mechanisms like reward withdrawal or pool deposit refunds

Therefore, although we provide access to the list of `inputCredentials`, if possible it is better to define a specific metadata format for your application that includes which address the payment should be credited to. The `metadata` for the transaction is given as part of the primitive.

Additionally, in cases where there are multiple outputs in the same transaction that trigger this primitive, we only trigger this primitive once. It is up to the app if it wants to aggregate multiple output values as a single payment, or keep them separated (possibly with a metadata hint about which address gets credited how much).

Also be careful: it's possible the credential you track appears neither in the input or the output. This happens because this primitive triggers whenever the transaction contains the credential as a witness, but witnesses are not limited to just inputs and are used for other features (ex: certificates) and as well as may be entirely extraneous (you can add more witnesses than actually needed).