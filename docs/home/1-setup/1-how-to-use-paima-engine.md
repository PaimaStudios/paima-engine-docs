---
sidebar_position: 1
---

# How To Use Paima Engine

Paima Engine is as an all-in-one batteries-included executable which provides you with everything you need to get started writing your own trustless Web3 game.

## Accessing Documentation

Paima Engine docs are available from two sources:
1. Embedded inside Paima Engine itself (`./paima-engine docs`)
2. Hosted on [docs.paimastudios.com](https://docs.paimastudios.com)

## Accessing Paima Engine

Paima Engine binaries can be found on Github in the [release page](https://github.com/PaimaStudios/paima-engine/releases) of the project.

If you need any support beyond the core engine, you can reach us through our [contacting us](https://paimastudios.com/contact/) page.

If you do not have Paima Engine yet, but want to follow along, you can find public templates using Paima [here](https://github.com/PaimaStudios/paima-game-templates)

## tl;dr

If you're running a template and just want to know which commands to run without having to know what they do, simply run the following

```bash
npm run initialize # setup the env vars and install dependencies
npm run pack # build your state machine
npm run pack:middleware # create middleware to connect your state machine to your UI
npm run chain:start # separate terminal - creates a local L1 chain for your app
npm run chain:deploy # deploys contracts to your local chain
npm run database:up # separate terminal - starts the DB to cache the onchain data to speed up queries
./paima-engine run # separate terminal - runs your game L2 node
# see `frontend` folder in your project for launching the UI for your game
```

Next, (if running on a local chain), set hardhat and your browser wallet to use the same private key (see more info [here](#metamask)).

## Initializing Your Project

When starting a new project with Paima Engine, you can choose to either go completely barebones, or use an included template to bootstrap with all of the essentials

*Option A*: To initialize a game using a basic game template, either clone git repo [here](https://github.com/PaimaStudios/paima-game-templates) or use the following command and select the `rock-paper-scissors` template:

```bash
./paima-engine init template
```

*Option B*: Create everything from scratch. Although you can find all the Paima Engine packages to do this (ex: [@paima/sdk](https://www.npmjs.com/package/@paima/sdk)), we strongly recommend starting from a template.

Once the command has finished, you will notice a new folder have been created called `rock-paper-scissors` (name varies based on template selected). The SDK is directly used by the game template, and so all code you write will be in the `rock-paper-scissors` folder.

Lastly to finish the initialization process off, simply go into the `rock-paper-scissors` folder and run `npm run initialize`. This will install all of the packages and set the project up to be ready for you to start coding.

Of note, feel free to rename the `rock-paper-scissors` folder to the name of your game (or whatever you prefer)

## Packing Your Game Code

The specifics of writing your game code is outside of the scope of this current getting started guide, thus we will move on to packing your game code to be run with Paima Engine.

As the `rock-paper-scissors` folder has already been initialized in the previous section, we can move forward with packing the game code (you can pack the rock-paper-scissors game template without writing any new code initially to test). Simply use the following command in the folder:

```bash
npm run pack
```

This will generate two files (`gameCode.cjs` and `endpoints.cjs`) which will be placed in a `packaged` folder (located next to the executable). The former file holds the vast majority of the "game" (all of your code related to your game logic and state transitions) and the latter holds code related to setting up the webserver endpoints of your game node.

Both of these files need to remain in the `packaged` folder (which is required to be in the same root folder as the Paima Engine executable itself).

## Setting Up Your Game Node Config

You may have noticed that during the initialization process a `.env.localhost` file was created in the root folder. The Paima Engine executable will read this file (or specifically `.env.${process.env.NETWORK || localhost})`) when attempting to start running your game node.

Thus you must fill out this env file with all of the pre-requisites to proceed forward (see how [here](./4-environment-config-values.md)).

## Building your Middleware

The Paima middleware provides a framework-independent way of writing code for the frontend to consume. This is useful to:
1. Provide a minimal interface for frontends that cannot natively run Javascript (and therefore cannot use anything in `@paima/sdk` directly) like Unity
2. Provide a framework-independent way of performing calculations whose result need to be available at compile time from your frontend (using [esbuild](https://github.com/esbuild/community-plugins)) like reading node configuration files.
3. Allow sharing parts of your node code to your frontend (or other systems)

If you need this for the template you are building, run
```bash
npm run pack:middleware
```

## Deploying Your Game's Contracts

Each game built with Paima Engine is its very own Layer 2. This means that you will need to deploy the Paima L2 Smart Contract for your game, to whichever chain you wish to launch on on top of any other contract necessary for your app.

For templates, this usually involves simply running:
1. `npm run chain:start` to start a chain on the local network
2. `npm run chain:deploy` to deploy contracts to the local network (see `hardhat.config.ts` for network names)

If you are running the local network, you should see an output that starts like this

```
WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

Keep `Private Key` in mind here, because you will need to include this in MetaMask (or your browser extension of choice) later for interacting with your local game node.

Reference the [Deploying L2 Smart Contract](../50-smart-contracts/200-evm/100-introduction.md) documentation to learn more.

## Running Your Frontend

Depending on which template you are using, there may be a `frontend` folder. Run the framework-specific steps in that folder to start your game's frontend

### Connecting Metamask to Your Frontend {#metamask}

Key points to keep in mind:
1. These steps are **only required if running on a localhost network** (not required on mainnet / testnet)
2. You will need to reset your nonce often for this by going to `Settings > Advanced > Clear activity and nonce data`

There are two ways to connect MetaMask to your local network

#### Option 1:`Hardhat Private Key → MetaMask`
If you're using [MetaMask](https://metamask.io/), you can interact with your contract from your frontend with these steps:
1. Open the MetaMask extension
2. Click on the account selector at the top of the screen
3. Click "add account"
4. Select "import account"
5. Paste in the private key seen when running `npm run chain:deploy`

#### Option 2: `MetaMask mnemonic → Hardhat`

See the Metamask guide for this [here](https://docs.metamask.io/wallet/how-to/get-started-building/run-devnet/)

## Setting Up Your Game Node DB

If you're using a template, all you need to do is:
1. Have [Docker](https://docs.docker.com/compose/install/) installed on your machine
2. Run (in a separate terminal instance) `npm run database:up`
3. Use `ctrl + c` to close the database at any time

To learn how to edit your app's database, read more about database management [here](../500-database-management/200-setup.md).

## Running Your Game Node

Now that your game code is packed, contract and DB deployed, and your config is ready, we can now start your game node via the Paima Engine executable.

Simply go into the root folder and run the following command:

```bash
./paima-engine run
```

If you forgot to pack your code, your config is not properly setup, or anything else as such, you will get an error.

Otherwise if everything was setup correctly then you will have officially started your game node for the very first time! You will see some initial boot logs, and after a few seconds see the progress of your game node syncing from the blockchain.

These logs denote the block height numbers that the game node is syncing from the deployed L2 smart contract on the blockchain. Other logs will also pop up, such as when game inputs are read from the contract. Of note, logs are also saved in the `logs.log` file for easy access.

## Testing Out Your Game Node

Now that your game node is syncing, we recommend testing to ensure that both the contract you deployed and the node itself are all in working order/configured properly.

Simply follow the [posting test game inputs to L2 contract tutorial](../200-read-write-L2-state/20-write-data.md#writing-data-from-an-external-source) and within a couple minutes you'll have experienced the end-to-end loop of using Paima Engine!

Of note, the above tutorial teaches you an easy way to manually submit custom-crafted game inputs, which is also useful when implementing new features as you develop your games/apps.

## Releasing your game

You can learn more about the steps to releasing your game publicly [here](../600-releasing-a-game/1-generate-build.md).

## Debugging 

### Paima Engine Dry Running

For context, [Paima Batcher](./5-paima-bacher.md) allows end users to sign game inputs without manually posting transactions themselves. It enables the cross-chain Paima Whirlpool functionality to be possible in Paima Engine.

For Paima Batcher to work well in production, game inputs can be validated before posting on-chain to save on transaction fees & increase throughput. To support this validation Paima Engine ships with a "dry run" endpoint which allows directly submitting a game input via HTTP, and having it processed by the STF (returning success or fail) without saving any of the resulting SQL queries. As such this allows the batcher (or any external tooling) to check that a game input validates before posting it on-chain.

This functionality is disabled by default to ensure that in production any game nodes which are user-facing have dry running disabled (as this is a DoS vector). 

* You can enable dry running by setting the environment variable in your .env file: `ENABLE_DRY_RUN=true`.
* Once enabled, your game node will now have a `/dry_run` endpoint which takes params of: `{gameInput: string, userAddress: string}`.
* It is possible to detect dry run game inputs in your game logic (if you want to do advanced testing using dry running) by reading the `dry_run` field in the game input you receive in your STF
