# Setup

Paima precompiles allow games to define specific addresses that are only part of
the rollup, instead of belonging to any of the underlying chains (or users).


When using the templates, these can be defined in a `precompiles` directory in
the game by using the `generatePrecompile` function, and then set up with the
esbuild template through the configuration.

## Definitions
```ts
// precompiles/index.ts

export const precompiles = {
    ...generatePrecompile("foo"),
} as const;
```

## Esbuild configuration

```ts
const esbuild = require("esbuild");
const {
  generateConfig,
} = require("@paima/build-utils/standalone-esbuildconfig.template");

const { config, outFiles, workspace } = generateConfig(
  "api",
  "state-transition",
  "precompiles"
);
esbuild.build(config);
```

This will generate a `precompiles.cjs` package in the `packaged` folder. Paima
Engine will load this file on startup.


