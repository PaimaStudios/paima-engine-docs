"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[6730],{3336:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(5893),t=i(1151);const r={sidebar_position:4},o="Environment Configuration Variables",a={id:"home/setup/environment-config-values",title:"Environment Configuration Variables",description:"The following is a list of possible environment variables that can be configured for your project. These variables are read in the ENV class, located in @paima/utils/config.js. Please refer to that file for more information on default values.",source:"@site/docs/home/1-setup/4-environment-config-values.md",sourceDirName:"home/1-setup",slug:"/home/setup/environment-config-values",permalink:"/home/setup/environment-config-values",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/1-setup/4-environment-config-values.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How To Use Paima Engine",permalink:"/home/setup/how-to-use-paima-engine"},next:{title:"Paima Batcher",permalink:"/home/setup/paima-bacher"}},l={},c=[{value:"Required Variables",id:"required-variables",level:2},{value:"Optional Variables",id:"optional-variables",level:2},{value:"Other Variables",id:"other-variables",level:2},{value:"Cardano extensions",id:"cardano-extensions",level:2},{value:"Customization",id:"customization",level:2},{value:"Example config file",id:"example-config-file",level:2},{value:"Cardano",id:"cardano",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"environment-configuration-variables",children:"Environment Configuration Variables"}),"\n",(0,s.jsxs)(n.p,{children:["The following is a list of possible environment variables that can be configured for your project. These variables are read in the ENV class, located in ",(0,s.jsx)(n.code,{children:"@paima/utils/config.js"}),". Please refer to that file for more information on default values."]}),"\n",(0,s.jsx)(n.h2,{id:"required-variables",children:"Required Variables"}),"\n",(0,s.jsx)(n.p,{children:"This section lists the environment variables that are mandatory to be filled in for your project to function properly."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Chain variables:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CHAIN_URI"}),": The URI of the chain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CHAIN_EXPLORER_URI"}),": The URI of the chain explorer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CHAIN_ID"}),": The ID of the chain."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CHAIN_NAME"}),": The name of the chain."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Chain currency variables:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CHAIN_CURRENCY_NAME"}),": The name of the chain currency."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CHAIN_CURRENCY_SYMBOL"}),": The symbol of the chain currency."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CHAIN_CURRENCY_DECIMALS"}),": The number of decimals for the chain currency."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Database connection variables (self explanatory):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"DB_USER"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"DB_PW"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"DB_NAME"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"DB_HOST"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"DB_PORT"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CONTRACT_ADDRESS"}),": The address of your Paima L2 contract."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"START_BLOCKHEIGHT"}),": The block height at which the syncing process starts. This is usually the block height at which the contract was deployed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BLOCK_TIME"}),": The number of seconds it takes for new blocks to be created on the chain you deployed your L2 contract on."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BACKEND_URI"}),": The URL of where your game node server will be deployed. This is used by the Middleware to interact with your game node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WEBSERVER_PORT"}),": The port to use for running your game node server."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"optional-variables",children:"Optional Variables"}),"\n",(0,s.jsx)(n.p,{children:"This section includes optional environment variables that have sensible default values if not explicitly set."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BATCHER_URI"}),": The URL of the deployed batcher, if used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DEFAULT_FEE"}),": The blockchain fee to be set in transactions created by the Middleware."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ENABLE_DRY_RUN"}),": Adds a ",(0,s.jsx)(n.code,{children:"GET /dry_run"})," endpoint for input testing. Use it to post game inputs to validate them without modifying the game state."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DEFAULT_FUNNEL_GROUP_SIZE"}),": The number of blocks queried in one funnel sync step. If not set, a value of 100 is used. Generally no need to change this value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"NETWORK"}),": Used across modules to determine which .env file to read (",(0,s.jsx)(n.code,{children:".env.$NETWORK"}),"). Must be set separately if needed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FORCE_INVALID_PAIMA_DB_TABLE_DELETION"}),": Instead of failing during DB initialization, it deletes invalid tables and recreates them (without the previous content). If turned off, resync from scratch is needed after a major ",(0,s.jsx)(n.code,{children:"@paima/sdk"})," update that affects internal tables."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"STORE_HISTORICAL_GAME_INPUTS"}),": If enabled, one of the internal tables stores all of the posted game inputs. Note that the table is currently accessible only through a direct DB connection."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"POLLING_RATE"}),": The frequency at which to check for new block data. If not filled in, a value of ",(0,s.jsx)(n.code,{children:"BLOCK_TIME - 0.1"})," is used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"STOP_BLOCKHEIGHT"}),": The block at which the funnel stops syncing. This can be useful during development or tests."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SERVER_ONLY_MODE"}),": Set this to run the game node without syncing new blocks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Security variables:"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CONCISE_GAME_NAME"}),': This value will be prefixed to each concise command sent and should be a unique string for each game. E.g., "TDWOTJ" for Tower Defense: Wrath of the Jungle. This prevents replay attacks between different games. This is a mandatory requirement for Gaming Accounts Automatic Signing.']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"other-variables",children:"Other Variables"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DEPLOYMENT"}),": was used in the past to determine how often new blocks are emitted. It is now ",(0,s.jsx)(n.em,{children:"deprecated"})," and replaced with ",(0,s.jsx)(n.code,{children:"BLOCK_TIME"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GAME_NODE_VERSION"}),": defined statically in ",(0,s.jsx)(n.code,{children:"@paima/sdk"}),". Check used to ensure your game node is running with a compatible version of paima-engine. After a major upgrade and necessary adjustments, you should adjust the version on your side."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/home/react-to-events/primitive-catalogue/introduction",children:"Primitive Catalogue"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DEFAULT_PRESYNC_STEP_SIZE"}),": number of blocks to process in each step during initial presync phase. If not provided, a value of 1000 is used. Generally no need to change this value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CDE_CONFIG_PATH"}),": allows you to specify a custom location for your ",(0,s.jsx)(n.code,{children:"extensions.yml"})," that is used to initialize primitive catalogue entries"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cardano-extensions",children:"Cardano extensions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CARP_URL"}),": The URL of a Carp instace, required when using Cardano primitives."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CARDANO_NETWORK"}),": One of ",(0,s.jsx)(n.code,{children:"preview"}),", ",(0,s.jsx)(n.code,{children:"preprod"}),", ",(0,s.jsx)(n.code,{children:"mainnet"}),". It needs to match the network indexed by the Carp instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BATCHER_CARDANO_ENABLED_POOLS"}),": A comma separated list of pool credentials, only users delegating to one of these pools will be able to post to the batcher. The expected format is the public key hash (28 bytes) as a hexadecimal string (56 characters)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,s.jsx)(n.p,{children:"You can extend the ENV class in your game to add your own game variables. Here's an example snippet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'export class GameENV extends ENV {\n  static get LONG_CONFIG(): string {\n    return process.env.LONG_CONFIG || "defaultdefault";\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-config-file",children:"Example config file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'## CHAIN DATA\n# Example: "https://rpc-devnet-cardano-evm.c1.milkomeda.com"\nCHAIN_URI=""\n# Example: "https://explorer-devnet-cardano-evm.c1.milkomeda.com"\nCHAIN_EXPLORER_URI=""\n# Example: "Milkomeda C1 Testnet"\nCHAIN_NAME=""\n# Example: "200101"\nCHAIN_ID=""\n# Note: The shorthand currency name/symbol shown in the user\'s wallet\n# Example: "mtADA"\nCHAIN_CURRENCY_SYMBOL=""\n# Note: The number of decimals of the native/gas asset of the chain\n# Example: "18"\nCHAIN_CURRENCY_DECIMALS=""\n# Note: This is in seconds as a float\n# Example: "2.0"\nBLOCK_TIME=""\n\n## SECURITY\n# Unique Game Security Prefix\n# Example: "MyGame"\nCONCISE_GAME_NAME=""\n\n## CONTRACT DEPLOYMENT\n# Example: "0xA02F7744868945A346Ee6994068F54D039683445"\nCONTRACT_ADDRESS=""\n# Note: This is the block height to start syncing from; usually the contract deployment block height\n# Example: "9000000"\nSTART_BLOCKHEIGHT=""\n\n## Middleware\n# Note: This is the URL which your middleware will use to interact with your game node webserver\n# Example: "http://localhost:3333"\nBACKEND_URI=""\n\n## MISC\n# Note: This is the port your game node webserver will use\n# Example: "3333"\nWEBSERVER_PORT=""\n# Note: This enables running your game node with just the webserver running, meaning no new blocks will be synced.\n# This is primarily useful for development, devops, or testing other edge cases where you want to interact with\n# the game node but not have the game state progress forward.\nSERVER_ONLY_MODE="false"\n\n## DATABASE\nDB_NAME="postgres"\nDB_USER="postgres"\nDB_PW="postgres"\nDB_HOST="localhost"\nDB_PORT="5432"\n\n# NFT\n# Note: This is the address of the native nft sale proxy contract\n# Example: "0xbD9e6bA880d6302A0B93456308a5A998Ffd8eb5E"\nNATIVE_NFT_SALE_PROXY=""\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cardano",children:"Cardano"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'BATCHER_CARDANO_ENABLED_POOLS="095dd39da2d8534f9ddb93759a1931288e5dd79ae04fa5914e157bd6,093de39da2d8534f9ddb93759a1931288e5dd79a404fa5914e157b99"\nBATCHER_CARP_URL=http://127.0.0.1:3000\n\nCARP_URL=http://127.0.0.1:3000\nCARDANO_NETWORK=preview\nCARDANO_CONFIRMATION_DEPTH=10\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);