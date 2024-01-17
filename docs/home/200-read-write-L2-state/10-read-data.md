# Reading L2 Data

## Creating the parser

Now that you've defined you grammar in the [previous section](./1-base-format.md), you can generate your parse like this:

```typescript
import { PaimaParser } from '@paima/sdk/concise';

const myParser = new PaimaParser(myGrammar, parserCommands);

function parse(s: string): ParsedSubmittedInput {
  try {
    const parsed = myParser.start(s);
    return { input: parsed.command, ...parsed.args } as any;
  } catch (e) {
    console.log(e, 'Parsing error');
    return { input: 'invalidString' };
  }
}
```

## Calling the parser from your STF

Paima works by updating your state machine whenever happens onchain - the most common case being that somebody interacted with your Paima L2 contract. The set of actions your state machine can react to are called the [Paima Primitives](../300-react-to-events/2-primitive-catalogue/1-introduction.md).

Your parser can then be used in the _stf_ (state transition function) of your application

```typescript
export default async function (
  inputData: SubmittedChainData,
  blockHeight: number,
  randomnessGenerator: Prando,
  dbConn: Pool
): Promise<SQLUpdate[]> {
  console.log(inputData, 'parsing input data');
  const user = inputData.userAddress.toLowerCase();

  // use your parser from the previous section
  // highlight-next-line
  const parsed = parse(inputData.inputData);

  console.log(`Processing input string: ${inputData.inputData}`);
  console.log(`Input string parsed as: ${parsed.input}`);

  switch (parsed.input) {
    // highlight-next-line
    case 'createLobby':
      // handle this input however you need (but needs to be deterministic)
    default:
      return [];
  }
}
```

## Reading data from an external source

### (Hardhat) Read Paima game input

Paima comes with a Hardhat plugin as part of [@paima/evm-contracts](https://www.npmjs.com/package/@paima/evm-contracts) for this.

To use it, make sure you have `import @paima/evm-contracts/plugin` at the top of your `hardhat.config.ts`

For reading inputs submitted to your L2 contract directly (instead of implicitly through another [Paima Primitive](../300-react-to-events/2-primitive-catalogue/1-introduction.md)), you can run `npx hardhat paima PaimaL2Contract:recentInputs`.
This command helps you see _recent_ inputs to your L2 contract (not the best tool for getting all historic interactions).

### (Explorer) See historical game inputs

You can, of course, also see all interactions with your smart contract on any blockchain explorer for the network you deployed to (recall: you can find your L2 contract address in anytime in `./contracts/evm/ignition/deployments/chain-XXX/deployed_addresses.json`)


