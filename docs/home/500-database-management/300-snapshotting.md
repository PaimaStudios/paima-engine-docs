# Database Snapshotting

Paima will periodically generate local snapshots of the database. This is useful for two main cases:
1. Restoring the database in case a bug causes it to get into a bad state
2. Bootstrapping new deployments of a game quickly

## Snapshots Storage & Scheduling

Paima Engine Runtime will automatically create/use a `snapshots` folder. On startup, the runtime will check the snapshots folder and note the block height when the last snapshot was taken (by reading the file names, which are following the `paima-snapshot-X` standard, where `X` is the block height that the snapshot was taken at). If no snapshot exists, then a snapshot is created at that point.

Snapshots are made based on the latest block height stored in the game's state machine. Notably, snapshots are made every `21600` blocks AFTER the state machine has been updated for that block number.

## Snapshot Creation

Paima uses [pg_dump](https://www.postgresql.org/docs/current/app-pgdump.html) to create the snapshots (typically included in the postgres package of your OS)because it makes consistent backups even if the database is being used concurrently.

If `pg_dump` is not available, then when you start your game node an error will be printed in the terminal denoting of such, however the game node will still function perfectly fine nonetheless (and will simply skip taking snapshots).

Paima does not do any compression of the dump by itself, so if you want to compress the archive you will need to do that yourself.

## Snapshot Deletion

Paima will only keep 2 snapshots of your node. That is to say, when a new snapshot is created, the runtime checks how many snapshots exist in the folder. If there are 3, then the oldest snapshot is deleted.
