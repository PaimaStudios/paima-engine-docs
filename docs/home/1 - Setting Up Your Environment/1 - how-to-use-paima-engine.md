---
sidebar_position: 1
---

# How To Use Paima Engine

Paima Engine is as an all-in-one batteries-included executable which provides you with everything you need to get started writing your own trustless Web3 game.

## Accessing Documentation

Paima Engine docs are available from two sources:
1. Embedded inside Paima Engine itself (`./paima-engine docs`)
2. Hosted on [docs.paimastudios.com](https://docs.paimastudios.com)

# Accessing Paima Engine

Paima Engine is under developer preview at the moment. Notably, anybody can access it by [contacting us](https://paimastudios.com/contact/).

If you do not have Paima Engine yet, but want to follow along, you can find public templates using Paima [here](https://github.com/PaimaStudios/paima-game-templates)

## Initializing Your Project

When starting a new project with Paima Engine, the developer can choose to either go completely barebones (by only initializing `paima-sdk`) or use an included template to bootstrap with all of the essentials. Initializing the SDK by itself may also be useful in cases where the developer is upgrading their project to use a new version of Paima Engine which has introduced new incompatibilities in the SDK.

You can see the available options by using:

```
./paima-engine init
```

Option A: To initialize a game using a basic game template use the following command and select the `generic` template:

```
./paima-engine init template
```

Option B: To initialize a game using the `paima-sdk`:
```
./paima-engine init sdk
cd paima-sdk
npm ci
```

Once the command has finished, you will notice two new folders have been created, `paima-sdk` and `generic-game-template` (name varies based on template selected). The SDK is directly used by the game template, and so all code you write will be in the `generic-game-template` folder.

Lastly to finish the initialization process off, simply go into the `generic-game-template` folder and run `npm run initialize`. This will install all of the packages and set the project up to be ready for you to start coding.

Of note, feel free to rename the `generic-game-template` folder to the name of your game (or whatever you prefer), but make sure to not change the folder name of `paima-sdk`.

## Packing Your Game Code

The specifics of writing your game code is outside of the scope of this current getting started guide, thus we will move on to packing your game code to be run with Paima Engine.

As the `generic-game-template` folder has already been initialized in the previous section, we can move forward with packing the game code (you can pack the generic game template without writing any new code initially to test). Simply use the following command in the folder:

```
npm run pack
```

This will generate two files (`gameCode.cjs` and `endpoints.cjs`) which will be placed in a `packaged` folder (located next to the executable). The former file holds the vast majority of the "game" (all of your code related to your game logic and state transitions) and the latter holds code related to setting up the webserver endpoints of your game node.

Both of these files need to remain in the `packaged` folder (which is required to be in the same root folder as the Paima Engine executable itself).

## Setting Up Your Game Node DB

Paima Engine requires you to deploy a Postgres database which will be used to store all state of your game node.

For those already experienced with setting up a Postgres DB, feel free to skip over the majority of this section. One important note however is that each game template also includes a `init.sql` file in the `/db/migrations/init` folder which you should use to initialize the database.

### Using Docker To Setup A Postgres DB

For those who prefer an automated solution, simply proceed with the following steps to have a local Postgres database ready-to-use with your game node:

1. Install docker/docker compose on your computer (https://docs.docker.com/compose/install/)
2. Go into the root folder of your game code (ie. `generic-game-template`) in your terminal.
3. Run `npm run database:up`
4. Docker compose will automatically download and setup Postgres for you, while also using the `init.sql` from your game code to initialize the DB.
5. Your DB will be up and running, and can be closed via `Ctrl + c` like any CLI application.
6. Any time you want to bring the DB back online, simply re-run `npm run database:up`.

### Updating Your init.sql

One side note, as you begin writing your game logic (or when building a template) you likely will end up changing the DB schema from the base template you started off with. When you do this, make sure to update the `init.sql` file to properly initialize your DB schema so that future game nodes either you or others deploy for your game will be able to properly work with your game logic.

### Updating Your DB Queries

When you update your DB schema or you want to add or edit some of the queries in the `db/` directory of your game, you will want to use the `pgtyped` tool to process the `.sql` code to generate `.ts` code for the queries to be used by your game and the engine. To do this, simply navigate to the `db/` directory and execute `npm run compile`. Note that you will need to provide the credentials of a running Postgres DB initialized with your schema in the `db/pgtypedconfig.json` file.

Furthermore, note that the version of `@pgtyped/query` in `db/package.json` is set to a specific value, which should be the same as the version specified in `paima-sdk/paima-db/package.json`. These versions need to stay the same to avoid compatibility issues.

## Deploying Your Game's L2 Smart Contract

Each game built with Paima Engine is its very own Layer 2. This means that you will need to deploy the Paima L2 Smart Contract for your game, to whichever chain you wish to launch on.

Reference the [Deploying L2 Smart Contract](./2%20-%20deploying-l2-smart-contract.md) documentation to easily deploy the contract.

## Setting Up Your Game Node Config

You may have noticed that during the initialization process a `.env.development` file was created in the root folder. The Paima Engine executable will read this file (or specifically `.env.${process.env.NODE_ENV || development})` when attempting to start running your game node.

Thus you must fill out this env file with all of the pre-requisites to proceed forward.

Specifically with the included barebones config, you must specify:

- `CHAIN_URI` (A URL to the RPC of an EVM chain node of the network you are targeting)
- `CONTRACT_ADDRESS` (The contract address of your deployed Paima L2 Smart Contract for your game)
- `START_BLOCKHEIGHT` (The block height that your smart contact was deployed on, so Paima Engine knows from what block height to start syncing)
- Postgres DB Credentials

## Running Your Game Node

Now that your game code is packed, contract and DB deployed, and your config is ready, we can now start your game node via the Paima Engine executable.

Simply go into the root folder and run the following command:

```
./paima-engine run
```

If you forgot to pack your code, your config is not properly setup, or anything else as such, you will get an error.

Otherwise if everything was setup correctly then you will have officially started your game node for the very first time! You will see some initial boot logs, and after a few seconds see the progress of your game node syncing from the blockchain as such:

```bash
q125-q225
q225-q325
q325-q425
...
```

These logs denote the block height numbers that the game node is syncing from the deployed L2 smart contract on the blockchain. Other logs will also pop up, such as when game inputs are read from the contract. Of note, logs are also saved in the `logs.log` file for easy access.

## Testing Out Your Game Node

Now that your game node is syncing, we recommend testing to ensure that both the contract you deployed and the node itself are all in working order/configured properly.

Simply follow the [posting test game inputs to L2 contract tutorial](../2%20-%20Read%20&%20Write%20L2%20State/4%20-%20posting-test-game-inputs.md) and within a couple minutes you'll have experienced the end-to-end loop of using Paima Engine!

Of note, the above tutorial teaches you an easy way to manually submit custom-crafted game inputs, which is also useful when implementing new features as you develop your games/apps.

## Deploying Your Game Node

If you wish to deploy your game on a server/move into a production environment, the following files are all that is needed for Paima Engine to run your game node:

- `packaged/gameCode.cjs` (packed game code)
- `packaged/endpoints.cjs` (packed webserver code)
- `.env.*` (Your game node config)
- `paima-engine` (The Paima Engine executable)

In other words, you do not require your unpacked game code or `paima-sdk`, allowing you to easily run your game node wherever you deem best (without even needing node installed or any external dependencies).

## Snapshots

If you have `pg_dump` installed on the machine running your game node (typically included in the postgres package of your OS), then Paima Engine will automatically take snapshots every day of your game node DB and store them in a `snapshots` folder. The last 3 days of snapshots are maintained, and everything older is automatically deleted.

If `pg_dump` is not available, then when you start your game node an error will be printed in the terminal denoting of such, however the game node will still function perfectly fine nonetheless (and will simply skip taking snapshots).

Of note, unlike in the Web2/2.5 world, these snapshots are _not vital_. You are building a trustless Web3 game using Paima Engine, which means that even if your entire DB gets corrupted or deleted, a brand new game node can be synced from scratch by just reading from the blockchain. These snapshots are simply a quality-of-life enhancement, as they allow you to deploy new game nodes much faster without having to resync from scratch.


## Debugging 

Paima-Engine includes 4 binaries:

* Linux production `paima-engine-linux`
* Linux development `dev-paima-engine-linux`
* Macos x64 production `paima-engine-macos`
* Macos x64 development `dev-paima-engine-macos`

The binaries named `dev-*` run a node.js inspector and should only be used for development and not for production environments.

### How to debug

1. Launching your game with the `./dev-paima-engine-linux run` or `./dev-paima-engine-macos run` you will see a message similar to:  

```
Debugger listening on ws://127.0.0.1:9229/e6e784f8-bcd8-4ace-8b17-9b515ae45f7d
For help, see: https://nodejs.org/en/docs/inspector
```

2. Open in a Google Chrome browser: `chrome://inspect`  
You should see a `Remote Target` entry with the name `PKG_DUMMY_ENTRYPOINT file:///` click on `inspect`.  
NOTE: If you do not see the entry: in `Configure...` add `localhost:9229` where the actual port is the one informed in the message in step 1.  
A new debug "DevTools" window will pop up. 

3. In the new DevTools, go to the `Sources` tab and click on `+ Add folder to workspace` select the folder `packaged` where your compiled game is located you should see `endpoints.cjs` and `gameCode.cjs` select this folder.  
The first time DevTools might request permission to access your hard drive: allow access.

4. Now you are ready to DEBUG.
In the `sources` tab you can place breakpoints in endpoint.cjs and gameCode.cjs by clicking on line-number on the left side of the line. 


## Data Migrations

Data Migrations allow game developers to add data to the database e.g., World Setup, NPC, Items, and other system tables.  

IMPORTANT: You should never add data to the database manually. It should be done only through state-transitions and data migrations.

Data Migrations are applied at a specific block-height. The file name indicates the OFFSET from the START_BLOCKHEIGHT (defined in the .env file).

File structure:

```
root_folder
   | --- paima-sdk
   | --- paima-engine-{linux|macos}
   | --- packaged
             | --- endpoints.cjs
             | --- gameCode.cjs
             | --- migrations
                          | --- 1000.sql
                          | --- 5500.sql
``` 

1000.sql will be applied at block-height START_BLOCKHEIGHT + 1000.  
5500.sql will be applied at block-height START_BLOCKHEIGHT + 5500.  
Both will be applied before any other inputs are processed for that block-height.

The *.sql files are PGSQL scripts. We ABSOLUTELY recommend writing your SQL script as a transaction, so if it fails the block-process-loop will stop and the script can be fixed and reapplied.

1000.sql example:
```
BEGIN; 
-- INSERT... ; 
-- UPDATE ...; 
COMMIT;
```
## Paima Engine Dry Running

For context, Paima Batcher allows end users to sign game inputs without manually posting transactions themselves. It enables the cross-chain Paima Whirlpool functionality to be possible in Paima Engine.

For Paima Batcher to work well in production, game inputs can be validated before posting on-chain to save on transaction fees & increase throughput. To support this validation Paima Engine ships with a "dry run" endpoint which allows directly submitting a game input via HTTP, and having it processed by the STF (returning success or fail) without saving any of the resulting SQL queries. As such this allows the batcher (or any external tooling) to check that a game input validates before posting it on-chain.

This functionality is disabled by default to ensure that in production any game nodes which are user-facing have dry running disabled (as this is a DoS vector). 

* You can enable dry running by setting the environment variable in your .env file: `ENABLE_DRY_RUN=true`.
* Once enabled, your game node will now have a `/dry_run` endpoint which takes params of: `{gameInput: string, userAddress: string}`.
* It is possible to detect dry run game inputs in your game logic (if you want to do advanced testing using dry running) by reading the `dry_run` field in the game input you receive in your STF
