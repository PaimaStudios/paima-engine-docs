# Generic Primitives

- [Generic](#generic), allowing you to provide an arbitrary contract ABI and the signature of the event to track, allowing you to collect data even from smart contracts not directly supported by the above types.

## Generic

Generic primitives allow getting all of the events or all the actions provided the address of a zkapp.

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
  data: (keyName: string, input: string) => {
    return JSON.parse(input);
  },
};

const minaGenericAction: ParserRecord<MinaGenericAction> = {
  data: (keyName: string, input: string) => {
    return JSON.parse(input);
  },
};
```

