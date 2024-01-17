# Introduction

Although typically when you build an application with Paima all information lives onchain, querying data that lives on the blockchain is not always efficient. To enable more efficient management of this data, Paima uses [PostgresDB](https://www.postgresql.org/) for database management. This is a very common practice not only done by many dApps, but L1 chains themselves as well (for example, the Geth client for Ethereum uses LevelDB).

Of note, unlike in the Web2/2.5 world, these snapshots are _not vital_. You are building a trustless Web3 game using Paima Engine, which means that even if your entire DB gets corrupted or deleted, a brand new game node can be synced from scratch by just reading from the blockchain. These snapshots are simply a quality-of-life enhancement, as they allow you to deploy new game nodes much faster without having to resync from scratch.

Postgres is great because it is a very mature platform most of the core functionality we need, and has a very large community of plugins and tools for a variety of platforms.
