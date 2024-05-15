# Dynamic ERC721

This primitive allows registering new erc721 extensions in runtime, triggered by
a generic smart contract event.

## Configuration

```yaml
# extensions.yaml
extensions:
  - name: "Dynamic erc721"
    type: "dynamic-primitive"
    startBlockHeight: 100 
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    scheduledPrefix: "derc721"
    burnScheduledPrefix: "bderc721"
    eventSignature: "CustomEvent(address)"
    abiPath: "./CustomEventEmitter.json"
    targetType: "erc721"
    fields:
      contractAddress: address
```

### Meaning

- `contractAdress` is the address of the smart contract that will emit the event that will trigger the erc721 primitive creation.
- `scheduledPrefix` and `burnScheduledPrefix` are the prefixes used for the
resulting erc721 events. This primitive won't emit events by itself. See [the
erc721 section for details](ERC721#meaning).
- `abiPath`, specifying a path to a .json file describing the compiled contract
&ndash; the only field required in this file is the `abi` field in the top-level
object;
- `eventSignature`, specifying the signature of the event consisting only of the event name followed by parameter types (without names) in order, enclosed in parentheses and separated by commas.
- `fields.contractAddress` should have the name of the field in the emitted event.

The example configuration assumes that the event has the following signature:

```solidity
event CustomEvent(address indexed address);
```

The `contractAddress` fields needs to be changed to the name of the field in the
event otherwise.

## Performance implications

Normally the funnels fetch all of the configured primitives concurrently in a
range of blocks configured by either the `funnelBlockGroupSize` or
`presyncStepSize` variables. But a dynamic primitive can change the set of
extensions to fetch in the range, so if there are dynamic primitives configured,
the funnels will instead *first*  request all of the events for these, update
the set of extensions, and afterwards request the data for the resulting set
concurrently. This implies a small reduction of concurrency for the funnels.