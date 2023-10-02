---
sidebar_position: 1
---

# Wallet Layer

Paima, although being EVM based, uses account abstraction to support wallets from multiple different cryptocurrencies. You can learn how to setup the batchers for account abstraction [here](../1-setup/5-paima-bacher.md).

The wallet layer supports two different modes:
1. Non-batched mode (self-sequencing). This only supports EVM wallets set to the same network as used for the settlement layer of the app. Transaction are submitted directly by the user (and they cover the transaction fees)
2. Batched mode. Users sign data, and transactions are crafted by the batcher. This allows users to use the app with different EVM networks or wallets from different cryptocurrencies.

Notably, Paima supports account abstraction through its batcher (similar to account-abstraction [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) relies on bundlers)

Adding support for a new cryptocurrency to be used as a wallet in Paima requires modifying the following components:
- `@paima/crypto`: add the necessary cryptography
- `@paima/providers`: add wallet standard support
- `@paima/mw-core`: expose the new logic to frontends written with Paima
- `@paima/batcher-address-validator`: add support for the new crypto to the batcher system
