# Setup

Paima precompiles allow games to define specific addresses that are only part of
the rollup, instead of belonging to any of the underlying chains (or users). You can think of these as [namespaces](https://en.wikipedia.org/wiki/Namespace) for rollup-emitted events.

Notably, makes it much easier to query rollup information in the following two cases:
1. [ticks](../50-timers-ticks.mdd) that trigger through the passage of time
2. [event logging](../100-events/1-introduction.md) for external 

When using the templates, these can be defined in a `precompiles/` directory

## Definitions

All the precompiles for your application should be put into `precompiles/src/index.ts`

```ts
import { generatePrecompiles } from '@paima/sdk/precompiles';

export enum PrecompileNames {
  // highlight-next-line
  GameTick = 'game-tick',
}

export const precompiles = generatePrecompiles(PrecompileNames);
```

Then, when registering timers or events under to trigger under this precompile, simply reference the precompile by name

```ts
createScheduledData(
  `tick|${input.n + 1}`,
  someBlockHeight,
  // highlight-next-line
  PrecompileNames.GameTick
)
```

When you compile your state machine, Paima will create a `precompiles.cjs` file that contains all your precompile definitions necessary to create your rollup.
