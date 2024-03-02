# Carp Funnel

This funnel allows using Cardano Primitives leveraging [Carp](https://dcspark.github.io/carp/docs/intro). It's enabled when either Cardano is specified in the [settings](./200-configuration.md) or [.env](../../1-setup/4-environment-config-values.md).

## Configuration

- `network` which Cardano network this funnel will track
- `confirmationDepth` when a block is considered stable
- `paginationLimit` used as the pagination limit for underlying Carp queries

## Requirements

An instance of Carp is required to index the data for this funnel. Additionally, the `MultieraAddressDelegationTask` task needs to be in the execution plan. For setup, refer to the [documentation](https://dcspark.github.io/carp/).

## Determinism

Ensuring consistency in the state transition for a block during synchronization across multiple synchronization rounds is crucial to ensure that the game state transitions are deterministic. To achieve this, events merged with a specific EVM block at height B are collected by considering both `timestamp(B)` and `timestamp(B - 1)`. The timestamps are then mapped to the corresponding absolute slots in Cardano, with an adjustment for finality. All events within this slot range are consolidated into a single state transition. This range is open on the lower bound, and closed on the upper bound. In the case where it's not possible to know if all the events in the range are already below the confirmation point, the funnel will wait before returning for enough Cardano blocks to be generated, in order to get above the maximum slot required.