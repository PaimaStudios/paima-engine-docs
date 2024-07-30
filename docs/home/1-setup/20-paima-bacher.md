# Paima Batcher

Paima Batcher is the first key component of the Paima Whirlpool infrastructure which enables cross-chain play (via account abstraction layer), automatically paying transaction fees for users, and decreasing overall fees by batching many game inputs together.

For background, Paima Engine-based games rely on user inputs being posted to a Paima L2 Contract, which, by default, requires users to send transactions to the target blockchain. This approach has the disadvantage of limiting input posters to using accounts and funds solely on the target blockchain.

Paima Batcher overcomes this by accepting game inputs signed by various wallets, batches them into a new transaction, and posts them all at once to the deployed Paima L2 Contract. This allows the game inputs to be processed by your game node as if they were posted by the original users directly.

Before submitting the inputs, the batcher always verifies the attached signature to ensure that invalid signatures do not get posted (Paima Funnel inside of the Engine also does this check, but this acts as an extra proactive measure). Additionally, you can configure the batcher to impose limits on how often a given address can submit game inputs in a given timeframe, or even configure the batcher to validate the game inputs themselves and reject any that it finds to be invalid (in order to avoid wasting transaction fees, and prevent "DoS" attacks by bad actors).

Furthermore, batcher support is fully integrated into Paima Engine, including the middleware core in Paima SDK, so there is no need to worry about writing extra code to make your game work with the batcher. It just seamlessly works.

Of note, because Paima Engine games are full fledged Sovereign Rollups, this means we have a built-in mechanism for democratization & decentralization of batching (unlike the majority of rollups today). In other words, anyone can run a batcher for any game built with Paima Engine, opening up opportunities for your community & 3rd party developers to create their own web/mobile game clients, tools, websites, and services that provide players with completely novel gameplay experiences!

You can learn more about the architecture of the batcher [here](../100-state-machine/200-direct-write/400-batched-mode.md)

## Benefits

Game input batching provides us with a few major benefits, primarily in the realm of UX:

1. We get some scaling/efficiency benefits in regards to on-chain processing.
2. We can allow users on mobile to merely generate a new keypair without owning any crypto, pay the batcher via in-app purchases, and play the games.
3. We can build "bridges" on any L1 blockchain (ex. Ethereum, Cardano, Algorand, Solana, ...) where users pay the bridge (on-chain) to have the ability to use the batcher (off-chain) to submit their game input for them.
4. We can subsidize users who meet certain requirements to play for free (ex. they own a Paima NFT)

## Preparation

To begin using Paima Batcher, first you will need to emit it from the Paima Engine executable. Simply call:

```bash
./paima-engine batcher
```

This will pop out a `batcher` folder with all of the Paima Batcher code inside for you to build/deploy, and you can then change into the `batcher` directory using

```bash
cd batcher
```

With that out of the way, we can move forward with deploying the batcher. In summary, you need to:

1. Prepare your root `.env.*` config file to support the batcher,
2. Add your batcher wallet account private key to it,
3. Run the batcher using `./start.sh`.

First, ensure you have a config file `.env.*` ready in the root directory of your project (where you called `./paima-engine batcher`). Presumably, you already have one there for your game, you just need to add the additional variables required by the batcher. The simplest approach to do this is to append the existing batcher env file into your env file in the directory above:

```bash
cat .env.mainnet >> ../.env.mainnet
```

## Configuration

Many of the environment variables used by the batcher are shared with the
engine, and these are already documented [here](4-environment-config-values.md).

### Common settings

The batcher supports submitting transactions to more than one network.  This
section talks about settings that apply in both cases, and then follow the
specific ones.

#### Required settings

Of note, one key variable that needs to be set manually to use the batcher is
the `BATCHER_PRIVATE_KEY`.

For evm based chains this needs to be set as the
private key of the wallet intended to be used for creating and posting the
batched transactions (note, the wallet needs sufficient funds for posting to the
contract). The expected format of the variable is a hex string without the `0x`
prefix (ie. exactly what you get from MetaMask under Account details -> Export
private key).

