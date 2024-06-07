---
sidebar_position: 1
---

# Scheduling Events and Timers

Games heavily rely on passive time to trigger events, such as limits on the length of a match or the duration of status effects. Paima supports these through a generic system called `scheduledData` that keeps track of which inputs (that conform to your app's grammar) to trigger at which block height (used instead of timestamps).

Paima will fetch, execute and commit the result of any scheduled data for a block BEFORE it considers any regular input inside the block.

There are three common usages of timers in Paima

## 1. Durations

There are two functions for scheduling events
- `createScheduledData(inputData: string, blockHeight: number): SQLUpdate`
- `deleteScheduledData(inputData: string, blockHeight: number | null): SQLUpdate`

These can be used to schedule an event that happens in 5 minutes (ex: a potion whose status wears off eventually)

### Time limits

Some games leverage time limits to perform an action (ex: 5 minutes to make a move, otherwise your turn is skipped)

Handling this kind of use-case typically involve the following steps:
1. When their turn starts, create a timer (`createScheduledData`) that skips their turn in 5 minutes
2. If they make a move, use `deleteScheduledData` to delete their timer (and process their move)
3. If they don't make a move, the timer from (1) will trigger so that your state machine can skip their turn (or any other cleanup required)

We call this kind of state transition a `zombie` (or `zombie round`) as it's usually used to process a move if the player is no longer alive (ex: they left their keyboard so the timer expires and their turn is skipped).

### Globally Recurring events

It is common to require to recurring events with no clear start trigger. For example: 
  * Spawn monsters every 5 minutes
  * Cleanup stats once a day
  * Calculate prizes once a week

To do this we can set up a "recursive" scheduled event
1. Specify the initial trigger as a SQL migration
2. Have every trigger schedule the next trigger

<details>
    <summary>Example</summary>
  
1. Add a Migration at 1.SQL 

Create `db/migrations/1.sql` and add an input to execute the first schedule. 

```SQL wordWrap=true
INSERT INTO scheduled_data (block_height, input_data )
VALUES (
  -- get the latest block + 1
  coalesce((
    SELECT block_height
    FROM block_heights
    ORDER BY block_height DESC
    LIMIT 1
  ), 0) + 1,
  'hour|0'
);
```

NOTE: You can replace the value for the `block_height` if you need to run this at a specific time  
This is possible with blockchains with known block generation time or with [Emulated Blocks mode](./3-funnel-types/400-stable-tick-rate-funnel.mdx).


2. Add a Paima Concise Command
Modify `state-transition/src/stf/v1/parser.ts` (or where you have the Paima Concise Grammar).

Add a command to the list a new command:
```ts
const myGrammar = `
// highlight-next-line
 scheduleHourly          = hour|tick
`;

const parserCommands = {
  // highlight-next-line
    scheduleHourly: {
       tick: PaimaParser.NumberParser(0),
    },
}
```

Add your interface: (Generally located at `state-transition/src/stf/v1/types.ts`) 
```ts
export type ParsedSubmittedInput =
  | ScheduleHourlyInput

export interface ScheduleHourlyInput {
  input: 'scheduleHourly';
  tick: number;
}
```

3. Add an STF Function to process and create the next event

Capture the input in the STF and process it (Generally in `state-transition/src/stf/v1/index.ts`)

```ts
export default async function (
  inputData: STFSubmittedData,
  blockHeight: number,
  randomnessGenerator: Prando,
  dbConn: Pool
): Promise<SQLUpdate[]> {

  const input = parse(inputData.inputData);

  // highlight-start
  if (input.input === 'scheduleHourly') {
    // Check if sent by the scheduler. Users might post the same input payload.
    if (inputData.realAddress === SCHEDULED_DATA_ADDRESS) {
  // highlight-end
        const commands: SQLUpdate[] = [];
        console.log('This message appears each hour!');
        console.log('This is tick number', input.tick);
        /* Add your custom logic */
        
        // Calculate the number of blocks in 1 hour. 
        const hourSeconds = 60 * 60;
        const hourBlocks = hourSeconds / ENV.BLOCK_TIME;
        
        // highlight-start
        commands.push(createScheduledData(
                `hour|${input.tick + 1}`,
                 blockHeight + hourBlocks
        ));
        // highlight-end
        
        return commands;
    }
  }
  ...
}
```

You will see in the console:
```
This message appears each hour!
This is tick number 0
This message appears each hour!
This is tick number 1
This message appears each hour!
This is tick number 2
...
```

IMPORTANT: It is very important that the scheduler does NOT return an SQL statement that might be rejected (e.g., duplicated primary key) if there is any invalid SQL command the entire list of commands is discarded, and the recursive schedule will not be inserted.
</details>


## 2. Synchronizing access to a shared state

See [parallelism](../200-read-write-L2-state/200-parallelism.md)

## 3. Primitives

Event found by [primitives](./primitive-catalogue/introduction#accessing-the-collected-data) are scheduled to occur when the rollup's state machine reaches the block height in which they're found.
