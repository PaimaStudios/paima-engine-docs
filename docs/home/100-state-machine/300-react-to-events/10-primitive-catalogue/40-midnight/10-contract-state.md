# Contract state

Midnight contracts have a publically-visible [ledger state](https://docs.midnight.network/develop/reference/compact/lang-ref#ledger-state-types).
Once a [Midnight funnel](../../3-funnel-types/900-midnight-funnel.md) is configured,
the `midnight-contract-state` primitive can be used to observe updates to this state.

### Example configuration

```yaml
extensions:
  - name: "my midnight extension"
    type: midnight-contract-state
    network: MidnightLocal
    contractAddress: 010000c39bbf7ba21aa4c953e08412a8ff7ab1fab4a7cc11a00ad20eeb8050965ee838
    startBlockHeight: 0
    scheduledPrefix: myaction
```

## Concise format

```
midnightContractState = myaction|data
```

```ts
const midnightContractState: ParserRecord<MidnightContractStateEvent> = {
  data: PaimaParser.Json(),
};
```

## JSON format

The JSON blob within the concise payload conforms to the [EncodedStateValue](https://docs.midnight.network/develop/reference/midnight-api/onchain-runtime/type-aliases/EncodedStateValue) type.
