"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,m=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return a?r.createElement(m,o(o({ref:t},h),{},{components:a})):r.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},17:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:5},o="Batched mode",s={unversionedId:"home/read-write-L2-state/batched-mode",id:"home/read-write-L2-state/batched-mode",title:"Batched mode",description:"Paima supports two different modes for inputs:",source:"@site/docs/home/2-read-write-L2-state/5-batched-mode.md",sourceDirName:"home/2-read-write-L2-state",slug:"/home/read-write-L2-state/batched-mode",permalink:"/ja/home/read-write-L2-state/batched-mode",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/2-read-write-L2-state/5-batched-mode.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Posting Test Game Inputs To L2 Contract",permalink:"/ja/home/read-write-L2-state/posting-test-game-inputs"},next:{title:"Replay protection",permalink:"/ja/home/read-write-L2-state/replay-protection"}},l={},d=[{value:"Paima Engine Support",id:"paima-engine-support",level:2},{value:"Batched Input Format",id:"batched-input-format",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Batcher Webserver",id:"batcher-webserver",level:3},{value:"Address Validator",id:"address-validator",level:3},{value:"Game Input Validator",id:"game-input-validator",level:3},{value:"Batched Transaction Poster",id:"batched-transaction-poster",level:3},{value:"Batcher Runtime",id:"batcher-runtime",level:3}],h={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"batched-mode"},"Batched mode"),(0,n.kt)("p",null,"Paima supports two different modes for inputs:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Non-batched mode. This only supports EVM wallets set to the same network as used for the settlement layer of the app. Transaction are submitted directly by the user (and they cover the transaction fees)"),(0,n.kt)("li",{parentName:"ol"},"Batched mode. Users sign data, and transactions are crafted by the batcher. This allows users to use the app with different EVM networks or wallets from different cryptocurrencies.")),(0,n.kt)("p",null,"We protect batched mode users by calculating ",(0,n.kt)("inlineCode",{parentName:"p"},"sign(securityPrefix || input || timestamp)")," where:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"securityPrefix")," is described ",(0,n.kt)("a",{parentName:"li",href:"./7%20-%20autosign.md"},"here")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"timestamp")," is used for replay protection. You can learn more about replay protection ",(0,n.kt)("a",{parentName:"li",href:"./6%20-%20replay-protection.md"},"here"))),(0,n.kt)("p",null,"The idea behind it is that rather than each user submitting their own transactions directly on-chain, instead they:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a valid game input."),(0,n.kt)("li",{parentName:"ol"},"Sign the payload with their private key."),(0,n.kt)("li",{parentName:"ol"},"Provide the game input + signature + their address to a batcher."),(0,n.kt)("li",{parentName:"ol"},'The batcher compiles the signed game inputs of many users and submits one "batched game input" transaction the contract.')),(0,n.kt)("h2",{id:"paima-engine-support"},"Paima Engine Support"),(0,n.kt)("p",null,"One of the great things about game input batching is that we can support it on the level of Paima Engine such that every game will be able to automatically get to take advantage of it for free. Furthermore, the implementer of a game state machine does not even have to consider batched game inputs (besides the fact that address types may vary if supporting other L1s)."),(0,n.kt)("p",null,"Specifically, Paima Funnel will handle unbundling the batch for you so that each entry inside the batch will be treated as if it was an individual input from the perspective of your app (technically speaking, the single ",(0,n.kt)("inlineCode",{parentName:"p"},"submittedData")," that contains the entire batch will be split such that each entry inside the batch will be its own ",(0,n.kt)("inlineCode",{parentName:"p"},"submittedData"),")."),(0,n.kt)("p",null,"In order for this to be secure, while processing a batched game input transaction Paima Funnel verifies every signature matches for every game input supplied. If not, then that game input is thrown away. As such, when constructing a ",(0,n.kt)("inlineCode",{parentName:"p"},"submittedData"),", the address will be verified and can be trusted if they end up inside your app (of note, in regular submitted game input this signature validation is performed by the blockchain validators who verified the tx before it was added to a block, so now we have to do it instead). Thus the game state machine will be able to trust the authenticity of all ",(0,n.kt)("inlineCode",{parentName:"p"},"submittedData"),", whether or not they came from batched game input txs, and not have to even consider how they were submitted."),(0,n.kt)("h2",{id:"batched-input-format"},"Batched Input Format"),(0,n.kt)("p",null,"We will specify a standard batched input transactions are required to follow in order to be considered valid."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"B~\nuserAddress/userSignature/input/millisecondTimestamp~\nuserAddress/userSignature/input/millisecondTimestamp~\nuserAddress/userSignature/input/millisecondTimestamp~\n")),(0,n.kt)("p",null,"Key notes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"B")," is used to denote this is a batched game input transaction. It is simply the ASCII character ",(0,n.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"~")," in practice is actually the ",(0,n.kt)("inlineCode",{parentName:"li"},"\\x02")," ASCII character"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/")," in practice is actually the ",(0,n.kt)("inlineCode",{parentName:"li"},"\\x03")," ASCII character")),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The diagram below lays out the general architecture of Paima Batcher."),(0,n.kt)("mermaid",{value:"%%{\n  init: {\n    'theme': 'base',\n    'themeVariables': {\n      'primaryColor': '#12271F',\n      'primaryTextColor': '#fff',\n      'lineColor': '#aaa',\n      'secondaryColor': '#030909',\n      'tertiaryColor': '#fff',\n      'clusterBkg': '#00130C',\n      'clusterBorder': '000',\n      'titleColor': '#aaa'\n    }\n  }\n}%%\ngraph TD\n    C[User] --\x3e|submits from wallet| Server\n    subgraph Server\n        Webserver\n        CryptoValidator[Address validator]\n        Webserver --\x3e CryptoValidator\n    end\n    Server --\x3e|saves to| Database\n\n    CustomValidator[Custom validator]\n    CustomValidator --\x3e|writes validation result| Database\n    Database --\x3e|polls unvalidated txs| CustomValidator\n\n    TransationPoster --\x3e|sends tx| Blockchain\n    Blockchain --\x3e|tx confirmation| TransationPoster\n\n    Database --\x3e|polls validated txs| TransationPoster\n    TransationPoster --\x3e|marks confirmed txs| Database\n\n    Blockchain"}),(0,n.kt)("h3",{id:"batcher-webserver"},"Batcher Webserver"),(0,n.kt)("p",null,"The batcher webserver is the external facing webserver which allows users to interact with the batcher. The primary functionality of the web server will be to allow users to submit their game inputs to be batched, however eventually the web server will also expose endpoints related to user status (ie. telling the user how many more game inputs, or days they have paid for/still available)."),(0,n.kt)("h3",{id:"address-validator"},"Address Validator"),(0,n.kt)("p",null,"The address validator is the module which dictates whether or not a user(address) is allowed to have their game input batched (returns a true/false to the webserver after the user submits their game input to let the user know whether it was accepted). The address validator checks:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Whether the address is one of the supported address schemes."),(0,n.kt)("li",{parentName:"ol"},"Whether the submitted game input matches the signature supplied with it."),(0,n.kt)("li",{parentName:"ol"},"Whether the address is allowed to submit game input to the batcher.")),(0,n.kt)("p",null,"If the address validator returns ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," for the user of the submitted game input (meaning the user has the right to submit their game inputs to the batcher) then it also adds the game input into the ",(0,n.kt)("inlineCode",{parentName:"p"},"unvalidated_game_inputs")," table of the database (ordered by an ever-increasing id as primary key)."),(0,n.kt)("p",null,"Initially we will allow any address to batch their game input for free, but will add the ability for the address validator to rate limit users based on number of game inputs submitted and/or number of days they are allowed to submit as many game inputs as they wish (and then rate limiting on how fast they can submit them). This rate limiting will eventually be tied to external data (ie. whether someone owns an NFT, is staking, or made an in app purchase on mobile, etc.)."),(0,n.kt)("p",null,"The address validator is used by the webserver on the same coordinating thread."),(0,n.kt)("h3",{id:"game-input-validator"},"Game Input Validator"),(0,n.kt)("p",null,"Each deployed batcher will specify which game input validator it is using (with the expectation that for each game we will implement a custom validator). The game input validator reads inputs from the ",(0,n.kt)("inlineCode",{parentName:"p"},"unvalidated_game_inputs")," table and verifies that:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user submitted game input is formatted properly."),(0,n.kt)("li",{parentName:"ol"},"For game inputs with a state identifier (",(0,n.kt)("inlineCode",{parentName:"li"},"|*"),"), checks a running game backend to ensure that said piece of state actually exists (ex. that someone is joining or submitting moves to a match that is not fake).")),(0,n.kt)("p",null,"If these checks pass, then the game input is added to the ",(0,n.kt)("inlineCode",{parentName:"p"},"validated_game_inputs")," table (ordered by an ever-increasing id as primary key). If the checks do not pass, then the game input is thrown away. In either case, it is also deleted from the ",(0,n.kt)("inlineCode",{parentName:"p"},"unvalidated_game_inputs")," table."),(0,n.kt)("p",null,"The validator runs on a distinct thread/process and only interacts with the database. In the future we can think about parallelizing game input validation if this ever becomes a bottleneck."),(0,n.kt)("h3",{id:"batched-transaction-poster"},"Batched Transaction Poster"),(0,n.kt)("p",null,"The batched transaction poster reads inputs from the ",(0,n.kt)("inlineCode",{parentName:"p"},"validated_game_inputs")," table and produced a batched transaction which gets submitted to the on-chain game smart contract that the batcher is targeting. Once the transaction has been submitted and confirmed, the poster deletes the inputs which from the ",(0,n.kt)("inlineCode",{parentName:"p"},"validated_game_inputs")," table."),(0,n.kt)("p",null,"The poster runs on a distinct thread and only interacts with the database and the on-chain contract."),(0,n.kt)("h3",{id:"batcher-runtime"},"Batcher Runtime"),(0,n.kt)("p",null,"The batcher runtime is the coordinating top-level module which:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Starts the webserver on its own thread"),(0,n.kt)("li",{parentName:"ul"},"Starts the game input validator on its own thread"),(0,n.kt)("li",{parentName:"ul"},"Starts the batched transaction poster on its own thread")))}p.isMDXComponent=!0}}]);