# Randomness

Randomness is an important part of many games and having a good source of randomness prevents users from abusing statistical trends to their own benefit.

In our case, we are building Paima Engine to produce games as globally accessible state machines. This means they are inherently deterministic (as everyone has to replay all submitted game input to arrive at the same global state). There is no central server which we rely on who could be the trusted randomness producing source (aka. randomness oracle).

Thus as we move forward having a good source of randomness becomes more and more important.

Of note, whenever a new block is generated there are a few pieces of information provided to Paima Engine which have a degree of uncertainty/randomness to them which make them harder to predict:
- The block hash
- The list of submitted data (user game input) which was posted by users to the on-chain smart contract
- Information about the block producer (randomness coming from the public key they committed to when they became a block producer)

As such, these are the pieces of data which we can start to build randomness from.

Paima works by annotating every block with a `seed`. This seed can then be combined with a utility class called `Prando` for most of the common randomness requirements

## Seed generation for a given block

1. Get the most recent 25 random seeds from previous blocks
1. Calculate `interimSeed = base64(sha256([latestBlockHash, ...blockSeeds].join(',')))`
1. Use `interimSeed` to randomly add in bits of the block like user addresses, nonces and submitted data during that block
1. Return `base64(sha256([...selectedChainData, latestChainData.blockHash, ...blockSeeds].join(',')))`

The goal of this algorithm including bits of `ChainData` for the block is because Paima may have multiple [funnels](../3%20-%20Reacting%20to%20Events/3%20-%20Funnel%20Types/1%20-%20Intro.md) that aggregate data from multiple locations and so this would ensure some parts of every funnel get included in the randomness generation. However, most likely we'll improve this seed generation process in the future.

## Example prando usage

```typescript
import Prando from '@paima/prando';

const prando = new Prando(block.seed);
const diceRoll = prando.nextInt(1, 6);
```
