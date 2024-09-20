# Midnight funnel

Paima can observe [Midnight] contract states.

[Midnight]: https://docs.midnight.network/learn/introduction/what-is-midnight/

## Configuration

Public devnet example:
```yaml
MidnightDevnet:
  type: midnight
  networkId: 1
  indexer: https://indexer.devnet.midnight.network/api/v1/graphql
  # indexerWS: wss://indexer.devnet.midnight.network/api/v1/graphql/ws
  confirmationDepth: 2
```

[Standalone network] example:
```yaml
MidnightLocal:
  type: midnight
  networkId: 0
  indexer: http://localhost:32807/api/v1/graphql
  # indexerWS: ws://localhost:32807/api/v1/graphql/ws
  confirmationDepth: 0
```

- `indexer` should be the full URL to the [indexer GraphQL] endpoint.
- `indexerWs` can be used to manually override the [indexer WebSocket] URL if the default is insufficient.
- `networkId` must match the network ID encoded into proofs on the chain associated with the indexer.
  - `0` for a standalone test node.
  - `1` for the public devnet.
- `confirmationDepth` controls how many Midnight blocks behind the tip will be processed.
  - Setting this to 0 will increase latency because the funnel will always have to wait for the newest Midnight block even if its timestamp would be higher than that of the main block being processed.

[standalone network]: https://docs.midnight.network/develop/tutorial/creating/local-testing#run-the-dapp-in-standalone-mode
[indexer GraphQL]: https://docs.midnight.network/develop/reference/midnight-api/pubsub-indexer/#queries
[indexer WebSocket]: https://docs.midnight.network/develop/reference/midnight-api/pubsub-indexer/#subscriptions

## Primitives

* [Contract state](../10-primitive-catalogue/40-midnight/10-contract-state.md)
