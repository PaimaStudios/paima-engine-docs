# L2 Quirks

L2s often have different definitions for certain fields inside blocks. If you are deploying a game with Paima on top of one of these L2s, you need to understand the meaning of these values to avoid tipfalls. To facilitate these, we've generated a table of the meaning of these values for the most commons L2s.

<!-- ## Optimism

- Block number: 
- Block timestamp: 
- Block hash:  -->

## Arbitrum

- **Block number**: When you get a block, it contains two fields:
    - `number` which is simply an increasing value starting from 0
    - `l1BlockNumber` underlying L1 block
- **Block timestamp**: `block.timestamp` is similar in behavior to L1, but two different blocks in L2 can have the same `block.timestamp`, unlike in L1. This is because Arbitrum One produces about 4 blocks a second. If each block needed a new timestamp it would get way out of sync with the real time because it's denominated in seconds and would need to increase 4 times a second.
- **Block hash**: Arbitrum’s L2 block hash is calculated using the same function as Ethereum, but just over Arbitrum's modified block format created by the sequencer

<!-- curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x75a041b", true],"id":1}' https://arb1.arbitrum.io/rpc -->
