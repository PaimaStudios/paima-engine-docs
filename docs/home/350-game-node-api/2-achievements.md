# Achievements

[PRC-1] defines a standard API for Paima Engine game nodes to serve achievement
metadata and progress. Paima Engine itself includes an implementation of this
API that only requires your game to export an achivement list and submit SQL
updates to set player progress.

## Achievement metadata

When serving the achievements API, Paima Engine will attempt to use the `achievements` export with type `Promise<AchievementMetadata>` from your `packaged/endpoints.cjs`, if it exists. 

```ts
// api/src/index.ts
const achievements: Promise<AchievementMetadata> = Promise.resolve({
    game: {
        id: "example",
    },
    list: [
        {
            name: "finish-chapter-1",
            displayName: "Over The River",
            description: "Finish Chapter 1.",
        },
        {
            name: "finish-chapter-2",
            displayName: "Through The Woods",
            description: "Finish Chapter 2.",
        },
    ],
});

export default RegisterRoutes;  // The usual default export.
// highlight-next-line
export { achievements };  // Include this to enable the achievement API.
```

Achievement metadata uses types defined in [PRC-1] as well as the following:
```ts
/** The type of the `achievements` export of `endpoints.cjs`. */
export interface AchievementMetadata {
  /** Game ID, name, and version. */
  game: Game;
  /** Achievement types. */
  list: Achievement[];
  /**
   * Per-language overrides for achievement display names and descriptions.
   * Falls back to base definition whenever absent.
   */
  languages?: {
    [language: string]: {
      [name: string]: {
        displayName?: string;
        description?: string;
      };
    };
  };
}
```

TypeScript definitions for `AchievementMetadata` and [PRC-1] can be imported from `@paima/utils-backend`:
```ts
import type { AchievementMetadata, Game, Achievement } from '@paima/utils-backend';
```

## Achievement progress

Paima SDK exports `pgtyped` queries to store and retrieve achievement progress.
They can be imported and used in your API or a state transition function:

```js
// highlight-next-line
import { getAchievementProgress, setAchievementProgress } from '@paima/db';
// ... other imports ...

async function wonBattle(wallet: number, blockTime: Date, dbConn: Pool): Promise<SQLUpdate[]> {
  // Get user's current achievement progress.
  // highlight-next-line
  const row = (await getAchievementProgress.run({ wallet, names: ['win-10-battles'] }, dbConn))[0];
  if (!row?.completed_date) {
    // Not complete yet. Add one, mark completed if needed, and store it back.
    const newProgress = (row?.progress ?? 0) + 1;
    return [
      // highlight-next-line
      [setAchievementProgress, {
        name: 'win-10-battles',
        wallet,
        completed_date: newProgress >= 10 ? blockTime : null,
        progress: newProgress,
        total: 10,
      } satisfies ISetAchievementProgressParams],
    ];
  } else {
    // Already complete. Nothing to update.
    return [];
  }
}
```

Achievement progress stored this way will be served by Paima Engine's built-in
PRC-1 implementation.

[PRC-1]: ../20000-PRCs/prc-1.md
