# Generic Primitives

- [Generic](#generic), allowing you to provide an arbitrary contract ABI and the signature of the event to track, allowing you to collect data even from smart contracts not directly supported by the above types.

## Generic

### Example

```yaml
extensions:
  - name: "My Custom Contract"
    type: "generic"
    contractAddress: "0xDC...BA"
    startBlockHeight: 11223344
    abiPath: "./abis/MyCustomContract.json"
    eventSignature: "MyEvent(address,uint256)"
    scheduledPrefix: "cst"
```

### Meaning

The other primitive types described work great for many common use cases, but we also want to allow game developers to read state from smart contracts and events not supported by these types. For this reason, we provide a generic primitive type, which allows you to specify the ABI of a contract and the signature of an event to track such events emitted from such a contract. In the config file, you will thus need to provide the following two values compared to other primitive types (as seen in the example earlier):

- `abiPath`, specifying a path to a .json file describing the compiled contract &ndash; the only field required in this file is the `abi` field in the top-level object;
- `eventSignature`, specifying the signature of the event consisting only of the event name followed by parameter types (without names) in order, enclosed in parentheses and separated by commas.

Each event tracked by this primitive will then be represented by a single JSON object containing each parameter of the event twice, under two separate keys &ndash; once under the index of the parameter within the event signature (starting from `0`) and once under the parameter's name as specified in the provided ABI file.

When storing the event objects in the database, the block height at which the triggering event occurred is also included.

### Paima Concise format

The scheduled input for each event is of the following form, where `prefix` is the `scheduledPrefix` specified in the Primitive Catalogue config file:

```
prefix|stringifiedJsonObject
```

where:

- `prefix` is the `scheduledPrefix` specified in the config file,
- `stringifiedJsonObject` is the JSON type for the event

For instance, an event with the signature `Transfer(address,address,uint256)` whose parameters are respectively named `from`, `to`, and `value`, could be represented by the following object:

```json
{
    "0":"0x0000000000000000000000000000000000000000",
    "1":"0xFF...00",
    "2":"1000000",
    "from":"0x0000000000000000000000000000000000000000",
    "to":"0xFF...00",
    "value":"1000000"
}
```

Note that because the Paima concise encoding uses the vertical pipe `|` symbol as a divider, the parameters of your event should ideally not contain this symbol, as it would cause issues when processing the generated scheduled input using `paima-concise`. You should nevertheless still be able to withdraw the data of such events from the database with no issues.

### Utility functions

Paima SDK uses the type `GenericCdeDataUnit` shown below to store data about a single event from the tracked smart contract. The exact type of the `payload` field is dependent on the provided contract ABI and corresponds to the JSON object described earlier in this section:

```ts
export interface GenericCdeDataUnit {
    blockHeight: number;
    payload: any;
}
```

- `getGenericDataBlockheight`, to fetch all events that happened at a given block height:

```ts
export async function getGenericDataBlockheight(
  readonlyDBConn: PoolClient,
  cdeName: string,
  blockHeight: number
): Promise<GenericCdeDataUnit[]>;
```

- `getGenericDataBlockheightRange`, to fetch all events that happened within a given block height range:

```ts
export async function getGenericDataBlockheightRange(
  readonlyDBConn: PoolClient,
  cdeName: string,
  fromBlock: number,
  toBlock: number
): Promise<GenericCdeDataUnit[]>;
```
