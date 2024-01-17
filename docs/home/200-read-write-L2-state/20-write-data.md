# Writing L2 Data

## Concise Builder

Now that you've defined you grammar in the [previous section](./1-base-format.md), you can programmatically interact with it.


1. Generate the data to submit

```typescript
import { builder } from '@paima/sdk/concise';

const conciseBuilder = builder.initialize();
//createdLobby = c|numOfRounds|isPractice?
conciseBuilder.setPrefix('c');
conciseBuilder.addValues([
  { value: numberOfRounds.toString(10) },
  { value: isPractice ? 'T' : '' },
]);
```

2. Submit the data onchain

```typescript
import {
  awaitBlock,
  postConciseData,
} from '@paima/sdk/mw-core';

const response = await postConciseData(
  conciseBuilder.build(),
  errorFxn // See other section in the documentation on error handling
);
if (!response.success) return response;
```

3. (optional) wait for the transaction to success

```typescript
// wait for the block to appear on-chain and do any error handling
// ex: if state changed between when the user made a tx and the tx getting included in a block
await awaitBlock(response.blockHeight);
```

## Writing data from an external source

### (Hardhat) Submit Paima Game Input

Paima comes with a Hardhat plugin as part of [@paima/evm-contracts](https://www.npmjs.com/package/@paima/evm-contracts) for this.

To use it, make sure you have `import @paima/evm-contracts/plugin` at the top of your `hardhat.config.ts`

The Paima hardhat plugin comes with many utility such as `PaimaL2Contract:submitGameInput` to post game inputs to the contract (calling the `paimaSubmitGameInput` method on L2 contract).

- Interactive prompts: `npx hardhat paima PaimaL2Contract:submitGameInput`
- Command line parameters: `npx hardhat paima PaimaL2Contract:submitGameInput --contract 0x5fbdb2315678afecb367f032d93f642f64180aa3 --data "j|*Xs6Q9GAqZVwe"`
