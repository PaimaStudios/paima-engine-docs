"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[8270],{4321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(5893),i=n(1151);const a={sidebar_position:4},s="Posting Test Game Inputs To L2 Contract",r={id:"home/read-write-L2-state/posting-test-game-inputs",title:"Posting Test Game Inputs To L2 Contract",description:"Once you have the Paima L2 contract deployed for your game together with your game node up and running, you will inevitably want to test sending game inputs to the blockchain",source:"@site/docs/home/200-read-write-L2-state/4-posting-test-game-inputs.md",sourceDirName:"home/200-read-write-L2-state",slug:"/home/read-write-L2-state/posting-test-game-inputs",permalink:"/home/read-write-L2-state/posting-test-game-inputs",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/200-read-write-L2-state/4-posting-test-game-inputs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/home/read-write-L2-state/error-handling"},next:{title:"Batched mode",permalink:"/home/read-write-L2-state/batched-mode"}},l={},c=[{value:"Using The Paima Game Input Tester Web UI",id:"using-the-paima-game-input-tester-web-ui",level:2},{value:"Posting Test Game Inputs via Web UI",id:"posting-test-game-inputs-via-web-ui",level:3},{value:"(Obsolete) Doing It Manually Via Truffle Console",id:"obsolete-doing-it-manually-via-truffle-console",level:2},{value:"Starting Truffle Console",id:"starting-truffle-console",level:3},{value:"Interacting With Your Deployed L2 Contract",id:"interacting-with-your-deployed-l2-contract",level:3},{value:"Posting Test Game Inputs",id:"posting-test-game-inputs",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"posting-test-game-inputs-to-l2-contract",children:"Posting Test Game Inputs To L2 Contract"}),"\n",(0,o.jsx)(t.p,{children:"Once you have the Paima L2 contract deployed for your game together with your game node up and running, you will inevitably want to test sending game inputs to the blockchain\nto verify that everything is configured properly."}),"\n",(0,o.jsx)(t.h2,{id:"using-the-paima-game-input-tester-web-ui",children:"Using The Paima Game Input Tester Web UI"}),"\n",(0,o.jsxs)(t.p,{children:["Since Paima Engine v0.5.0, we have included a ",(0,o.jsx)(t.code,{children:"./paima-engine webui"})," command which launches a tiny web dApp that allows you to submit your manually crafted game inputs to your deployed L2 contract with a simple and pleasant UI. Do note, you need to have your .env file filled out and your game node running before calling the ",(0,o.jsx)(t.code,{children:"webui"})," command and using it."]}),"\n",(0,o.jsx)(t.h3,{id:"posting-test-game-inputs-via-web-ui",children:"Posting Test Game Inputs via Web UI"}),"\n",(0,o.jsx)(t.p,{children:"To post game inputs with the web ui, you simply need to enter them into the input box on the Paima Game Input Tester webpage which automatically opens, and press the submit button. You are required to have an EVM compatible wallet to use this functionality."}),"\n",(0,o.jsx)(t.p,{children:"The game input you post is expected to be manually crafted (as you are simply entering it into the input box directly) thereby providing a simple method of testing your game code/node configuration."}),"\n",(0,o.jsx)(t.p,{children:"For example you can use this game input with the chess or RPS game templates which allow a user to join a lobby (assuming lobby Xs6Q9GAqZVwe exists):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"j|*Xs6Q9GAqZVwe\n"})}),"\n",(0,o.jsx)(t.p,{children:"After clicking the submit button, you will have a transaction pop up in your wallet, which you can then confirm to submit on-chain."}),"\n",(0,o.jsx)(t.p,{children:"If you have your game node configured properly, you will see new logs printed as it detects/reads the posted game input (and attempts to process it)."}),"\n",(0,o.jsx)(t.p,{children:"Congratulations, you have gone through a full end-to-end loop of using Paima Engine!"}),"\n",(0,o.jsx)(t.h2,{id:"obsolete-doing-it-manually-via-truffle-console",children:"(Obsolete) Doing It Manually Via Truffle Console"}),"\n",(0,o.jsx)(t.p,{children:"This method is generally obsolete, but left here for educational purposes."}),"\n",(0,o.jsx)(t.h3,{id:"starting-truffle-console",children:"Starting Truffle Console"}),"\n",(0,o.jsxs)(t.p,{children:["To interact with the deployed contract and call its methods, you can use ",(0,o.jsx)(t.code,{children:"truffle console"}),", a tool provided with truffle. To proceed you will need:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The private key of an EVM account on the target network (network L2 contract is deployed on) with sufficient funds to pay for the transaction fees."}),"\n",(0,o.jsx)(t.li,{children:"The address of your deployed Paima L2 contract."}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"smart-contract"})," directory emitted from the Paima Engine executable (we will be reusing the same one from the deployment guide)."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To run the truffle console and connect to the target network, do the following:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to the ",(0,o.jsx)(t.code,{children:"smart-contract"})," directory;"]}),"\n",(0,o.jsxs)(t.li,{children:["Ensure the contract is compiled by running ",(0,o.jsx)(t.code,{children:"npx truffle compile"})," (If you have ",(0,o.jsx)(t.code,{children:"truffle"})," installed globally, omit the ",(0,o.jsx)(t.code,{children:"npx"})," prefix)."]}),"\n",(0,o.jsxs)(t.li,{children:["Set the deployment account private key to an environment variable called ",(0,o.jsx)(t.code,{children:"PRIVATE_KEY"})," and export it. For example, in Bash, run ",(0,o.jsx)(t.code,{children:"export PRIVATE_KEY=..."})," with your private key (without an ",(0,o.jsx)(t.code,{children:"0x"})," prefix) instead of the ellipsis."]}),"\n",(0,o.jsxs)(t.li,{children:["Start the interactive console by running ",(0,o.jsx)(t.code,{children:"npx truffle console --network testnet"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Reminder, the connection info truffle will use is found in ",(0,o.jsx)(t.code,{children:"truffle-config.js"}),". If you followed the deployment instructions, this config file will be good-to-go, otherwise, please reference ",(0,o.jsx)(t.a,{href:"/home/setup/deploying-l2-smart-contract",children:"the deployment guide"})," for more details."]}),"\n",(0,o.jsx)(t.h3,{id:"interacting-with-your-deployed-l2-contract",children:"Interacting With Your Deployed L2 Contract"}),"\n",(0,o.jsx)(t.p,{children:"You will now be placed inside of truffle's interactive console which will be waiting for your input."}),"\n",(0,o.jsxs)(t.p,{children:["In this console we can now bind to your deployed contract in order to interact with it. Simply input the following command, while replacing ",(0,o.jsx)(t.code,{children:"0xAB...EF"})," with the address of your deployed contract:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"contract = await PaimaL2Contract.at('0xAB...EF');\ncontract = await PaimaL2Contract.at('0xeaDC19a3009884b1c6EF557c0Aac2d38F782E55F');\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now that you have the contract bound, you can for example call read-only methods as such:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"await contract.fee();\n"})}),"\n",(0,o.jsx)(t.p,{children:"To make the output more human-readable, you can call it as follows to convert it before displaying:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"contract.fee().then(result => result.toString());\n"})}),"\n",(0,o.jsx)(t.h3,{id:"posting-test-game-inputs",children:"Posting Test Game Inputs"}),"\n",(0,o.jsxs)(t.p,{children:["To post game inputs to the contract, we will call the ",(0,o.jsx)(t.code,{children:"paimaSubmitGameInput"})," method on L2 contract."]}),"\n",(0,o.jsx)(t.p,{children:"Of note, we need to address two things:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"The game input you wish to post must first be converted to a hex string"}),"\n",(0,o.jsx)(t.li,{children:"You need to specify a fee for the transaction"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The game inputs we post are expected to be manually created (though we recommend using the ",(0,o.jsx)(t.code,{children:"builder"})," in the ",(0,o.jsx)(t.code,{children:"Paima Concise"})," library even for testing to make it simpler for you)\nthereby providing an interim method of testing your game code/node configuration. For this example we will use a game input from the chess game template which allows a user to join a lobby."]}),"\n",(0,o.jsxs)(t.p,{children:["The following command will convert the UTF text representation of the game input to hex and store it in ",(0,o.jsx)(t.code,{children:"gameInput"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"gameInput = web3.utils.utf8ToHex('j|*Xs6Q9GAqZVwe');\n"})}),"\n",(0,o.jsx)(t.p,{children:"From here we simply need to request a recommended fee from the smart contract:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"fee = await contract.fee();\n"})}),"\n",(0,o.jsx)(t.p,{children:"Finally, now that we have everything we need, we can simply issue the transaction to submit our gameInput."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"await contract.paimaSubmitGameInput(gameInput, { value: fee });\n"})}),"\n",(0,o.jsx)(t.p,{children:"On success you will receive a transaction receipt, where you can see the transaction hash as well as the block height at which the transaction was posted. If you have your\ngame node configured properly, you will also see it print new logs as it detects the posted game input and attempts to process it."}),"\n",(0,o.jsx)(t.p,{children:"Congratulations, you have gone through a full end-to-end loop of using Paima Engine!"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(7294);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);