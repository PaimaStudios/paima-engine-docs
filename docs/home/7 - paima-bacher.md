---
sidebar_position: 8
---

# Paima Batcher

Paima Batcher is the first key component of the Paima Whirlpool infrastructure which enables cross-chain play (via account abstraction layer), automatically paying transaction fees for users, and decreasing overall fees by batching many game inputs together.

For background, Paima Engine-based games rely on user inputs being posted to a Paima L2 Contract, which, by default, requires users to send transactions to the target blockchain. This approach has the disadvantage of limiting input posters to using accounts and funds solely on the target blockchain.

Paima Batcher overcomes this by accepting game inputs signed by various wallets, batches them into a new transaction, and posts them all at once to the deployed Paima L2 Contract. This allows the game inputs to be processed by your game node as if they were posted by the original users directly.

Before submitting the inputs, the batcher always verifies the attached signature to ensure that invalid signatures do not get posted (Paima Funnel inside of the Engine also does this check, but this acts as an extra proactive measure). Additionally, you can configure the batcher to impose limits on how often a given address can submit game inputs in a given timeframe, or even configure the batcher to validate the game inputs themselves and reject any that it finds to be invalid (in order to avoid wasting transaction fees, and prevent "DoS" attacks by bad actors).

Furthermore, batcher support is fully integrated into Paima Engine, including the middleware core in Paima SDK, so there is no need to worry about writing extra code to make your game work with the batcher. It just seamlessly works.

Of note, because Paima Engine games are full fledged Sovereign Rollups, this means we have a built-in mechanism for democratization & decentralization of batching (unlike the majority of rollups today). In other words, anyone can run a batcher for any game built with Paima Engine, opening up opportunities for your community & 3rd party developers to create their own web/mobile game clients, tools, websites, and services that provide players with completely novel gameplay experiences!

## Preparation

To begin using Paima Batcher, first you will need to emit it from the Paima Engine executable. Simply call:

```
./paima-engine batcher
```

This will pop out a `batcher` folder with all of the Paima Batcher code inside for you to build/deploy.

Change into the `batcher` directory and make sure to install all of the dependencies:

```
cd batcher
npm i
```

With that out of the way, we can move forward with deploying the batcher. In summary, you need to:

1. Prepare your root `.env.*` config file to support the batcher,
2. Add your batcher wallet account private key to it,
3. Run the batcher using `npm start`.

First, ensure you have a config file `.env.*` ready in the root directory of your project (where you called `./paima-engine batcher`). Presumably, you already have one there for your game, you just need to add the additional variables required by the batcher. The simplest approach to do this is to append the existing batcher env file into your env file in the directory above:

```
cat .env.devnet >> ../.env.production
```

Of note, one key variable that needs to be set manually to use the batcher is the `BATCHER_PRIVATE_KEY`. This needs to be set as the private key of the wallet intended to be used for creating and posting the batched transactions (note, the wallet needs sufficient funds for posting to the contract). The expected format of the variable is a hex string without the `0x` prefix (ie. exactly what you get from MetaMask under Account details -> Export private key).

## Usage

With all of that said and done, to compile and run the batcher using docker simply run the following in the `batcher` directory:

```
npm start
```

If your env file was set up properly, it will boot the batcher up and have it ready to be used with your game.

Of note, the IP/port (or domain name) that the batcher is running/accessible on will need to be copied and set as the `BATCHER_URI` in your env file. This variable is used by the middleware to allow the game frontend/wallet to seamlessly integrate with the batcher without any extra work on your end.

## Cleanup

At any point after stopping the batcher, you can clean up via the following command:

```
npm stop
```
