# Game Versioning

Games often require frequent updates to keep users engaged, so Paima makes releasing new versions of games as easy as possible.

## Updating your state machine

Since games written with Paima are typically all onchain, you need to be able to introduce your new code without breaking validation of old data.

This is done by allowing games to modify which state machine they use based on the current block number. We call this the `gameStateTransitionRouter`.

The process to [pack your game code](../1-setup/1-how-to-use-paima-engine.md#packing-your-game-code) will set it up so that Paima Engine can easily find this router function, and Paima Engine will automatically call it to know which state transition function to call for a given block height.

Here is an example of how you can update your transition router to call your new state transition function
```typescript
const V2_START_HEIGHT = ...;

function gameStateTransitionRouter(blockHeight: number) {
  if (ENV.START_BLOCKHEIGHT <= blockHeight && ENV.START_BLOCKHEIGHT + V2_START_HEIGHT > blockHeight) {
    return gameStateTransitionV1;
  }
  if (ENV.START_BLOCKHEIGHT + V2_START_HEIGHT <= blockHeight) return gameStateTransitionV2;
  else return gameStateTransitionV1;
}
```

## Updating a game with active players

For a game with active players, submitting a new version of the game with a new state machine is not enough. We actually need to have clear versioning for the backend so the middleware/frontend know if they are compatible. This is important in cases such as making upgrades to the round executor, but a user can still be left on an old version of the frontend/middleware loaded on their device and need to refresh/update.

As such we will add versioning to the game's whole backend, and ensure that when the middleware is compiled it targets a specific major version.

### Semantic Versioning

We will use the classic semantic versioning of `MAJOR.MINOR.PATCH` format. In our case for games, specifically:

1. Major versions must be incremented when anything in the STF is updated (thus including the round executor) or anything else which breaks backward compatibility for the middleware.
2. Minor version must be incremented when new features are added to the backend which are compatible.
3. Patch version is incremented when compatible bug fixes are made.

### Specifying Version

#### For your frontend

When initializing the middleware, pass your app's version number to `initMiddlewareCore`

```typescript
export const gameBackendVersion: VersionString = ...;
export const GAME_NAME: string = ...;

initMiddlewareCore(GAME_NAME, gameBackendVersion);
```

#### For your backend

TBD. This is still in development: https://github.com/PaimaStudios/paima-engine/issues/209

### Verifying Version Compatibility In Middleware

It's up to you as a developer to check if the versions match in the place that makes the most sense for your game, and handle it the way you want.

```typescript
import { localRemoteVersionsCompatible } from '@paima/sdk/mw-core';

async function someAction() {
  // check if versions match
  await localRemoteVersionsCompatible();
}
```

The only place Paima will check for you is inside the built-in `userWalletLogin` utility function, which will throw a `PaimaMiddlewareErrorCode.BACKEND_VERSION_INCOMPATIBLE` if the major versions do not match. This won't be enough to warn users already playing a game to refresh their app if the backend version changes.
