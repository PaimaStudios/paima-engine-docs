# Mina funnel

## Configuration

The Mina funnel requires access to historical chain data which is acquired
through an [archive
node](https://docs.minaprotocol.com/node-operators/archive-node). A connection
to the database is required. 

`confirmationDepth` is expected be the same as the `k` setting in the underlying
network/archive. Likewise with `slotDuration`. 

```yaml
Mina:
  type: mina
  archiveConnectionString: "postgresql://postgres:postgres@localhost:5432/archive"
  confirmationDepth: 30,
  slotDuration: 20,
```

- `slotDuration` is in seconds.
- `confirmationDepth` is in number of blocks. 

Mina events are delayed by `slotDuration * confirmationDepth` seconds.

## Conceptually

This funnel has the following steps in the readData function:

1. Fetch blocks & timestamps from the underlying funnel. This can be either a funnel for a single chain, like the [block funnel](300-block-funnel.md), or it can be a collection of wrapped funnels involving multiple networks.
2. Fetch the confirmed mina block timestamp. This is done by querying the `blocks` table to get the latest block which has canonical status. This means that the block confirmation parameters are defined by the archive node configuration. 
4. Query the database for events and actions in a certain timestamp range. The
upper bound of this timestamp range is defined by the blocks fetched at step 1. The lower bound is the upper bound on the previous round.
5. Merge the primitives with the underlying funnel.

### Finality

The merging of events with the underlying funnel works similarly to the
[parallel evm funnel](500-parallel-evm-funnel.mdx). The most important
difference is that timestamps from the _main_ chain get subtracted
`confirmationDepth * slotDuration` seconds. This means the events from the Mina
chain are delayed by this amount of time also.

### Finalizing blocks

Since events parsed by the state transition are final, we need to be sure that
we have processed all the Mina events that are associated with a certain block
height before supplying those the events to the state transition. To do this,
the Mina funnel will wait for the timestamp of the latest `canonical` block to
be greater or equal than the timestamp of the block data is getting merged into.
This is necessary because otherwise there is no guarantee that the needed blocks
are already propagated to the archive node, or in case there is a re-org.

Internally this is done by querying the `blocks` table for the latest block with a status
of `canonical`.  

## Database

The following tables are used to retrieve the necessary information:

- account_identifiers
- accounts_accessed
- blocks
- blocks_zkapp_commands
- zkapp_account_update
- zkapp_account_update_body
- zkapp_commands
- zkapp_events
- zkapp_field
- zkapp_field_array

Usage is similar to the one used in [Archive-Node-Api](https://github.com/o1-labs/Archive-Node-API) except for the following:

- `blocks` are filtered by the `timestamp` column when needed.
- only blocks with `canonical` status are considered for anything.
- `zkapp_commands` is filtered by `hash` to paginate the results during presync.
- `blocks` is used to find the genesis timestamp and the latest finalized block.