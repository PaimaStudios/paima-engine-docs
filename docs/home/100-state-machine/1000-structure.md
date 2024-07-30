# L2 Block structure

Rollups built with Paima Engine, similar to other blockchains, consist of blocks that contain transactions inside them. The key difference is that unlike typical chains, data that forms Paima blocks comes from [underlying sources](./300-react-to-events/3-funnel-types/1-common-concepts/1-intro.md) or [deterministic self-defined transitions](./325-creating-events/50-timers-ticks.md) as opposed to user inputs intrinstic to the system itself.

Paima-based rollups, unlike many chains, does not [Merklize](https://en.wikipedia.org/wiki/Merkle_tree) its state, as this comes with a [significant performance overhead](https://sovereign.mirror.xyz/jfx_cJ_15saejG9ZuQWjnGnG-NfahbazQH98i1J3NN8). Paima is not alone in doing this - this is done by other successful systems like [Solana](https://solana.com/) as well. 

## Transaction hash

Knowing the transaction hash is crucial to be able to reference the state and information about a given transaction on the rollup.

Note there are a few key properties we want to get from our hash function:
1. **client-side computable**: transaction hashes should be computable locally before it actually gets included inside a block. This helps write tools where you can query the status of the transaction before it gets included in a block.
2. **low memory requirement**: transaction hashes must be computable with small amounts of memory (ex: we never hash a giant blob of data. For anything that has a large amount of data, we first hash of the data (to turn it into a small string), and then past this has to the tx hash function). This is useful to make sure that transaction hashes can be calculated on devices with limited memory (ex: hardware wallets)
3. **avoid user injection**: transaction hashes never take in directly user-specified inputs (always hash things that users have control over) to avoid any chance of users injecting things that break parsers

There are a few tricky parts to computing transaction hashes in Paima-based rollups:
1. **Differentiating similar events in different chains**: since transactions in Paima often come from an underlying chain, we heavily leverage [caip-2](https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md) which is a standard to give unique IDs for every chain. This means that two identical transactions submitted on different chains, even if they have the exact same content, will result in a different transaction hash.
1. **Flattening events**: in chains like Ethereum, one transaction may (and in fact often do) trigger multiple events. Since Paima rollups considers these events each individual transactions, it means one transaction on the underlying chain may trigger multiple transactions in a rollup. To tackle this, we give a unique incrementing ID to each event triggered from the same transaction (`indexForEvent`) so that they all get a different final tx hash.
1. **Timers IDs**: Some transactions may be initiated by [timers](./325-creating-events/50-timers-ticks.md). We differentiate timers with [precompiles](./325-creating-events/300-precompiles/100-introduction.md), but the same timer can produce the same data (ex: "reset daily leaderboard") many times, and could even generate multiple identical events in the same block. To tackle this, we include both the block number where the timer is expected to trigger as well as a unique incrementing ID to each event triggered from the same tune (`indexForEvent`) so that they all get a different final tx hash.
1. **Separating elements**: Since Paima transaction hashes need to combine multiple different inputs of different length, we use a separator `|` to separate the field. 

To calculate a transaction hash, there are multiple cases that need to be handled:

1. For [primitives](./300-react-to-events/10-primitive-catalogue/1-introduction.md), 
```js
'0x' +
keccak_256(
  caip2Prefix |
  data.tx_hash |
  indexForEvent(data.tx_hash)
)
```

2. For [timers](./325-creating-events/50-timers-ticks.md),
```js
'0x' +
keccak_256(
  userAddress
  keccak_256(data.input_data) |
  scheduledBlockHeight |
  timerIndexRelativeToBlock
),
```

3. For [direct user transactions](./200-direct-write/20-write-data.md),
```js
'0x' +
keccak_256(
  submittedData.caip2 |
  submittedData.txHash |
  indexForEvent(submittedData.txHash)
)
```