For Avail the format is that of a [Substrate
uri](https://polkadot.js.org/docs/keyring/start/suri/).  Note this is only used
for self signed inputs, otherwise it's handled by the light client.

- `CHAIN_URI`: The URI of the chain (rpc endpoint).
- `BATCHER_PORT`: The port to listen for submissions from the frontend.
- `BATCHER_DB_HOST`: Host of the batcher's database.
- `BATCHER_DB_USER`: User for the batcher's database.
- `BATCHER_DB_PW`: Password for the batcher's database.
- `BATCHER_DB_NAME`: Name of the database.
- `ENABLE_RECAPTCHA_V3`: See [this section](#batcher-security-recaptcha).
- `RECAPTCHA_V3_BACKEND`: See [this section](#batcher-security-recaptcha)
- `BATCHED_MESSAGE_SIZE_LIMIT`: Max size limit (in characters) for batched
transactions in a single round.
- `MAX_USER_INPUTS_PER_MINUTE`: Per user input submission limit.
- `MAX_USER_INPUTS_PER_DAY`: Per user input submission limit.
- `SECURITY_NAMESPACE`: [See this section for details](../100-state-machine/200-direct-write/600-autosign.md#defining-your-namespace).

#### Optional settings

- `BATCHED_TRANSACTION_POSTER_PERIOD`: Delay for the transaction poster loop
when there are no inputs in the queue.
- `GAME_NODE_URI`: Used for input validation.
- `DEFAULT_VALIDATION_ACTIVE`: Whether input validation is active or not. This
requires `GAME_NODE_URI` to also be set.
- `GAME_INPUT_VALIDATOR_PERIOD`: Throttle for the input validator.

If you plan to use the batcher in web 2.5 environment, you also need to turn on the self signing feature by setting `SELF_SIGNING_ENABLED="true"` and filling in `API_KEY` value of your choice in `SELF_SIGNING_API_KEY` variable. You'll use this key afterwards on the server communicating with the batcher.

- `BATCHER_CARDANO_ENABLED_POOLS`: A comma separated list of pool credentials,
only users delegating to one of these pools will be able to post to the batcher.
The expected format is the public key hash (28 bytes) as a hexadecimal string
(56 characters).
- `CARP_URL`: The URL of a Carp instance. This is required if
`BATCHER_CARDANO_ENABLED_POOLS` is used.

### Network dependent settings

- `BATCHER_NETWORK` can be used to choose the type of network the batcher submits
to. Possible values are: `evm` and `avail`. If not set it will default to `evm`.

#### Evm

##### Required settings

- `CONTRACT_ADDRESS`: The address of your Paima L2 contract.
- `DEFAULT_FEE`: The fee for the contract call.

##### Optional settings

- `MAX_BASE_GAS`: For gas estimation. Defaults to 50000.
- `MAX_GAS_PER_BYTE`: For gas estimation: Defaults to 32.

#### Avail

##### Required

- `BATCHER_AVAIL_LIGHT_CLIENT`: for the Avail's light client rest api. This is
used for the transaction poster. [Reference](https://docs.availproject.org/docs/operate-a-node/run-a-light-client/light-client-api-reference#v2submit).
- `SECURITY_NAMESPACE`: There is no contract address in this case, so this is
required in this case. [See this section for
details](../100-state-machine/200-direct-write/600-autosign.md#defining-your-namespace).


## Usage

With all of that said and done, to compile and run the batcher using docker simply run the following in the `batcher` directory:

```bash
sh ./start.sh
```

If your env file was set up properly, it will boot the batcher up and have it ready to be used with your game.

Of note, the IP/port (or domain name) that the batcher is running/accessible on will need to be copied and set as the `BATCHER_URI` in your env file. This variable is used by the middleware to allow the game frontend/wallet to seamlessly integrate with the batcher without any extra work on your end.

## Cleanup

At any point after stopping the batcher, you can clean up via the following command:

```bash
sh ./shutdown.sh
```

## Batcher Security (reCAPTCHA)

As the Paima Batcher posts user submissions, you might want only to allow human users to submit data and avoid bots or malicious agents. This is a difficult task, but Paima Batcher can leverage Google's reCAPTCHA V3 and easily be integrated into games.

1. Create a reCAPTCHA V3 account and get the `site-key` and `secret-key`. (https://www.google.com/recaptcha)
  * Set `RECAPTCHA_V3_BACKEND` in the `.env.<NETWORK>` file with your `secret-key`.
  * Set `RECAPTCHA_V3_FRONTEND` in the `.env.<NETWORK>` file with your `site-key`.
  * Set `ENABLE_RECAPTCHA_V3` in the `.env.<NETWORK>` file as `'true'` If this value is unset, then only a valid recaptcha key is required, but no check is done to validate if the user is human.
  * (OPTIONAL) Set `RECAPTCHA_V3_SCORE` in the `.env.<NETWORK>` file as a value between `0.0` and `1.0` (default `0.5` is used if not set). reCAPTCHA V3 returns a value between 0.0 and 1.0, where 0.0 is most likely a bot, and 1.0 is most likely a human. Scores < RECAPTCHA_V3_SCORE will be rejected.

2. Add the reCAPTCHA code to your project
  * Add the reCaptcha3 script `<script src="https://www.google.com/recaptcha/api.js?render=${site_key}" />` into your main HTML.
  * Or call `injectReCaptchaToHTML()` in your frontend through the middleware.


NOTE: By default reCAPTCHA actions will be labeled `submit/{key}` where `key` is the prefix of the concise command, e.g., `@j|10|0x9134|z` will be named `submit/j`

```js
import { ENV, injectReCaptchaToHTML } from '@paima/sdk/utils';

if (ENV.RECAPTCHA_V3_FRONTEND) {
  // highlight-next-line
  injectReCaptchaToHTML().then(() => {
    console.log('ReCaptcha loaded');
  });
}
```
Once enabled all batcher calls will be validated and reject calls if no token or non-human activity is detected.

