---
sidebar_position: 1
---

# Onchain Data Grammar

To be a rollup, Paima state has to eventually be written to the L1. As a sovereign rollup, the way the data is stored is fairly simple (calling a contract function that simply emits its input as an event) and we provide a way to generate a [grammar](https://en.wikipedia.org/wiki/Formal_grammar) for this data.

Paima has its own format for representing L2 data called Paima Concise that resembles a bar-separated string (ex: `c|3|100|`). This was chosen as
1. It is human-readable, which not only helps with coding & debugging, but also helps users verify the content of the string when signing from their wallet such as Metamask
2. It is easy to combine with many parsing tools (given the prevalence of CSV) and so it avoids having to write a lot of custom parers to Paima Concise in multiple programming languages & tools
3. It is easy to combine with other formats if desired. For example, you could use base64 to encode one of the fields in the bar-separated string (although we recommend using PaimaParser defined below instead)

Paima comes with two classes to help generate these bar-separated strings
```javascript
// write paima-concise encoding
import { builder } from '@paimas/sdk/concise';
// read paima-concise encoding
import { consumer } from '@paima/sdk/concise';
```

## Defining a grammar

We allow defining more complex grammars on top of this notation using `PaimaParser`. The process has two steps:
1. Define a base grammar (which Paima will then internally convert into [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) form)
2. Define how to read & write tokens with this grammar

```javascript
// First, define your grammar which Paima will turn into EBNF form internally
const myGrammar = `
createdLobby        = c|numOfRounds|isPractice?
joinedLobby         = j|*lobbyID
`;
```

### Defining types

Unlike typical EBNF notation where things are defined down to generic terms like `DIGIT` or `ALPHANUMERIC`, we instead define the terminal terms in Typescript

1. Define the type of each token in a row
```typescript
// Setup the type definitions for the result of parsing
export interface CreatedLobbyInput {
  // highlight-next-line
  // left-side of the equation
  input: 'createdLobby';
  // highlight-next-line
  // right-side of the equation (other than the starting prefix)
  numOfRounds: number;
  isPractice: boolean;
}
```

2. Define any additional constraints on the tokens

```typescript
import type { ParserRecord } from '@paima/sdk/concise';
import { PaimaParser } from '@paima/sdk/concise';

// Define how to parse the terminal tokens in this grammar
// Note: objects keys here MUST match the names using in your grammar
// ex: `numOfRounds` defines the function to use for this token in the grammar above
const createdLobby: ParserRecord<CreatedLobbyInput> = {
  // highlight-start
  numOfRounds: PaimaParser.NumberParser(3, 1000),
  isPractice: PaimaParser.TrueFalseParser(false),
  // highlight-end
};
```

Note Paima comes with a `PaimaParser`utility that includes many of the common parsing utility functions you need
```typescript showLineNumbers
// alternate-color-start
ArrayParser(iter: { perItemParser: ParserCommandExec })
TrueFalseParser(defaultValue?: boolean)
DefaultRoundLength(blockTimeInSecs: number)
NumberParser(min?: number, max?: number)
NCharsParser(minChars: number, maxChars: number)
RegexParser(regex: RegExp)
HexParser()
WalletAddress()
EnumParser(values: readonly string[], transform?: (value: string) => string)
// alternate-color-end
```

3. Combine all the terminal token definitions to generate the top-level parser
```typescript
import type { ParserRecord } from '@paima/concise';
import { PaimaParser } from '@paima/sdk/concise';

// use to represent a string that didn't match anything in the grammar
export interface InvalidInput {
  input: 'invalidString';
}

// top-level type
export type ParsedSubmittedInput =
  | CreatedLobbyInput
  | JoinedLobbyInput
  | InvalidInput;

// Define the top-level tokens
const parserCommands: Record<string, ParserRecord<ParsedSubmittedInput>> = {
  createdLobby, // this means parse the key "createLobby" using the "createLobby" object defined above
  joinedLobby
};
```

## (Discouraged) Manually parsing

Although using a grammar is often the best way to go, you can also manually parse the data for use-cases where the encoding cannot be represented using the grammar system.

You can define your own parser as they satisfy the type `ParserCommandExec` defined below
```typescript
type ParserValues = string | boolean | number | null;
type ParserCommandExec = (keyName: string, input: string) => ParserValues | ParserValues[];
```

If you want to define your own parse functions, you can use a tool like the [parsimmon](https://www.npmjs.com/package/parsimmon) NPM package.

#### Example usage

```typescript
import P from 'parsimmon';
import { consumer } from '@paima/sdk/concise';

const pNumOfRounds = P.digits.map(Number).chain(n => {
  if (n >= 3 && n <= 1000) return P.succeed(n);
  else return P.fail(`Round Number must be above 0`);
});
const pMaybeBool = P.string('T').or(P.string('F')).or(P.succeed(null));

// this replaces the previous ParserRecord definition for `createLobby`
function parseSubmitTurn(c: ConciseConsumer): SubmittedTurnInput {
  const numOfRounds = tryParse(c.nextValue(), pNumOfRounds);
  const isPractice = tryParse(c.nextValue(), pMaybeBool);
  return {
    input: 'createLobby',
    numOfRounds,
    isPractice,
  };
}
```

We will see more about how to read (parse) using grammars in the [next section](./10-read-data.md), but we share a sample here given using a separate library like `parsimmon` requires slightly different code.

```typescript
import { consumer } from '@paima/sdk/concise';

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


## Supported characters

The `PaimaParser` grammar supports UTF8, but generally has the following reserved characters:
- `*` See [parallelism](./200-parallelism.md)
- `@` Implicitly use the address that submitted the wallet for [parallelism](./200-parallelism.md). That is, for parallelism purposes, `@x|a` is equivalent to `x|*wallet|a`, but no actual modifications is done to the onchain format
- `?` Optional entry
- `&` At the start of a message for [wallet delegation](../700-multichain-support/3-delegate-wallet/1-introduction.mdx)
- `|` , `=` Used to define the grammar
- `-` Used for PaimaParser array notation
- ASCII 0x02 and 0x03. Use for [batched-mode](./400-batched-mode.md)

## Conclusion

Now that you've created your parser, you can
- [read with it](./10-read-data.md)
- [write with it](./20-write-data.md)
