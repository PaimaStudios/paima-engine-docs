# Data Migrations

Data Migrations allow game developers to add data to the database e.g., World Setup, NPC, Items, and other system tables.  

*IMPORTANT*: You should never add data to the database manually. It should be done only through state-transitions and data migrations.

Data Migrations are applied at a specific block-height. The file name indicates the `OFFSET` from the `START_BLOCKHEIGHT` (defined in the .env file - see [here](../1-setup/4-environment-config-values.md)).

File structure:

```
root_folder
   | --- paima-engine-{linux|macos}
   | --- packaged
             | --- endpoints.cjs
             | --- gameCode.cjs
             | --- migrations
                          | --- 1000.sql
                          | --- 5500.sql
``` 

`1000.sql` will be applied at block-height `START_BLOCKHEIGHT + 1000`.  
`5500.sql` will be applied at block-height `START_BLOCKHEIGHT + 5500`.  
Both will be applied before any other inputs are processed for that block-height.

The *.sql files are PGSQL scripts. SQL scripts are automatically ran as transactions, if they fail the block-process-loop will stop and the script must be fixed and will be reapplied.

`1000.sql` example:
```sql
INSERT INTO items (name) VALUES ('potion') ;
INSERT INTO items (name) VALUES ('book') ;
```