# Carp funnel

This funnel allows using Cardano Primitives. It's enabled when the `CARP_URL` variable is present. Additionally, `CARDANO_NETWORK` needs to be set in order to be able to deterministically associate Cardano slots with the EVM blocks, and `CARDANO_CONFIRMATION_DEPTH` needs to be set so that the funnel can know when a block is considered stable.

## Requirements

An instance of Carp is required to index the data for this funnel. Additionally, the `MultieraAddressDelegationTask` task needs to be in the execution plan. For setup, refer to the [documentation](https://dcspark.github.io/carp/).

## Determinism

Ensuring consistency in the state transition for a block during synchronization across multiple synchronization rounds is crucial to ensure that the game state transitions are deterministic. To achieve this, events merged with a specific EVM block at height B are collected by considering both `timestamp(B)` and `timestamp(B - 1)`. The timestamps are then mapped to the corresponding absolute slots in Cardano, with an adjustment for finality. All events within this slot range are consolidated into a single state transition. This range is open on the lower bound, and closed on the upper bound. In the case where it's not possible to know if all the events in the range are already below the confirmation point, the funnel will wait before returning for enough Cardano blocks to be generated, in order to get above the maximum slot required.