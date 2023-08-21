# Block Funnel

Block funnel is the most standard funnel type in Paima. It simply downloads the blocks from the RPC provider for the chain you are deploying to.

Notably, block funnel will do the following:
1. Get the latest block number using `eth_blockNumber` so we know how far we are from the tip, and cache it to `latestAvailableBlockNumber`
1. Fetch a group of `DEFAULT_FUNNEL_GROUP_SIZE` blocks (or less if we're already at the tip)
1. Fetch all the block numbers needed in parallel using `eth_getBlockByNumber`
1. Fetch all the `PaimaGameInteraction` Solidity events for the block range using `eth_getLogs`
1. Fetch all the [Chain Data Extension (CDEs)](./2%20-%20chain-data-extensions.md) for the block range using `eth_getLogs`
