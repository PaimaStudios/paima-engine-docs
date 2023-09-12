---
sidebar_position: 1
---

# Scheduling Events and Timers

Games heavily rely on passive time to trigger events, such as limits on the length of a match or the duration of status effects. Paima supports these through a generic system called `scheduledData` that keeps track of which inputs (that conform to your app's grammar) to trigger at which block height (used instead of timestamps).

Paima will fetch, execute and commit the result of any scheduled data for a block BEFORE it considers any regular input inside the block.

There are three common usages of timers in Paima

## 1. Simple durations

There are two functions for scheduling events
- `createScheduledData(inputData: string, blockHeight: number): SQLUpdate`
- `deleteScheduledData(inputData: string, blockHeight: number | null): SQLUpdate`

Notably, `deleteScheduledData` is very useful to cancel timers. For example, a user may have 5 minutes to make a move otherwise the game will pick a random move for them (often called a `zombie round`). The easiest way to do this is to use `createScheduledData` to schedule a random move (assume the player will not submit a move), and then cancel it if they actually do make a move.

## 2. Synchronizing access to a shared state

See [parallelism](../2-read-write-L2-state/2-parallelism.md)
