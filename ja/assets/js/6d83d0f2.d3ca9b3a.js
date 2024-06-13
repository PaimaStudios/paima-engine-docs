"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[8900],{7063:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(5893),t=a(1151);const i={sidebar_position:1},s="Onchain Data Grammar",o={id:"home/read-write-L2-state/base-format",title:"Onchain Data Grammar",description:"To be a rollup, Paima state has to eventually be written to the L1. As a sovereign rollup, the way the data is stored is fairly simple (calling a contract function that simply emits its input as an event) and we provide a way to generate a grammar for this data.",source:"@site/docs/home/200-read-write-L2-state/1-base-format.md",sourceDirName:"home/200-read-write-L2-state",slug:"/home/read-write-L2-state/base-format",permalink:"/ja/home/read-write-L2-state/base-format",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/200-read-write-L2-state/1-base-format.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Generating Code",permalink:"/ja/home/smart-contracts/evm/generating-code"},next:{title:"Reading L2 Data",permalink:"/ja/home/read-write-L2-state/read-data"}},l={},c=[{value:"Defining a grammar",id:"defining-a-grammar",level:2},{value:"Defining types",id:"defining-types",level:3},{value:"(Discouraged) Manually parsing",id:"discouraged-manually-parsing",level:2},{value:"Example usage",id:"example-usage",level:4},{value:"Supported characters",id:"supported-characters",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"onchain-data-grammar",children:"Onchain Data Grammar"}),"\n",(0,r.jsxs)(n.p,{children:["To be a rollup, Paima state has to eventually be written to the L1. As a sovereign rollup, the way the data is stored is fairly simple (calling a contract function that simply emits its input as an event) and we provide a way to generate a ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Formal_grammar",children:"grammar"})," for this data."]}),"\n",(0,r.jsxs)(n.p,{children:["Paima has its own format for representing L2 data called Paima Concise that resembles a bar-separated string (ex: ",(0,r.jsx)(n.code,{children:"c|3|100|"}),"). This was chosen as"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"It is human-readable, which not only helps with coding & debugging, but also helps users verify the content of the string when signing from their wallet such as MetaMask"}),"\n",(0,r.jsx)(n.li,{children:"It is easy to combine with many parsing tools (given the prevalence of CSV) and so it avoids having to write a lot of custom parers to Paima Concise in multiple programming languages & tools"}),"\n",(0,r.jsx)(n.li,{children:"It is easy to combine with other formats if desired. For example, you could use base64 to encode one of the fields in the bar-separated string (although we recommend using PaimaParser defined below instead)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Paima comes with two classes to help generate these bar-separated strings"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// write paima-concise encoding\nimport { builder } from '@paimas/sdk/concise';\n// read paima-concise encoding\nimport { consumer } from '@paima/sdk/concise';\n"})}),"\n",(0,r.jsx)(n.h2,{id:"defining-a-grammar",children:"Defining a grammar"}),"\n",(0,r.jsxs)(n.p,{children:["We allow defining more complex grammars on top of this notation using ",(0,r.jsx)(n.code,{children:"PaimaParser"}),". The process has two steps:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Define a base grammar (which Paima will then internally convert into ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form",children:"EBNF"})," form)"]}),"\n",(0,r.jsx)(n.li,{children:"Define how to read & write tokens with this grammar"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// First, define your grammar which Paima will turn into EBNF form internally\nconst myGrammar = `\ncreatedLobby        = c|numOfRounds|isPractice?\njoinedLobby         = j|*lobbyID\n`;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"defining-types",children:"Defining types"}),"\n",(0,r.jsxs)(n.p,{children:["Unlike typical EBNF notation where things are defined down to generic terms like ",(0,r.jsx)(n.code,{children:"DIGIT"})," or ",(0,r.jsx)(n.code,{children:"ALPHANUMERIC"}),", we instead define the terminal terms in Typescript"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Define the type of each token in a row"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Setup the type definitions for the result of parsing\nexport interface CreatedLobbyInput {\n  // highlight-next-line\n  // left-side of the equation\n  input: 'createdLobby';\n  // highlight-next-line\n  // right-side of the equation (other than the starting prefix)\n  numOfRounds: number;\n  isPractice: boolean;\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Define any additional constraints on the tokens"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import type { ParserRecord } from '@paima/sdk/concise';\nimport { PaimaParser } from '@paima/sdk/concise';\n\n// Define how to parse the terminal tokens in this grammar\n// Note: objects keys here MUST match the names using in your grammar\n// ex: `numOfRounds` defines the function to use for this token in the grammar above\nconst createdLobby: ParserRecord<CreatedLobbyInput> = {\n  // highlight-start\n  numOfRounds: PaimaParser.NumberParser(3, 1000),\n  isPractice: PaimaParser.TrueFalseParser(false),\n  // highlight-end\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note Paima comes with a ",(0,r.jsx)(n.code,{children:"PaimaParser"})," utility that includes many of the common parsing utility functions you need:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"showLineNumbers",children:"// alternate-color-start\nArrayParser(iter: { perItemParser: ParserCommandExec })\nTrueFalseParser(defaultValue?: boolean)\nDefaultRoundLength(blockTimeInSecs: number)\nNumberParser(min?: number, max?: number)\nNCharsParser(minChars: number, maxChars: number)\nRegexParser(regex: RegExp)\nHexParser()\nWalletAddress()\nEnumParser(values: readonly string[], transform?: (value: string) => string)\nJson()\n// alternate-color-end\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Combine all the terminal token definitions to generate the top-level parser"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import type { ParserRecord } from '@paima/concise';\nimport { PaimaParser } from '@paima/sdk/concise';\n\n// use to represent a string that didn't match anything in the grammar\nexport interface InvalidInput {\n  input: 'invalidString';\n}\n\n// top-level type\nexport type ParsedSubmittedInput =\n  | CreatedLobbyInput\n  | JoinedLobbyInput\n  | InvalidInput;\n\n// Define the top-level tokens\nconst parserCommands: Record<string, ParserRecord<ParsedSubmittedInput>> = {\n  createdLobby, // this means parse the key \"createLobby\" using the \"createLobby\" object defined above\n  joinedLobby\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"discouraged-manually-parsing",children:"(Discouraged) Manually parsing"}),"\n",(0,r.jsx)(n.p,{children:"Although using a grammar is often the best way to go, you can also manually parse the data for use-cases where the encoding cannot be represented using the grammar system."}),"\n",(0,r.jsxs)(n.p,{children:["You can define your own parser as they satisfy the type ",(0,r.jsx)(n.code,{children:"ParserCommandExec"})," defined below"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type ParserValues = string | boolean | number | null;\ntype ParserCommandExec = (keyName: string, input: string) => ParserValues | ParserValues[];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you want to define your own parse functions, you can use a tool like the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/parsimmon",children:"parsimmon"})," NPM package."]}),"\n",(0,r.jsx)(n.h4,{id:"example-usage",children:"Example usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import P from 'parsimmon';\nimport { consumer } from '@paima/sdk/concise';\n\nconst pNumOfRounds = P.digits.map(Number).chain(n => {\n  if (n >= 3 && n <= 1000) return P.succeed(n);\n  else return P.fail(`Round Number must be above 0`);\n});\nconst pMaybeBool = P.string('T').or(P.string('F')).or(P.succeed(null));\n\n// this replaces the previous ParserRecord definition for `createLobby`\nfunction parseSubmitTurn(c: ConciseConsumer): SubmittedTurnInput {\n  const numOfRounds = tryParse(c.nextValue(), pNumOfRounds);\n  const isPractice = tryParse(c.nextValue(), pMaybeBool);\n  return {\n    input: 'createLobby',\n    numOfRounds,\n    isPractice,\n  };\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We will see more about how to read (parse) using grammars in the ",(0,r.jsx)(n.a,{href:"/ja/home/read-write-L2-state/read-data",children:"next section"}),", but we share a sample here given using a separate library like ",(0,r.jsx)(n.code,{children:"parsimmon"})," requires slightly different code."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { consumer } from '@paima/sdk/concise';\n\nfunction parse(input: string): ParsedSubmittedInput {\n  try {\n    const cConsumer = consumer.initialize(input);\n    // custom parser for createLobby\n    if (cConsumer.prefix() === 'createLobby') {\n      return parseSubmitTurn(cConsumer);\n    } else {\n      const parsed = myParser.start(input);\n      return { input: parsed.command, ...parsed.args } as any;\n    }\n  } catch (e) {\n    console.log(e, 'Parsing error');\n    return { input: 'invalidString' };\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"supported-characters",children:"Supported characters"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"PaimaParser"})," grammar supports UTF8, but generally has the following reserved characters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"*"})," See ",(0,r.jsx)(n.a,{href:"/ja/home/read-write-L2-state/parallelism",children:"parallelism"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@"})," Implicitly use the address that submitted the wallet for ",(0,r.jsx)(n.a,{href:"/ja/home/read-write-L2-state/parallelism",children:"parallelism"}),". That is, for parallelism purposes, ",(0,r.jsx)(n.code,{children:"@x|a"})," is equivalent to ",(0,r.jsx)(n.code,{children:"x|*wallet|a"}),", but no actual modifications is done to the onchain format"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"?"})," Optional entry"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"&"})," At the start of a message for ",(0,r.jsx)(n.a,{href:"/ja/home/multichain-support/wallet-layer/delegate-wallet/introduction",children:"wallet delegation"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"|"})," , ",(0,r.jsx)(n.code,{children:"="})," Used to define the grammar"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-"})," Used for PaimaParser array notation"]}),"\n",(0,r.jsxs)(n.li,{children:["ASCII 0x02 and 0x03. Use for ",(0,r.jsx)(n.a,{href:"/ja/home/read-write-L2-state/batched-mode",children:"batched-mode"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"Now that you've created your parser, you can"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/ja/home/read-write-L2-state/read-data",children:"read with it"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/ja/home/read-write-L2-state/write-data",children:"write with it"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var r=a(7294);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);