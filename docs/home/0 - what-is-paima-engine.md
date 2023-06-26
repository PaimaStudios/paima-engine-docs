---
sidebar_position: 1
slug: /
---

# What is Paima Engine?

Paima is a Web3 Engine optimized for games, gamification and autonomous worlds that allows building web3 applications in just days

Notably, its key features are that it
1. Allows building onchain games with web2 skills
2. Protects users even in the case of hacks allowing brands to build web3 applications without worrying
3. Enables cross-wallet gameplay, meaning you can deploy your game to one chain yet have it be playable from across many blockchains
4. Speeds you up to make weekly releases a reality instead of most web3 games which are release-and-pray

# Key technologies that enable this

If you prefer explanations in video form, we have [a high-level summary video](https://www.youtube.com/watch?v=HtvemijxF-0) that explains some of the core benefits of Paima Engine.

## Sovereign rollups

Paima is a framework for creating app-specific layer 2s (L2s) as sovereign rollups. That is to say: apps publish transactions to a blockchain for ordering and data availability, but uses its own code to determine the correct app state

## State machines as Sovereign Rollup L2s

We allow creating these L2s using Web2 skills such as Javascript, Unity or Game Maker by essentially turning state machines into L2s. The key insight is that every mathematical function has 3 key properties:
1. Function inputs
2. Function definition
3. Function outputs

For Paima, the inputs are stored on-chain (which guarantees determinism), the function definition is packaged as an executable for running the app, and the function output is the resulting state machine after applying the transition (which can then be queried through an indexer)

You may sometimes hear this referred to as a "pessimistic rollup" because nodes need to re-execute transactions to check the validity of the chain instead of optimistically being able to assume correctness. This mirrors many ideas of [replicated state machines](https://en.wikipedia.org/wiki/State_machine_replication).

## Data Projections

These state machines can evolve based on L1 updates such as
- New blocks/transactions
- Contracts on the L1 being updated
- Accessing historical on-chain state
- Reading updates from other L2s/rollups deployed on the blockchain
- Passive time and timers \
Or even more complex transition rules.

A great example of this is using the L1 blockchain as the source of randomness, which avoids every game having to re-implement a randomness oracle from scratch.

This is possible as sovereign rollups can project L1 state to the L2. A deep dive into data projections and the full modular gaming rollup stack [can be found in this video.](https://www.youtube.com/watch?v=t9En_PR3NCA) 

## Stateful NFTs and NFT compression

Thanks to projections, we can access the state of L1 NFTs from Paima. We can then interpret the output of the state machine as extra information associated to these NFTs allowing them to evolve over time based on user actions on the L2.

In a sense, you can think of this as an NFT compression protocol. Instead of having to mint a lot of static NFTs on the L1, you can instead mint a minimal set of NFTs on the L1 and then evolve them based off the state of the L2.

## Parallelization to handle over 10k tps per game

Paima state machine L2s are not only significantly more efficient than the EVM, they also supports optionally running state machine updates in parallel (not natively available in the EVM), allowing games and apps to massively scale by, for example, having different PVP matches or different maps in an MMO run in parallel.

## Cross-chain and sequencing with Paima Whirlpool

Natively Paima supports users individually submitting inputs onchain on the specific chain the app is hosted on. However, we also support more efficient setups that also work cross-chain with Paima Whirlpool - a suite of tools to help translate complex interactions to something that integrate seamlessly with Paima Engine.

### L2-level Account Abstraction

Currently there is a large focus on account abstraction which powers smart contract wallets to create systems more flexible than the default public-key wallets created by most cryptocurrencies.

Paima Engine can enable much more flexible account abstraction by providing this functionality at the L2 level when needed, which allows easily validating cryptographic primitives that would not otherwise be available at the L1.

### Based rollup & Sequencer SDKs

L2s created with Paima run as a [based rollup](https://ethresear.ch/t/based-rollups-superpowers-from-l1-sequencing/15016) - that is to say its sequencing is simply done by the DA layer. This means that Paima L2s can be run without a sequencer and fully inherit the decentralization and security of the L1, and do this without the downsides traditionally associated with based rollups thanks to Paima's support for parallelization.

Although apps may not always need sequencers, they can still improve scalability and also help user onboarding. Notably, they can
- Batch transactions together to amortize transaction fees
- Cover the transaction fees for specified users through meta-transactions (ex: free txs for users who hold a specific NFT, who delegate to a stake pool, or who paid on a separate chain).

Thanks to the flexibility of the batcher system, Paima can even support games built without an enshrined sequencer - that is to say environments with multiple sequencers where anybody can choose to run their own decentralized sequencer for the game and monetize it how they want. This give the benefit of sequencing without the centralization.

### Cross-chain NFTs: Projected NFTs

(Coming in the future)
Projects may want to allow users to play games with NFTs hosted on chains separate from where the app was deployed. For example, the game is deployed on Milkomeda, but is playable from NFT living on Ethereum L1.

To enable this, we will enable users to time-lock their NFTs (self-custodial) to project their NFTs directly into the game. Note that thanks to Paima being powered by a Sovereign Rollup architecture, this scheme isn't required for projecting L1 NFTs to L2s (if for example deploying a Paima game as a L3 on top of a L2 like Arbitrum)

You can find more about the idea [in this github repo.](https://github.com/dcSpark/projected-nft-whirlpool/)

## Non-custodial L2s

Most blockchain apps and L2s are custodial in nature. That is to say, to use them you first have to deposit your funds into the app/L2. This is dangerous because it means that if the contract that is custodying user funds gets hacked, all user funds are at risk. 

Paima however, thanks to its projective rollup support, can allow users to keep full custody of their assets while using games & apps written using Paima. That is to say, even if your app gets hacked, user L1 assets are not at risk. This makes Paima a very safe way for brands to deploy onchain applications and brand reputation risk in the case of a hack is minimal.

Additionally, this also helps a lot with user acquisition as empirically most users are not comfortable bridging their NFTs from L1→L2 due to bridge security concerns.

Lastly, it also helps with liquidity & composability, as its means you don't have to fracture assets between L1 and L2.

## Financing of decentralized games

Although Paima allows games to subsidize gameplay, games can also choose to specify that users must pay a fee to submit moves in-game. This allows DAOs to gain funding to drive development of their game or app.

### Data availability layer support

(Coming in the future)
Projects may want the blockchain used as the Data Availability (DA) layer to be different from the primary chain used for their app.

To enable this, Paima will facilitate storing state machine inputs on a DA layer, significantly lowering costs for data-hungry use-cases

## ZK and FHE

(Coming in the future)
We are working with partners to help enable use-cases that require private sections of their state machine

## State Channels

(Coming in the future)
We are working to allow games to easily build state channels to facilitate use-cases like 5v5 fights where a state channel could be opened between participants and settled when the game is over

# Why Sovereign rollups?

There are a few ways of powering scalable applications on-chain. Paima is built using Sovereign Rollups instead of two other common techniques: Optimistic Rollups and ZK Rollups

## Optimistic Rollup disadvantages

This section is written assuming an EVM-based optimistic rollup

1. Apps have to be written in Solidity (if deploying to an existing optimistic rollup like Arbitrum) or be written to be compatible with the fraud-proof system (if an app-chain) which limits flexibility and generally means it's not composable with standard game development tools
1. App performance is bottlenecked by EVM performance. Even implementing parallelization (very common for games) requires a complex sharding system, greatly increasing ecosystem complexity.
1. Limited to EVM's data model (reads and writes are slow)
1. No support for passive time, as you cannot fraud-proof the passage of time. However, passive time is hugely important for games (ex: timers)
1. Requires Solidity boilerplate (not accessible to most game developers)
1. Limited projection and stateful NFT support (optimistic rollups have limited projective rollup support). This limits the user base as many users will not want to bridge their NFTs from L1→L2 to use the app and also hurts liquidity & composability
1. Apps have very long finality as they may get rolled back due to fraud proofs

## ZK Rollup disadvantages

ZK Rollups are primarily a computation solution. Although handling computation is important, a lot of apps (especially games) are more data management platforms (user accounts, encoding how the accounts update over time, etc.). Therefore it often makes more sense to have a sovereign rollup as the base for the game, and only use ZK when required on specific parts of your app (such as associating ZK proofs to stateful NFTs that may represent things like results of a match)

If ZK is enforced or if the whole application needs to be written as one giant ZK circuit, you will run into the following issues:

1. ZK performance is generally slow for large circuits, making it very hard to build complex games
1. ZK platforms typically enforce a global maximum on circuit sizes for zkApps deployed to their platform, which complex games will exceed
1. ZK circuits are currently still hard to write. There are some languages and efforts to simplify this, but they generally still require manual fine-tuning to try and minimize circuit size as much as possible
1. No support for passive time. This may be, depending in the use-case, replaceable by a Verifiable Delay Function, but this is much more complicated and not as powerful

## Sovereign Rollup disadvantages

Unfortunately there is no "free lunch", and so usage of Paima comes with some disadvantages as well.

### Low DeFi support on the L2

You cannot trustlessly bridge from the L2 back to the L1 (that is to say, you cannot put $5 into the game, make some money, then take $10 out). This isn't a requirement to build in-game economies, and this also isn't required for the overwhelming majority of non-DeFi applications and so it's not as problematic as one might think.

If you do want this functionality, there are two key ways to do it:
1. Provide a centralized "redemption" service. For example, if you build a casino with Paima, players would play the game with chips, and then would turn their chips back into money through a centralized redemption service (that possibly does KYC). This is no different than the way the overwhelming majority of casinos work in the real world.
2. Simply don't bridge the asset to the L2. Even if the user funds stay on the L1 (non-custodially), you can project the state into the Paima game, which means you can still build in-game economies. In fact, building it this way is significantly safer as it means user funds are not at risk if your game gets hacked!

### Low compatibility with other L1 dApps by default

Paima gains a lot of its strength from shifting game state management into the L2, which cannot be read from other L1 dApps. We think this is actually a benefit though, as it avoids web3 developers making the single most common mistake in web3 games: overly focusing on compatibility when they do not have a product-market fit yet.

That is to say, Paima allows you to start by building your entire app / game on the L2 and then, once you know users love the experience, you can migrate parts of your game state to the L1 (which requires you to write it in the L1 language like Solidity) and then projecting its state to the L2. This makes bootstrapping your game significantly faster, cheaper, safer, and makes it easier to update. Only focus on compatibility once users love your system and truly desire connecting it with other experiences.

### Trickier cross-game indexing

Unlike games that are built as one giant recursive SNARK circuit, there is no way to succinctly prove a summary of game state. Additionally, unlike optimistic rollups, it's harder to leverage any L1 light client infrastructure to prove game state. This is a consequence of being a pessimistic rollup by default.

This makes it harder to do things like peer-discovery of RPC nodes for a game and build cross-game indexing services like a platform to see all achievements earned across games written with Paima. We do, however, have some standards planned to help alleviate this issue.

# Architecture overview

See [this page](https://paimastudios.com/paima-engine) for more.
