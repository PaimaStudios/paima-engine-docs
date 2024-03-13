"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[874],{3562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(5893),i=n(1151);const r={title:"prc-2\uff1aPaima Hololocker Interface",description:"Interface for projecting ERC721 tokens on EVM networks for usage in Paima",author:"matejos (@matejos)",status:"Draft",created:new Date("2023-11-08T00:00:00.000Z")},a=void 0,s={id:"home/PRCs/prc-2",title:"prc-2\uff1aPaima Hololocker Interface",description:"Interface for projecting ERC721 tokens on EVM networks for usage in Paima",source:"@site/docs/home/20000-PRCs/prc-2.md",sourceDirName:"home/20000-PRCs",slug:"/home/PRCs/prc-2",permalink:"/ja/home/PRCs/prc-2",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/20000-PRCs/prc-2.md",tags:[],version:"current",frontMatter:{title:"prc-2\uff1aPaima Hololocker Interface",description:"Interface for projecting ERC721 tokens on EVM networks for usage in Paima",author:"matejos (@matejos)",status:"Draft",created:"2023-11-08T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"Hardhat task list",permalink:"/ja/home/libraries/evm-contracts/hardhat-tasks"},next:{title:"prc-3\uff1aPaima Inverse Projection Interface",permalink:"/ja/home/PRCs/prc-3"}},c={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Why Unlocking phase / lockTime ?",id:"why-unlocking-phase--locktime-",level:3},{value:"Consistent contract address",id:"consistent-contract-address",level:3},{value:"NFT locking UX",id:"nft-locking-ux",level:3},{value:"Projecting other standards (ERC20, ERC1155...)",id:"projecting-other-standards-erc20-erc1155",level:3},{value:"Reference Implementation",id:"reference-implementation",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Copyright",id:"copyright",level:2}];function l(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"abstract",children:"Abstract"}),"\n",(0,o.jsx)(t.p,{children:"The following standard allows for the implementation of a standard API for projecting ERC721 tokens on EVM networks for usage in Paima applications. This standard provides basic functionality to lock tokens, request to unlock locked tokens, and withdraw tokens after certain time has passed since the unlock request."}),"\n",(0,o.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,o.jsx)(t.p,{children:"Many games, due to being data and computation heavy applications, run on sidechains, L2s and appchains as opposed to popular L1 blockchains. This is problematic because popular NFT collections (which people generally want to use in-game) live on the L1 (a different environment). A common solution to this problem is building an NFT bridge, but bridges not only have a bad reputation for fungible tokens which limits usage, the problem is even worse for NFTs where there is also a philosophical disconnect (if a bridge gets hacked, which is the canonical NFT? The one the hacker stole, or the bridged asset?)"}),"\n",(0,o.jsx)(t.p,{children:"Instead of bridging NFTs, this standard encourages users to project their NFT directly into the game, allowing them to access their asset in-game without having to bridge it to the game chain. Although the main use-case is projecting a single NFT, it supports projecting multiple NFTs at once as well."}),"\n",(0,o.jsx)(t.h2,{id:"specification",children:"Specification"}),"\n",(0,o.jsxs)(t.p,{children:["Every PRC-2 compliant contract must implement the ",(0,o.jsx)(t.code,{children:"HololockerInterface"})," interface:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:"interface HololockerInterface is IERC721Receiver {\n    /// @dev Data structure that must exist for each locked NFT\n    struct LockInfo {\n        /// Timestamp when NFT will be withdrawable, 0 if unlock hasn't been requested\n        uint256 unlockTime;\n        /// Rightful owner of the NFT\n        address owner;\n        /// Account that initiated the lock\n        address operator;\n    }\n\n    /// @dev This emits when NFT is locked, either via lock function or via NFT being sent to this contract\n    /// @param token NFT address\n    /// @param owner Rightful owner of the NFT\n    /// @param tokenId NFT token identifier\n    /// @param operator Address initiating the lock\n    event Lock(address indexed token, address indexed owner, uint256 tokenId, address operator);\n\n    /// @dev This emits when NFT is requested to unlock.\n    /// @param token NFT address\n    /// @param owner Rightful owner of the NFT\n    /// @param tokenId NFT token identifier\n    /// @param operator Address initiating the unlock request\n    /// @param unlockTime Timestamp when NFT will be withdrawable.\n    event Unlock(address indexed token, address indexed owner, uint256 tokenId, address operator, uint256 unlockTime);\n\n    /// @dev This emits when NFT is withdrawn.\n    /// @param token NFT address\n    /// @param owner Rightful owner of the NFT\n    /// @param tokenId NFT token identifier\n    /// @param operator Address initiating the withdraw\n    event Withdraw(address indexed token, address indexed owner, uint256 tokenId, address operator);\n\n    /// @dev This emits when lockTime value changes.\n    /// @param newValue New lockTime value\n    event LockTimeUpdate(uint256 newValue);\n\n    /// @notice Returns `LockInfo` for specified `token => tokenId`\n    /// @param token NFT tokens contract address\n    /// @param tokenId NFT tokens identifier\n    /// @return The `LockInfo` struct information\n    function getLockInfo(address token, uint256 tokenId) external view returns (LockInfo memory);\n\n    /// @notice Initiates a lock for one or more NFTs\n    /// @dev Reverts if `tokens` length is not equal to `tokenIds` length.\n    /// Stores a `LockInfo` struct `{owner: owner, operator: msg.sender, unlockTime: 0}` for each `token => tokenId`\n    /// Emits `Lock` event.\n    /// Transfers each token:tokenId to this contract.\n    /// @param tokens NFT tokens contract addresses\n    /// @param tokenIds NFT tokens identifiers\n    /// @param owner NFT tokens owner\n    function lock(address[] memory tokens, uint256[] memory tokenIds, address owner) external;\n\n    /// @notice Requests unlock for one or more NFTs\n    /// @dev Reverts if `tokens` length is not equal to `tokenIds` length.\n    /// Reverts if msg.sender is neither `owner` nor `operator` of LockInfo struct for\n    /// any of the input tokens.\n    /// Reverts if `unlockTime` of LockInfo struct for any of the input tokens is not 0.\n    /// Modifies a `LockInfo` struct `{unlockTime: block.timestamp + lockTime}` for each `token => tokenId`\n    /// Emits `Unlock` event.\n    /// @param tokens NFT tokens contract addresses\n    /// @param tokenIds NFT tokens identifiers\n    function requestUnlock(address[] memory tokens, uint256[] memory tokenIds) external;\n\n    /// @notice Withdraws one or more NFTs to their rightful owner\n    /// @dev Reverts if `tokens` length is not equal to `tokenIds` length.\n    /// Reverts if msg.sender is neither `owner` nor `operator` of LockInfo struct for\n    /// any of the input tokens.\n    /// Reverts if `unlockTime` of LockInfo struct for any of the input tokens is\n    /// either 0 or greater than block.timestamp.\n    /// Modifies a `LockInfo` struct `{unlockTime: block.timestamp + lockTime}` for each `token => tokenId`\n    /// Emits `Unlock` event.\n    /// @param tokens NFT tokens contract addresses\n    /// @param tokenIds NFT tokens identifiers\n    function withdraw(address[] memory tokens, uint256[] memory tokenIds) external;\n\n    /// @notice Returns `lockTime`, which is the value that gets added to block.timestamp and saved as unlockTime\n    /// in the requestUnlock function.\n    /// @return The `lockTime` variable\n    function getLockTime() external view returns (uint256);\n\n    /// @notice Changes the `lockTime` variable.\n    /// @dev This function should be protected with appropriate access control mechanisms.\n    /// The new value should be checked against a sane upper limit constant, which if exceeded,\n    /// should cause a revert.\n    /// Emits `LockTimeUpdate` event.\n    /// @param newLockTime New lockTime value\n    function setLockTime(uint256 newLockTime) external;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["A Hololocker implementation MUST implement the IERC721Receiver interface to be able to receive ERC721 assets via ",(0,o.jsx)(t.code,{children:"IERC721.safeTransferFrom"}),".\nIt MUST initialize a lock similarly as in the ",(0,o.jsx)(t.code,{children:"lock"})," function, and it MUST emit the ",(0,o.jsx)(t.code,{children:"Lock"})," event"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:'interface IERC721Receiver {\n    /// @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n    ///  by `operator` from `from`, this function is called.\n    ///  It must return its Solidity selector to confirm the token transfer.\n    ///  If any other value is returned or the interface is not implemented by the recipient, the transfer will be\n    ///  reverted.\n    ///  The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\n    ///  Note: the contract address is always the message sender.\n    /// @param _operator The address which called `safeTransferFrom` function\n    /// @param _from The address which previously owned the token\n    /// @param _tokenId The NFT identifier which is being transferred\n    /// @param _data Additional data with no specified format\n    /// @return `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`\n    ///  unless throwing\n    function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4);\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"rationale",children:"Rationale"}),"\n",(0,o.jsxs)(t.p,{children:["The Hololocker contract is in its core a NFT staking contract. While there have been attempts at EIPs on this matter, such as ",(0,o.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-4987",children:"EIP-4987"}),", none gained enough traction and approval to be finalized.\nThis proposal therefore proposes a standard for light-weight implementation of such mechanism."]}),"\n",(0,o.jsx)(t.p,{children:"The main functions accept an array of token addresses and token IDs to be able to accommodate manipulations with multiple NFTs in one transaction, to save on transaction costs."}),"\n",(0,o.jsxs)(t.p,{children:["The standard user interaction flow is: Lock -> Request Unlock -> (after ",(0,o.jsx)(t.code,{children:"lockTime"})," has passed from the unlock request) Withdraw"]}),"\n",(0,o.jsx)(t.h3,{id:"why-unlocking-phase--locktime-",children:"Why Unlocking phase / lockTime ?"}),"\n",(0,o.jsxs)(t.p,{children:['If we did not have a special "Unlocking" state that requires users to wait for finality on the L1 before withdrawing their NFT, it could cause a situation where the same NFT is used in two places at once.\nTherefore, there must be a period of Unlocking state, initiated by the request for unlock and lasting the amount of seconds specified in the ',(0,o.jsx)(t.code,{children:"lockTime"})," variable. This ",(0,o.jsx)(t.code,{children:"lockTime"})," delay should reflect the finality period of the chain. Only after this delay has passed, the NFT can be withdrawn."]}),"\n",(0,o.jsx)(t.h3,{id:"consistent-contract-address",children:"Consistent contract address"}),"\n",(0,o.jsxs)(t.p,{children:["To facilitate a more reliable experience for users, the Hololocker contract should be deployed to the same address across all EVM chains. This can be done by using a deployment proxy. Our reference implementation does this by specifying a salt ",(0,o.jsx)(t.code,{children:"bytes32(uint256(1))"})," in the ",(0,o.jsx)(t.a,{href:"https://github.com/dcSpark/projected-nft-whirlpool/blob/8b0d0367139eb9a43be94edff34a656258e25793/evm/script/Deploy.s.sol",children:"Foundry deployment script"}),".",(0,o.jsx)(t.br,{}),"\n","Hololocker is currently deployed at ",(0,o.jsx)(t.code,{children:"0x963ba25745aEE135EdCFC2d992D5A939d42738B6"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"nft-locking-ux",children:"NFT locking UX"}),"\n",(0,o.jsxs)(t.p,{children:['Upon locking an NFT in an application that integrates the Hololocker, it might happen that users will get confused as to where did their NFTs go. An option to mint a sort of a "receipt NFT" in exchange for the locked NFT was thought of, but it does not sufficiently solve the inconvenience and would greatly increase the complexity and transactional costs. It would roughly double the gas cost of ',(0,o.jsx)(t.code,{children:"lock"})," operation (85k gas units -> 161k gas units) and increase the cost of ",(0,o.jsx)(t.code,{children:"withdraw"})," operation by 60% (7564 gas units -> 12125 gas units). Therefore, this approach is not recommended."]}),"\n",(0,o.jsx)(t.h3,{id:"projecting-other-standards-erc20-erc1155",children:"Projecting other standards (ERC20, ERC1155...)"}),"\n",(0,o.jsxs)(t.p,{children:["Should there be a need for supporting other token standards than ERC721, this interface can be appropriately modified to accommodate for the differences between the standards' methods of token identification. For example: To support ERC20, instead of dealing with token IDs, you'd be dealing with token amounts. That would mean changing the ",(0,o.jsx)(t.code,{children:"LockInfo"})," struct, the events, and the function parameters slightly."]}),"\n",(0,o.jsx)(t.h2,{id:"reference-implementation",children:"Reference Implementation"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/dcSpark/projected-nft-whirlpool/blob/8b0d0367139eb9a43be94edff34a656258e25793/evm/src/Hololocker.sol",children:"https://github.com/dcSpark/projected-nft-whirlpool/blob/8b0d0367139eb9a43be94edff34a656258e25793/evm/src/Hololocker.sol"})}),"\n",(0,o.jsx)(t.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,o.jsxs)(t.p,{children:["It is useful to note, that since NFTs can be locked also via transferring them to Hololocker with ",(0,o.jsx)(t.code,{children:"ERC721.safeTransferFrom"})," function, it is imperative to instruct potential developers integrating Hololocker in their applications that they MUST use the ",(0,o.jsx)(t.code,{children:"safe"})," variant of the transfer function. Using basic ",(0,o.jsx)(t.code,{children:"ERC721.transferFrom"})," function to transfer NFT to the Hololocker contract will lead to that NFT being permanently stuck in the contract, since in that case there is no mechanism to be able to store the previous owner of the NFT. This is a caveat of the ERC721 standard."]}),"\n",(0,o.jsx)(t.h2,{id:"copyright",children:"Copyright"}),"\n",(0,o.jsxs)(t.p,{children:["Copyright and related rights waived via ",(0,o.jsx)(t.a,{href:"https://raw.githubusercontent.com/PaimaStudios/PRC/main/LICENSE.md",children:"CC0"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var o=n(7294);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);