# Low-level API

Under the hood, Paima Engine uses [MQTT](https://mqtt.org/) for its event system. MQTT was chosen because:
1. It allows subscribing to realtime events based on a subset of filters ([docs](https://www.emqx.com/en/blog/advanced-features-of-mqtt-topics))
1. It has [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) support for event streaming
1. It allows QoS (*"Quality of Service"*) level including guaranteed message delivery ([docs](https://www.emqx.com/en/blog/introduction-to-mqtt-qos) - Paima sets a `qos` of 2 by default)
1. It can scale with [brokers](https://www.emqx.com/en/blog/mqtt-5-introduction-to-publish-subscribe-model) optionally, but has an [in-memory client](https://github.com/moscajs/aedes) for use-cases that don't need the scale (which Paima uses)

More concretely, when you define an event using Paima, `indexed` fields define the *topic* of the MQTT message and the non-indexed fields define the *content*

## Example

For example, for the given event that defines quest completion in a game,

```ts
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

- The MQTT topic generated is `game/playerId/{playerId}` (ex: `game/playerId/1`)
- The content of the MQTT messages is `{ questId: number }`

Note that all events starts with a prefix depending on its origin (`TopicPrefix`):
- `app` for events defined by the user
- `batcher` for events coming from the [batcher](../../200-read-write-L2-state/400-batched-mode.md)
- `node` for events that come from the Paima Engine node

## Manually writing MQTT

If you prefer to have more fine-grained controlled over the MQTT syntax (notably the way *topics* are generated), you can write events using the following direct form (internally, the event syntax gets converted down to this form)

<!-- TODO: better syntax for this that doesn't expose things like TopicPrefix or PaimaEventBrokerNames -->

```ts
export const Events = {
  QuestCompletion: {
    path: ["foo", "bar", { name: 'playerId', type: Type.Integer() }],
    type: Type.Object({
      questId: Type.Integer(),
    }),
  },
} as const satisfies Record<string, Omit<EventPathAndDef, 'broker'>>;
```

This example generates the topic `app/foo/bar/{playerId}`

## Debugging

To debug MQTT calls to see if they work correctly, you can use the following tool

```bash
npm i -g mqtt-client-cli; # only need to install once

mqtt-client-cli ws://localhost:8883;
# example subscription
sub node/block/#
```