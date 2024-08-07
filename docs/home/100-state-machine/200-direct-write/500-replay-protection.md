# Replay protection

Given that games made with Paima Engine are technically "open" (meaning anyone can submit valid game input), one thing which we need to look out for is [replay attacks](https://en.wikipedia.org/wiki/Replay_attack). Replay attacks are situations classically in blockchains (but liable to any openly accessible state machine) where a previous valid input is resubmitted to the state machine/blockchain. Usually this is done by bad actors, and can cause various issues.

In our case, there are a few scenarios where replays can happen:

1. Repeating a user's transaction for one batch either multiple times in the same batch, or in different batches
1. Resubmitting a user's transaction for one batch for a different app
1. If our backend crashes in the middle of processing a block, it will re-pull the block via the funnel and re-process all game inputs again (even the ones it processed half-way through prior to crashing).

We handle the base replay protection by having the user calculate `sign(securityPrefix || input || timestamp)` where:
1. `securityPrefix` is described [here](./600-autosign.md)
2. `timestamp` is used for replay protection

However, just storing this signature is not enough to protect against [signature malleability](https://github.com/kadenzipfel/smart-contract-vulnerabilities/blob/master/vulnerabilities/signature-malleability.md). As such, we require introducing the concept of nonces to game inputs to address the replay vectors above.

## Upgrading submittedData

To support nonces, we first must add a `nonce` field to `submittedData`.

```ts
{
    inputData: "s|...",
    userAddress: "0x...",
    inputNonce: "9af3uasdfo2h..."
}
```

A nonce will be the hash of various other values (depending on how the game input was submitted), and thus be a string. Nonces are generated by Paima Funnel for each `submittedData` when they read from on-chain.

## Batch Submitted Game Input Nonces

Paima Funnel takes the batched transaction, separates out the `submittedData`, and potentially performs two steps of computation for each:

1. Timestamp checking
2. Nonce generation

In timestamp checking, the `millisecondTimestamp` is converted into seconds and checked whether it is within 24 hours of the `timestamp` of the block that the batched transaction was included in. In other words, all signed game inputs inside of batch transactions have a 24 hour "validity period". If the difference between the two timestamps is greater than 24 hours, then throw away the submittedData as it is deemed invalid. (As such, it is important for clients to honestly submit the time when signing in order to ensure the game input is accepted.)

If timestamp checking succeeds, then the batch submitted game inputs have a nonce generated by Paima Funnel which is a hash of the:

```js
[millisecondTimestamp] + [userAddress] + [game input]
```

## Directly Submitted Game Input Nonces

Directly submitted (non-batched) game inputs will be given a nonce by Paima Funnel which is a hash of the:

```js
[blockHeight] + [userAddress] + [game input]
```

Unlike with batched game inputs, we can use block height here. This is because the blockchain prevents replay attacks (by bad actors) of the game input automatically, so it's safe to create a unique identifier with the block height and not some signed auxillary user-submitted data (the timestamp for batched game input nonces).

## Scheduled Input Nonces

Scheduled inputs should be created with an empty string nonce. Empty string nonces are impossible for non-scheduled inputs, and as such can be treated as always unique.

This empty string nonce model for scheduled inputs is secure from replays as long as we ensure that we delete the scheduled input at the same time (as a part of the same set of SQL queries) as applying the results of the STF on the scheduled input.

## Paima SM Nonce Checking

Paima SM will create a `nonces` table in the game DB on initial start, and use this table to record all nonces of game inputs which have finished processing and check for duplicates.

Nonce checking and saving works as such:

1. Every time a game input is processed by Paima SM, it goes through a nonce checking process where it looks up whether the nonce exists in the `nonces` table (the nonce is the primary key).
2. If yes, throw away the game input and don't run the STF as it would otherwise replay the game input (bad actor replaying a batched tx, or the db crashed while processing a block).
3. If no (or empty string nonce, aka. scheduled input), continue using the game input in the STF.
4. After the game input has finished processing in the STF and returns a set of SQL queries, add one update query to add the nonce to the `nonces` table, where the primary key is the nonce and the value is the current block height (from the `ChainData` that contained this game input).

As such, we prevent all replaying thanks to nonces, whether it is by a bad actor, or due to the backend dying while processing a block.

Nonces will be garbage collected every week, but this is safe, as the validity period of transactions with nonces would stop old transactions from being replayed anyway.
