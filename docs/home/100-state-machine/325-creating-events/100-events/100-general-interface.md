# General Interface

Events are defined by two components:
1. A `name`, which must be unique in your app
1. A set of `fields` which defines the event content. Fields are made up of
    1. A `name` for a *positional argument*
    2. A `type` defined with [typebox](https://github.com/sinclairzx81/typebox) to ensure JSON compatibility
    3. A `indexed` boolean for whether or not events will be [indexable](https://en.wikipedia.org/wiki/Database_index) on this field

Here is an example of an event that tracks completing quests in a game. In this example, we create an `index` on the `playerId` so a client could get realtime updates whenever a user has completing a quest.

```typescript
import { Type } from '@sinclair/typebox';
import { genEvent } from './types.js';

const QuestCompletionEvent = genEvent({
  name: 'QuestCompletion',
  fields: [
    {
      name: 'playerId',
      type: Type.Integer(),
      indexed: true,
    },
    {
      name: 'questId',
      type: Type.Integer(),
    },
  ],
} as const);
```

*TODO*: the API to register these events with Paima Engine itself is still under development

# Listening to events

You can listen to these events easily from Javascript just by importing the event definition

A few things to note:
1. You can `filter` events based on the `indexed` fields. Filtering is optional, and you can filter by any set (or subset) of `indexed` fields of the event
2. You can register multiple subscribers to the *same* event. Paima Engine will handle [multiplexing](https://en.wikipedia.org/wiki/Multiplexing) under the hood so that subscriptions with the same `event+filter` combination do not cause duplicate network requests
3. You can call the `unsubscribe` response at any time to lower the number of open connections you have

```ts
import { PaimaEventManager } from '@paima/sdk/events';

const unsubscribe = await PaimaEventManager.Instance.subscribe(
  {
    topic: QuestCompletionEvent,
    filter: { playerId: undefined }, // all players
  },
  event => {
    console.log(`Quest ${event.questId} cleared by ${event.playerId}`);
  }
);

// later
await unsubscribe();
```

# Posting new events

You can publish messages from your game's state machine at any time. You need to provide *all* fields (both those indexed and those that aren't). Paima Engine, under the hood, will take care of only sending these events to the clients that need them.

```ts
import { PaimaEventManager } from '@paima/sdk/events';

await PaimaEventListener.Instance.sendMessage(QuestCompletionEvent, { questId: 5, playerId: 10 });
```
