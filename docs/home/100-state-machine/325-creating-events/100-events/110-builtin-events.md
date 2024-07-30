# Built-in events

Paima Engine comes with built-in events:
1. `BatcherHash` for whenever a [batcher](../../200-read-write-L2-state/400-batched-mode.md) has an update about the progress of a user's transtion
2. `RollupBlock` for whenever a new block is created in the rollup

These built-in events can be imported using
```ts
import { BuiltinEvents } from '@paima/sdk/events';
```

<!-- TODO: add more docs on these once we have the docgen ready -->
