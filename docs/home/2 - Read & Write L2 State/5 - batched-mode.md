---
sidebar_position: 5
---

# Batched mode

Paima supports two different modes for inputs:
1. Non-batched mode. This only supports EVM wallets set to the same network as used for the settlement layer of the app. Transaction are submitted directly by the user (and they cover the transaction fees)
2. Batched mode. Users sign data, and transactions are crafted by the batcher. This allows users to use the app with different EVM networks or wallets from different cryptocurrencies.

We protect batched mode users by calculating `sign(securityPrefix || input || timestamp)` where:
1. `securityPrefix` is described [here](./7%20-%20autosign.md)
2. `timestamp` is used for replay protection. You can learn more about replay protection [here](./6%20-%20replay-protection.md)

The idea behind it is that rather than each user submitting their own transactions directly on-chain, instead they:

1. Create a valid game input.
2. Sign the payload with their private key.
3. Provide the game input + signature + their address to a batcher.
4. The batcher compiles the signed game inputs of many users and submits one "batched game input" transaction the contract.

## Paima Engine Support

One of the great things about game input batching is that we can support it on the level of Paima Engine such that every game will be able to automatically get to take advantage of it for free. Furthermore, the implementer of a game state machine does not even have to consider batched game inputs (besides the fact that address types may vary if supporting other L1s).

Specifically, Paima Funnel will handle unbundling the batch for you so that each entry inside the batch will be treated as if it was an individual input from the perspective of your app (technically speaking, the single `submittedData` that contains the entire batch will be split such that each entry inside the batch will be its own `submittedData`).

In order for this to be secure, while processing a batched game input transaction Paima Funnel verifies every signature matches for every game input supplied. If not, then that game input is thrown away. As such, when constructing a `submittedData`, the address will be verified and can be trusted if they end up inside your app (of note, in regular submitted game input this signature validation is performed by the blockchain validators who verified the tx before it was added to a block, so now we have to do it instead). Thus the game state machine will be able to trust the authenticity of all `submittedData`, whether or not they came from batched game input txs, and not have to even consider how they were submitted.

## Batched Input Format

We will specify a standard batched input transactions are required to follow in order to be considered valid.

```
B~
userAddress/userSignature/input/millisecondTimestamp~
userAddress/userSignature/input/millisecondTimestamp~
userAddress/userSignature/input/millisecondTimestamp~
```

TODO: maybe not? Why is `batchedToString` using `/`?

Key notes:
- `B` is used to denote this is a batched game input transaction. It is simply the ASCII character `B`.
- `~` in practice is actually the `\x02` ASCII character
- `/` in practice is actually the `\x03` ASCII character
