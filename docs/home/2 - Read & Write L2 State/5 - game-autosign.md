---
sidebar_position: 5
---

# Auto-signing for apps

Requiring users to manually sign every transaction for every game is a terrible user experience not just because it breaks immersion constantly, but because it's incompatible with games where users play with a controller (which is how many users play games)

However, auto-signing can be dangerous. A game could steal all funds in your wallet without you explicitly approving it (either because the game was malicious, or because the game was hacked)

To tackle this, Paima introduces three different auto-sign methods that all guarantee safety of the user's L1 funds

## 1. Data-only auto-signing

For apps that run [Paima batchers](../1%20-%20Setting%20Up%20Your%20Environment/5%20-%20paima-bacher.md) or similar systems (meta-transactions, account-abstraction or sequencers), signing data is often enough for the game 

Concrete examples of cases where this is sufficient:
- Blockchains with zero transaction fees (Immutable, Oasys, etc.) where you can simply have somebody submit the transaction for you
- Systems where users pay to have free transactions (ex: deposit $5 into a contract, but have to "top up" their balance occasionally).

### Namespaced auto-sign

For these cases, we just need to ensure that a message signed for one game cannot be reused for any other application (be it an L1 transaction or for a different game). Paima is great for this because every game/app gets its own L2 with its own data format, so messages are already unlikely to be reusable for other purposes

However, what if two apps use the same encoding for creating lobbies? It's very possible (especially if many projects for the same template), and so we may care to differentiate these. 

To tackle this, Paima forces all games that want to use auto-sign to specify a `security namespace` that guarantees signatures for their app are different than every other app. Notably, we recommend the following options for prefixes:
1. The contract address
2. A unique name. This is useful if your platform consists of multiple apps that you want to share the same auto-sign namespace

The format of these namespaces is `|namespace|restOfInputData`. Since concise encoding typically never starts with a `|`, this can easily be detected as the security prefix.

#### Technical details

Paima Engine will not actually store these prefixes on-chain. Rather, it generates the signature `sign(|namespace|restOfInputData)`, but only posts `restOfInputData` onchain. This is because the app knows its own prefix, so it can implicitly add the prefix to `restOfInputData` when making sure the signature matches. This means even if a long string or contract address is used for the security namespace, it does not lead to chain bloat.

### Wallets that plan to support this format

- Metamask through the [Paima Session Snap](https://github.com/PaimaStudios/paima-session-snap)
- Flint Wallet ([link](https://flint-wallet.com/)) (for Milkomeda C1 only)

## 2. Game-specific auto-signing transactions

For games that do not have a batcher, or in cases where users prefer submitting transactions themselves, we still want to enable safe auto-sign behavior.

However, in this case, adding the security namespace would add a lot of useless data on-chain, so instead wallets will auto-sign and transaction where the `to` field is the contract hash of the game's L2 contract.

### Wallets that plan to support this format

- Metamask through the [Paima Session Snap](https://github.com/PaimaStudios/paima-session-snap)

## 3. Full auto-signing for all transactions

For some apps, simply auto-signing data may not be enough. Instead, to safely sign transactions for the app, you want some kind of session key for the game.

To do this, we plan to generate a deterministic session key for each game.

Wallets that plan to support this format:
- Metamask through the [Paima Session Snap](https://github.com/PaimaStudios/paima-session-snap)
