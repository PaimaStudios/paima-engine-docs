---
sidebar_position: 2
---

# Primitive Catalogue

Paima, by default, can provide standard transaction types (ex: EVM transactions), but for usability it is useful to refine this raw data type into something more meaningful (ex: know it's an ERC20 transfer). These refinements acts as a sort of primitive that games can easily leverage without having to write the parsing logic themselves, and since these primitives live on the underlying chains they are composable (within that chain)

Paima Engine enables this by automatically doing the heavy work for you via a feature called the _Primitive Catalogue_. Primitives allow you to read data trustlessly from multiple locations such as various L1/L2s. The goal is the Primitive Catalogue is to be the Library of Alexandria of primitives necessary to build onchain games.

<div style={{textAlign: 'center'}}>
![](./primitive-catalogue.png)
</div>

The basic approach is simple: you set up a config file where you specify what contracts you want to collect data from, and Paima Engine automatically projects the emitted event data to your game node. In other words, when you then run your game node, it will automatically acquire the data for you along with a simple-to-use interface in the Paima SDK to allow you to access this data.

Paima Engine currently supports many different kinds of primitives that you can find in this section of the documentation.

## Configuration

To specify which Primitives you are using for your game, you need to provide a configuration file. By default, a file named `extensions.yml` in your root directory (same place as the `.env` file) is expected, but you may adjust this path using the `CDE_CONFIG_PATH` environment variable.

Here is an example `extensions.yml` that you can copy paste into the root folder of your project:

```yaml
extensions:
  - name: "My NFT Contract"
    type: "erc721"
    contractAddress: "0x01...EF"
    startBlockHeight: 7654321
    scheduledPrefix: "newnft"
```

Note that extensions of different types often require slightly different fields &ndash; this will be described in their respective sections. However, here is a quick overview of the purposes of each field in the above config:

- `name`: This field allows you to refer to this particular extension when using the Paima SDK functions for accessing the data it has collected;
- `type`: This specifies which extension you want to use, currently supporting values corresponding to the types of extensions described in later subsections (such as `erc20`)
- `contractAddress`: The address of the contract to read data from;
- `startBlockHeight`: The starting blockheight from which you want the data to be read, zero by default; You should always set this to the block height that the smart contract was deployed on when in production.
- `scheduledPrefix`: For extensions that trigger scheduled inputs (ERC721 and ERC20Deposit) specifies the prefix used with these scheduled inputs;
- `depositAddress`: This field is only used by the ERC20Deposit extension type to specify the target address of transactions you are interested in tracking.
- `network` (see [here](../3-funnel-types/200-configuration.md) to learn about handling primitives for multiple networks)

If you try to run your game node with an invalid or non-existent Primitive Catalogue config file, Paima Engine will report the problem to you and then carry on as if no Primitives were specified.

## Accessing the collected data

Each extension may provide data to your game in one (or both) of the two ways below:

1. By collecting the data and saving it into your game database directly, which you can access using Paima SDK functions described in the corresponding sections;
2. By [scheduling inputs](../1-scheduled-events.md) when certain events happen, which you can then react to in your state transition function.

The data collected and functions used to access it are specific to each type of extension and you can find more information about that in their respective sections. In general, be aware that these functions will read directly from the game state database (which is what the `readonlyDBConn` parameter is for), and you will need to specify the extension name (which is what the `cdeName` parameter in each function is for) which needs to correspond to the name you specified in the configuration file.

Scheduled inputs are triggered by events specific to each extension type, with the circumstances and the format of the scheduled input described in their respective sections. The inputs are always scheduled either for the current blockheight (which enables them to be processed immediately, as scheduled inputs are processed before the state transition function is called), or, if they are triggered before the overall `START_BLOCKHEIGHT` of the game node (specified in the `.env` file), in the so-called _pre-sync_ phase, they are scheduled for `START_BLOCKHEIGHT + 1` (which is the first blockheight for which the state transition function is called). The scheduled inputs will always start with the prefix specified in the config as `scheduledPrefix`.

The [state transition function](../../../read-write-L2-state/read-data#stf-function) call triggered by a scheduled input originating from a Primitive can access the original transaction hash using `inputData.scheduledTxHash`.

To learn by example, please consult the NFT LvlUp game template &ndash; `./paima-engine-linux init template nft-lvlup` to learn more.

## Relation to funnels

Paima [funnels](../3-funnel-types/1-intro.md) are in charge of fetching data from various sources for your game, including data for the Primitive Catalogue which are stored as part of `ChainData`.. Depending on where the data you want to access comes from, you may have to add an extra funnel to your game.
