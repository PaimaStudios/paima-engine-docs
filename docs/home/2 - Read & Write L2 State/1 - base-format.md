---
sidebar_position: 1
---

# Read and Write to L2 state

To be a rollup, Paima state has to eventually be written to the L1. As a sovereign rollup, the way the data is stored is fairly simple (calling a contract function that simply emits its input as an event) and we provide a way to generate a [grammar](https://en.wikipedia.org/wiki/Formal_grammar) for this data.

Paima has its own format for representing L2 data called Paima Concise that resembles a bar-separated string (ex: `c|3|100|`). This was chosen as
1. It is human-readable, which not only helps with coding & debugging, but also helps users verify the content of the string when signing from their wallet such as Metamask
2. It is easy to combine with many parsing tools (given the prevalence of CSV) and so it avoids having to write a lot of custom parers to Paima Concise in multiple programming languages & tools
3. It is easy to combine with other formats if desired. For example, you could use [protobuf](https://protobuf.dev/) to encode one of the fields in the bar-separated string (although we recommend using PaimaParser defined below instead)

Paima comes with two classes to help generate these bar-separated strings
```javascript
// create the bar-separated string
import { builder } from 'paima-engine/paima-concise';
// parse the bar-separated string
import { consumer } from 'paima-engine/paima-concise';
```

## Read data

### Defining a grammar

We allow defining more complex grammars on top of this notation using `PaimaParser`. The process has two steps:
1. Define a base grammar (which Paima will then internally convert into [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) form)
2. Define how to parse tokens in this grammar (recursively defined)

```typescript
import type { ParserRecord } from 'paima-sdk/paima-concise';
import { PaimaParser } from 'paima-sdk/paima-concise';

// First, define your grammar which Paima will turn into EBNF form internally
const myGrammar = `
createdLobby        = c|numOfRounds|isPractice?
joinedLobby         = j|*lobbyID
`;

// Setup the type definitions for the result of parsing
export interface CreatedLobbyInput {
  input: 'createdLobby';
  numOfRounds: number;
  isPractice: boolean;
}
export interface JoinedLobbyInput {
  input: 'joinedLobby';
  lobbyID: string;
}
export interface InvalidInput {
  input: 'invalidString';
}
export type ParsedSubmittedInput =
  | CreatedLobbyInput
  | JoinedLobbyInput
  | InvalidInput;


// First, define how to parse the leaf tokens in this grammar
// Note: objects keys here MUST match the names using in your grammar
// ex: `numOfRounds` key here defines which function to use to parse the token defined in the grammar above
const createdLobby: ParserRecord<CreatedLobbyInput> = {
  numOfRounds: PaimaParser.NumberParser(3, 1000),
  isPractice: PaimaParser.TrueFalseParser(false),
};
const joinedLobby: ParserRecord<JoinedLobbyInput> = {
  lobbyID: PaimaParser.NCharsParser(12, 12),
};

// Define the top-level tokens
const parserCommands: Record<string, ParserRecord<ParsedSubmittedInput>> = {
  createdLobby, // this means parse the key "createLobby" using the "createLobby" object defined above
  joinedLobby
};

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

`PaimaParser` comes with many of the common token parsing utility functions you need
- `ArrayParser(iter: { perItemParser: ParserCommandExec })`
- `TrueFalseParser(defaultValue?: boolean)`
- `DefaultRoundLength(blockTimeInSecs: number)`
- `NumberParser(min?: number, max?: number)`
- `NCharsParser(minChars: number, maxChars: number)`
- `RegexParser(regex: RegExp)`
- `HexParser()`
- `WalletAddress()`
- `EnumParser(values: readonly string[], transform?: (value: string) => string)`

### Manually parsing

Although using a grammar is often the best way to go, you can also manually parse the data for use-cases where the encoding cannot be represented using the grammar system.

You can define your own parser as they satisfy the type `ParserCommandExec` defined below
```typescript
type ParserValues = string | boolean | number | null;
type ParserCommandExec = (keyName: string, input: string) => ParserValues | ParserValues[];
```

If you want to define your own parse functions, we suggest the [parsimmon](https://www.npmjs.com/package/parsimmon) NPM package.

#### Example usage

```typescript
import P from 'parsimmon';
import { consumer } from 'paima-engine/paima-concise';

const pRoundNumber = P.digits.map(Number).chain(n => {
  if (n >= 1 && n <= 1000) return P.succeed(n);
  else return P.fail(`Round Number must be above 0`);
});
const pMaybeBool = P.string('T').or(P.string('F')).or(P.succeed(null));

function parseSubmitTurn(c: ConciseConsumer): SubmittedTurnInput {
  const roundNumber = tryParse(c.nextValue(), pRoundNumber);
  const isPractice = tryParse(c.nextValue(), pMaybeBool);
  return {
    input: 'createLobby',
    numOfRounds,
    isPractice,
  };
}

function parse(input: string): ParsedSubmittedInput {
  try {
    const cConsumer = consumer.initialize(input);
    // custom parser for createLobby
    if (cConsumer.prefix() === 'createLobby') {
      return parseSubmitTurn(cConsumer);
    } else {
      const parsed = myParser.start(input);
      return { input: parsed.command, ...parsed.args } as any;
    }
  } catch (e) {
    console.log(e, 'Parsing error');
    return { input: 'invalidString' };
  }
}

```

### Supported characters

The `PaimaParser` grammar supports UTF8, but generally has the following reserved characters:
- `*` See [parallelism](./2%20-%20parallelism.md)
- `@` Implicitly use the address that submitted the wallet for [parallelism](./2%20-%20parallelism.md). That is, for parallelism purposes, `@x|a` is equivalent to `x|*wallet|a`, but no actual modifications is done to the onchain format
- `?` Optional entry
- `|` , `=` Used to define the grammar
- `-` Used for PaimaParser array notation
- ASCII 0x02 and 0x03. Use for [batched-mode](./5%20-%20batched-mode.md)

## Concise Builder

Writing data is much simpler

```typescript
import { builder } from 'paima-engine/paima-concise';
import {
  awaitBlock,
  getActiveAddress,
  PaimaMiddlewareErrorCode,
  postConciseData,
} from 'paima-sdk/paima-mw-core';


const conciseBuilder = builder.initialize();
//createdLobby = c|numOfRounds|isPractice?
conciseBuilder.setPrefix('c');
conciseBuilder.addValues([
  { value: numberOfRounds.toString(10) },
  { value: isPractice ? 'T' : '' },
]);

const response = await postConciseData(
  conciseBuilder.build(),
  errorFxn // See other section in the documentation on error handling
);
if (!response.success) return response;

// wait for the block to appear on-chain and do any error handling
// ex: if state changed between when the user made a tx and the tx getting included in a block
await awaitBlock(response.blockHeight);
```
