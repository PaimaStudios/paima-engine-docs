# Generic Primitives

- [Generic](#generic), allowing you to provide an arbitrary contract address to track any [event / action](https://docs.minaprotocol.com/zkapps/o1js/fetch-events-and-actions) it emits, allowing you to collect data even from smart contract standards not directly supported by other primitives.

## Generic

Generic primitives allow getting all of the events or all the actions provided the address of a zkApp.

### Example configuration

```yaml
extensions:
  - name: "mina generic event"
    type: "mina-event-generic"
    address: "B62qoP3xe9zZJmBDacZPL8roBivpVKhAiDNtpAM9RCAW579JnJo1ZL2"
    startBlockHeight: 0
    scheduledPrefix: "mge"
    network: 'Mina'
  - name: "mina generic action"
    type: "mina-action-generic"
    address: "B62qoP3xe9zZJmBDacZPL8roBivpVKhAiDNtpAM9RCAW579JnJo1ZL2"
    startBlockHeight: 0
    scheduledPrefix: "mga"
    network: 'Mina'
```


## Concise format

```
minaGenericEvent = mge|data
minaGenericAction = mga|data
```

```ts
const minaGenericEvent: ParserRecord<MinaGenericEvent> = {
  data: PaimaParser.Json(),
};

const minaGenericAction: ParserRecord<MinaGenericAction> = {
  data: PaimaParser.Json(),
};
```

