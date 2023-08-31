# Database Snapshotting

Paima will periodically generate local snapshots of the database. This is useful for two main cases:
1. Restoring the database in case a bug causes it to get into a bad state
2. Bootstrapping new deployments of a game quickly

## Snapshots Storage & Scheduling

Paima Engine Runtime will automatically create/use a `snapshots` folder. On startup, the runtime will check the snapshots folder and note the block height when the last snapshot was taken (by reading the file names, which are following the `paima-snapshot-X` standard, where `X` is the block height that the snapshot was taken at). If no snapshot exists, then a snapshot is created at that point.

Snapshots are made based on the latest block height stored in the game's state machine. Notably, snapshots are made every `21600` blocks AFTER the state machine has been updated for that block number.

## Creating The Snapshot

We will be using [pg_dump](https://www.postgresql.org/docs/current/app-pgdump.html) to create the snapshots because "it makes consistent backups even if the database is being used concurrently."

You can find a pretty straightforward set of instructions for initiating the snapshots by following [this guide](https://soshace.com/automated-postgresql-backups-with-nodejs-and-bash/) all the way up until "compressing the archive" (we will want to do compression).

## Snapshot Deletion

Only 2 snapshots should be kept, thus when a new snapshot is created the runtime should check how many snapshots exist in the folder. If there are 3, then the oldest snapshot must be deleted.
