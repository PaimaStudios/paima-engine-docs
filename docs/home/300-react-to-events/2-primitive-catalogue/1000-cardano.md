# Cardano Primitives

- [Stake Delegation](#stake-delegation).

## Stake Delegation

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

`getCardanoAddressDelegation` can be used to get the current pool (if any). It must be called with the stake credential of the address.

```ts
export declare function getCardanoAddressDelegation(readonlyDBConn: Pool, address: string): Promise<string | null>;
```

Example using cml:

```ts
const address = Address.from_bech32(addressBech32);
const stakingCred = address.staking_cred();

let credential: Buffer;

if(stakingCred) {
    credential = Buffer.from(stakingCred.to_bytes());
    stakingCred.free();
}
address.free();

getCardanoAddressDelegation(dbConn, walletAddress);
```