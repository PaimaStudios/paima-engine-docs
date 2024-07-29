# Avail block funnel

An analogous to the [evm block funnel](./300-block-funnel.md) but for Avail.

This funnel will do the following:

1. Get the latest block number with verified data availability from the Avail light client through the `v2/status` endpoint. [Reference](https://docs.availproject.org/docs/operate-a-node/run-a-light-client/light-client-api-reference#v2status).
2. Fetch a group of `funnelBlockGroupSize` headers (or less if we're already at the tip).
3. Fetch all the submitted data from the Avail light client through the `v2/blocks/{block_number}/data` endpoint ([reference](https://docs.availproject.org/docs/operate-a-node/run-a-light-client/light-client-api-reference#v2blocksblock_numberdatafieldsdataextrinsic)). This means full blocks are never processed, because the light client can filter by app id.
4. Use `TextDecoder` to read the binary input as text, and continue with the Paima concise format processing.

## Configuration

```yaml
Avail:
  type: avail-main
  lightClient: 'http://localhost:7007'
  rpc: ws://127.0.0.1:9944
  funnelBlockGroupSize: 100
  presyncStepSize: 1000
  genesisHash: "0xdd60847daa1119ecc9bdd006b140087737ac03d260ce110ecd7cb33cf721be35"
```