# Environment Configuration Variables

The following is a list of possible environment variables that can be configured for your project. These variables are read in the ENV class, located in `@paima/utils/config.js`. Please refer to that file for more information on default values.

## Funnel Configuration

These these variables are used if you only need to synchronize a single network for your application. If you need to synchronize multiple networks, learn more about funnel configuration [here](../100-state-machine/300-react-to-events/3-funnel-types/200-configuration.md)

### Required variables

- Chain variables:
  - `CHAIN_URI`: The URI of the chain.
  - `CHAIN_EXPLORER_URI`: The URI of the chain explorer.
  - `CHAIN_ID`: The ID of the chain.
  - `CHAIN_NAME`: The name of the chain.
- Chain currency variables:
  - `CHAIN_CURRENCY_NAME`: The name of the chain currency.
  - `CHAIN_CURRENCY_SYMBOL`: The symbol of the chain currency.
  - `CHAIN_CURRENCY_DECIMALS`: The number of decimals for the chain currency.
- `CONTRACT_ADDRESS`: The address of your Paima L2 contract.
- `START_BLOCKHEIGHT`: The block height at which the syncing process starts. This is usually the block height at which the contract was deployed.
- `BLOCK_TIME`: The number of seconds it takes for new blocks to be created on the chain you deployed your L2 contract on.

#### Optional variables

- [Primitive Catalogue](../100-state-machine/300-react-to-events/10-primitive-catalogue/1-introduction.md):
  - `DEFAULT_PRESYNC_STEP_SIZE`: number of blocks to process in each step during initial presync phase. If not provided, a value of 1000 is used. Generally no need to change this value.
  - `CDE_CONFIG_PATH`: allows you to specify a custom location for your `extensions.$NETWORK.yml` that is used to initialize primitive catalogue entries
- Cardano extensions
  - `CARP_URL`: The URL of a Carp instance, required when using Cardano primitives.
  - `CARDANO_NETWORK`: One of `preview`, `preprod`, `mainnet`. It needs to match the network indexed by the Carp instance.
  - `DEFAULT_FUNNEL_GROUP_SIZE`: The number of blocks queried in one funnel sync step. If not set, a value of 100 is used. Generally no need to change this value.

## Others

### Required variables

- Database connection variables (self explanatory):
  - `DB_USER`
  - `DB_PW`
  - `DB_NAME`
  - `DB_HOST`
  - `DB_PORT`
- `BACKEND_URI`: The URL of where your game node server will be deployed. This is used by the Middleware to interact with your game node.
- `WEBSERVER_PORT`: The port to use for running your game node server.

### Optional Variables

This section includes optional environment variables that have sensible default values if not explicitly set.

- `BATCHER_URI`: The URL of the deployed batcher, if used.
- `DEFAULT_FEE`: The blockchain fee to be set in transactions created by the Middleware.
- `ENABLE_DRY_RUN`: Adds a `GET /dry_run` endpoint for input testing. Use it to post game inputs to validate them without modifying the game state.
- `NETWORK`: Used across modules to determine which .env file to read (`.env.$NETWORK`). Must be set separately if needed.
- `FORCE_INVALID_PAIMA_DB_TABLE_DELETION`: Instead of failing during DB initialization, it deletes invalid tables and recreates them (without the previous content). If turned off, resync from scratch is needed after a major `@paima/sdk` update that affects internal tables.
- `STORE_HISTORICAL_GAME_INPUTS`: If enabled, one of the internal tables stores all of the posted game inputs. Note that the table is currently accessible only through a direct DB connection.
- `POLLING_RATE`: The frequency at which to check for new block data. If not filled in, a value of `BLOCK_TIME - 0.1` is used.
- `STOP_BLOCKHEIGHT`: The block at which the funnel stops syncing. This can be useful during development or tests.
- `SERVER_ONLY_MODE`: Set this to run the game node without syncing new blocks.

- Security variables:
  - `CONCISE_GAME_NAME`: This value will be prefixed to each concise command sent and should be a unique string for each game. E.g., "TDWOTJ" for Tower Defense: Wrath of the Jungle. This prevents replay attacks between different games. This is a mandatory requirement for Gaming Accounts Automatic Signing.

- `GAME_NODE_VERSION`: defined statically in `@paima/sdk`. Check used to ensure your game node is running with a compatible version of paima-engine. After a major upgrade and necessary adjustments, you should adjust the version on your side.

## Customization

You can extend the ENV class in your game to add your own game variables. Here's an example snippet:

```javascript
export class GameENV extends ENV {
  static get LONG_CONFIG(): string {
    return process.env.LONG_CONFIG || "default";
  }
}
```

## Example config file

```shell
## CHAIN DATA
# Example: "https://rpc-devnet-cardano-evm.c1.milkomeda.com"
CHAIN_URI=""
# Example: "https://explorer-devnet-cardano-evm.c1.milkomeda.com"
CHAIN_EXPLORER_URI=""
# Example: "Milkomeda C1 Testnet"
CHAIN_NAME=""
# Example: "200101"
CHAIN_ID=""
# Note: The shorthand currency name/symbol shown in the user's wallet
# Example: "mtADA"
CHAIN_CURRENCY_SYMBOL=""
# Note: The number of decimals of the native/gas asset of the chain
# Example: "18"
CHAIN_CURRENCY_DECIMALS=""
# Note: This is in seconds as a float
# Example: "2.0"
BLOCK_TIME=""

## SECURITY
# Unique Game Security Prefix
# Example: "MyGame"
CONCISE_GAME_NAME=""

## CONTRACT DEPLOYMENT
# Example: "0xA02F7744868945A346Ee6994068F54D039683445"
CONTRACT_ADDRESS=""
# Note: This is the block height to start syncing from; usually the contract deployment block height
# Example: "9000000"
START_BLOCKHEIGHT=""

## Middleware
# Note: This is the URL which your middleware will use to interact with your game node webserver
# Example: "http://localhost:3333"
BACKEND_URI=""

## MISC
# Note: This is the port your game node webserver will use
# Example: "3333"
WEBSERVER_PORT=""
# Note: This enables running your game node with just the webserver running, meaning no new blocks will be synced.
# This is primarily useful for development, devops, or testing other edge cases where you want to interact with
# the game node but not have the game state progress forward.
SERVER_ONLY_MODE="false"

## DATABASE
DB_NAME="postgres"
DB_USER="postgres"
DB_PW="postgres"
DB_HOST="localhost"
DB_PORT="5432"

# NFT
# Note: This is the address of the native nft sale proxy contract
# Example: "0xbD9e6bA880d6302A0B93456308a5A998Ffd8eb5E"
NATIVE_NFT_SALE_PROXY=""
```

### Cardano

```bash
BATCHER_CARDANO_ENABLED_POOLS="095dd39da2d8534f9ddb93759a1931288e5dd79ae04fa5914e157bd6,093de39da2d8534f9ddb93759a1931288e5dd79a404fa5914e157b99"
BATCHER_CARP_URL=http://127.0.0.1:3000

CARP_URL=http://127.0.0.1:3000
CARDANO_NETWORK=preview
CARDANO_CONFIRMATION_DEPTH=10
```
