"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[6932],{3591:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(5893),s=i(1151);const a={},l="Mina funnel",o={id:"home/react-to-events/funnel-types/mina-funnel",title:"Mina funnel",description:"Configuration",source:"@site/docs/home/300-react-to-events/3-funnel-types/600-mina-funnel.mdx",sourceDirName:"home/300-react-to-events/3-funnel-types",slug:"/home/react-to-events/funnel-types/mina-funnel",permalink:"/home/react-to-events/funnel-types/mina-funnel",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/300-react-to-events/3-funnel-types/600-mina-funnel.mdx",tags:[],version:"current",sidebarPosition:600,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parallel EVM funnel",permalink:"/home/react-to-events/funnel-types/parallel-evm-funnel"},next:{title:"Parallel Avail funnel",permalink:"/home/react-to-events/funnel-types/parallel-avail-funnel"}},r={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Conceptually",id:"conceptually",level:2},{value:"Presync",id:"presync",level:3},{value:"Finalizing blocks",id:"finalizing-blocks",level:2},{value:"Indexer Database",id:"indexer-database",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"mina-funnel",children:"Mina funnel"}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The Mina funnel requires access to historical chain data which is acquired\nthrough an ",(0,t.jsx)(n.a,{href:"https://docs.minaprotocol.com/node-operators/archive-node",children:"archive\nnode"}),". A connection\nto the database is required."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'Mina:\n  type: mina\n  archiveConnectionString: "postgresql://postgres:postgres@localhost:5432/archive"\n  confirmationDepth: 15\n  delay: 3600\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delay"})," is in seconds."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"confirmationDepth"})," is in number of blocks. If not provided then the archive's\nnode configuration is used (blocks with a chain_status of ",(0,t.jsx)(n.em,{children:"canonical"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conceptually",children:"Conceptually"}),"\n",(0,t.jsx)(n.p,{children:"This funnel has the following steps in the readData function:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Fetch blocks & timestamps from the underlying funnel. This can be either a\nfunnel for a single chain, like the ",(0,t.jsx)(n.a,{href:"/home/react-to-events/funnel-types/block-funnel",children:"block funnel"}),", or it\ncan be a collection of wrapped funnels involving multiple networks."]}),"\n",(0,t.jsxs)(n.li,{children:["Fetch the latest canonical Mina block timestamp. If ",(0,t.jsx)(n.code,{children:"confirmationDepth"})," has a\nvalue in the configuration, this is done by getting the block at that particular\nheight. Otherwise this is done by querying the ",(0,t.jsx)(n.code,{children:"blocks"})," table to get the latest\nblock which has ",(0,t.jsx)(n.code,{children:"canonical"})," status. In this case the block confirmation\nparameters are defined by the archive's configuration."]}),"\n",(0,t.jsx)(n.li,{children:"Query the database for events and actions in a certain timestamp range. The\nupper bound of this timestamp range is defined by the blocks fetched at step 1.\nThe lower bound is the upper bound on the previous round."}),"\n",(0,t.jsx)(n.li,{children:"Merge the primitives with the underlying funnel."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"presync",children:"Presync"}),"\n",(0,t.jsxs)(n.p,{children:["The presync phase finishes after indexing all the blocks with a timestamp\nstrictly lower than ",(0,t.jsx)(n.code,{children:"START_BLOCK_HEIGHT - delay"}),".  Each primitive is paginated\nindividually, and progress is tracked in the ",(0,t.jsx)(n.code,{children:"cde_tracking_cursor_pagination"}),"\ntable. The presync finishes when there are no more events in the range for any\nof the configured extensions."]}),"\n",(0,t.jsx)(n.h2,{id:"finalizing-blocks",children:"Finalizing blocks"}),"\n",(0,t.jsxs)(n.p,{children:["Since events parsed by the state transition are final, we need to be sure that\nwe have processed all the Mina events that are associated with a certain block\nheight before supplying those to the state transition. To guarantee this, the\nMina funnel will wait for the timestamp of the latest ",(0,t.jsx)(n.code,{children:"canonical"})," block to be\ngreater or equal than the timestamp of the target block.  This is necessary\nbecause otherwise there is no guarantee that the needed blocks are already\npropagated to the archive node, or in case there is a re-org."]}),"\n",(0,t.jsxs)(n.p,{children:["Internally this is done by querying the ",(0,t.jsx)(n.code,{children:"blocks"})," table for the latest block with\na status of ",(0,t.jsx)(n.code,{children:"canonical"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"indexer-database",children:"Indexer Database"}),"\n",(0,t.jsx)(n.p,{children:"This funnel requires no change to the Mina archive node database schema. The following tables are used to\nretrieve the necessary information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"account_identifiers"}),"\n",(0,t.jsx)(n.li,{children:"accounts_accessed"}),"\n",(0,t.jsx)(n.li,{children:"blocks"}),"\n",(0,t.jsx)(n.li,{children:"blocks_zkapp_commands"}),"\n",(0,t.jsx)(n.li,{children:"zkapp_account_update"}),"\n",(0,t.jsx)(n.li,{children:"zkapp_account_update_body"}),"\n",(0,t.jsx)(n.li,{children:"zkapp_commands"}),"\n",(0,t.jsx)(n.li,{children:"zkapp_events"}),"\n",(0,t.jsx)(n.li,{children:"zkapp_field"}),"\n",(0,t.jsx)(n.li,{children:"zkapp_field_array"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Usage is similar to the one used in ",(0,t.jsx)(n.a,{href:"https://github.com/o1-labs/Archive-Node-API",children:"Archive-Node-Api"})," except for the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"})," are filtered by the ",(0,t.jsx)(n.code,{children:"timestamp"})," column when needed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"zkapp_commands"})," is filtered by ",(0,t.jsx)(n.code,{children:"hash"})," to paginate the results during presync."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blocks"})," is used to find the the latest finalized block, which is not a\nuse-case supported by Archive-Node-Api."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var t=i(7294);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);