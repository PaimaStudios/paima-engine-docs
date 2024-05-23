# Dynamic ERC721

This primitive allows registering new [ERC721](ERC721) extensions in runtime,
triggered by a generic smart contract event. This works by having a smart
contract that has an event that acts as a *trigger* to the engine, and the
engine in response adds a new extension, without needing to change the
configuration file. An use-case for this would be a factory contract, which
takes care of deploying new instances of the contract tracked by the newly
generated primitive, and then emits and event to signal the engine to start
tracking this through an event.

## Configuration

```yaml
# extensions.yaml
extensions:
  - name: "Dynamic erc721"
    type: "dynamic-primitive"
    startBlockHeight: 100 
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    eventSignature: "CustomEvent(address)"
    abiPath: "./CustomEventEmitter.json"
    targetConfig:
      type: "erc721"
      scheduledPrefix: "nft"
      burnScheduledPrefix: "nftburn"
    dynamicFields:
      contractAddress: nftAddress
```

### Meaning

There are two type of fields in this configuration. The top level fields are
used for the extension that have the role of monitoring the network for the
trigger event. These are the following:

- `contractAdress` is the address of the smart contract that will emit the event that will trigger the erc721 primitive creation.
- `abiPath`, specifying a path to a .json file describing the compiled contract
&ndash; the only field required in this file is the `abi` field in the top-level
object;
- `eventSignature`, specifying the signature of the event consisting only of the event name followed by parameter types (without names) in order, enclosed in parentheses and separated by commas.

The nested fields instead are used to construct the configurations for the
dynamically generated extensions. It's divided into a static part, which is in
`targetConfig`. And a dynamic part which is in `dynamicFields`. Dynamic in this
context means that it depends on the data included on the emitted event.

#### Static configuration

- `scheduledPrefix` and `burnScheduledPrefix` are the prefixes used for the
resulting ERC721 events. This primitive won't emit events by itself. See [the
ERC721 section for details](ERC721#meaning).

#### Dynamic configuration

- `contractAddress` has the name of the field in the emitted event that contains
the address of the ERC721.

The example configuration assumes that the event has the following signature:

```solidity
event CustomEvent(address indexed nftAddress);
```

## Utility functions

Generated extensions have a _name_, that is derived from the name of the trigger
extension, and the order of the dynamic primitive. The following function can be
used to generate this name.

```ts
export function generateDynamicPrimitiveName(parentName: string, id: number): string;
```

For example, the first dynamic primitive that gets created will have a name of
`generateDynamicPrimitiveName(parentCdeName, 0)`, and so on. This name can be
then used as an argument to the other utility functions.

There is also a public utility function to get the list of all of the
dynamically generated extensions. In this case the `config` field is formatted
as json. It can be used to extract, the contract address, for example.

```ts
export async function getDynamicExtensions(
  readonlyDBConn: Pool,
  parent: string
): Promise<{ name: string; config: string }[]>;
```

## Performance implications

Normally the funnels fetch all of the configured primitives concurrently in a
range of blocks configured by either the `funnelBlockGroupSize` or
`presyncStepSize` variables. But a dynamic primitive can change the set of
extensions to fetch in the range, so if there are dynamic primitives configured,
the funnels will instead *first*  request all of the events for these, update
the set of extensions, and afterwards request the data for the resulting set
concurrently. This implies a small reduction of concurrency for the funnels.