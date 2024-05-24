# Dynamic primitives

This primitive allows registering new extensions in runtime, without changing
the configuration files. These are triggered by a generic smart contract event.
A use-case for this would be a factory contract.

Currently the dynamic extensions can be one of:

- [ERC721](ERC721)
- [Generic](Generic)

## Configuration

### ERC721 example

```yaml
# extensions.yaml
extensions:
  - name: "Dynamic erc721"
    type: "dynamic-primitive"
    startBlockHeight: 100 
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    eventSignature: "ERC721Created(address)"
    abiPath: "./FactoryERC721.json"
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

The nested fields instead are used to construct the configuration for the
dynamically generated extensions. It's divided into a static part, which is in
`targetConfig`. And a dynamic part which is in `dynamicFields`. Dynamic in this
context means that it depends on the data included on the emitted event.

#### Static configuration

- `scheduledPrefix` is the prefix used for the events emitted by the dynamic
extensions. This primitive won't emit events by itself. 

- For the [erc721](erc721) case, there is also `burnScheduledPrefix`, for which
the comment above also applies.

- For the [generic](Generic) primitive the `targetConfig` field would look like
this instead:

```yaml
targetConfig:
  type: "generic"
  abiPath: "./abis/MyCustomContract.json"
  eventSignature: "MyEvent(address,uint256)"
  scheduledPrefix: "cst"
```

#### Dynamic configuration

- `contractAddress` has the name of the parameter in the emitted event that
contains the address for the new primitive.

### Factory contracts

Solidity has no standardized way to create a factory contract. Instead, it's up
to you to create your own factory contract whatever way works best, and to emit
events that trigger the dynamic primitive inside it.  The example configuration
assumes that the event (such as in your factory contract) has the following
signature:

```solidity
// note: the name of the argument (nftAddress) has to match the name specified in dynamicFields
event ERC721Created(address indexed nftAddress);
``` 

Which could be part of the following implementation. 


```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CustomERC721 is ERC721 {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}
}

contract FactoryERC721 {
    event ERC721Created(address indexed nftAddress); // emitted when ERC721 token is deployed

    /// @dev deploys an ERC721 token with given parameters
    /// @return address deployed
    function deployERC721(string memory _name, string memory symbol) public returns (address) {
        CustomERC721 t = new CustomERC721(_name, symbol);
        emit ERC721Created(address(t));
        return address(t);
    }
}
```

**NOTE:** Extra parameters in the event will be ignored, and the position does not matter.

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
dynamically generated extensions. The `config` field has a JSON with the
concrete parameters for that particular extension. These are the ones that would
be [in the configuration file](../../funnel-types/configuration#extensions) if
the primitive was not dynamic. The only exception is the `name` field, which is
instead provided as a separated field.

```ts
export async function getDynamicExtensions(
  readonlyDBConn: Pool,
  parent: string
): Promise<{ name: string; config: string }[]>;
```

## Performance implications

During a typical execution, the steps are as follows:
1. Fetch all primitives for a block range concurrently (depending on `funnelBlockGroupSize` or
`presyncStepSize`).
2. Construct the blocks from the fetched data to feed to the state machine.

However, dynamic primitive can change the set of primitives the rollup monitors (and therefore change what has to be fetched for a given block range). Therefore, if there are dynamic primitives configured, funnels will instead

1. Request all of the events for dynamic primitives and update the set of primitives tracked by the rollup
2. Fetch primitives (both the static ones and the new ones after the dynamic primitive update)
3. Send blocks to the state machine as before

This extra step introduces a performance reduction (whose impact depends how long it takes to fetch data from the node your game is connecting to)