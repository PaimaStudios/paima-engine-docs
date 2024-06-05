---
sidebar_position: 1
---

# Scheduling Events and Timers

Games heavily rely on passive time to trigger events, such as limits on the length of a match or the duration of status effects. Paima supports these through a generic system called `scheduledData` that keeps track of which inputs (that conform to your app's grammar) to trigger at which block height (used instead of timestamps).

Paima will fetch, execute and commit the result of any scheduled data for a block BEFORE it considers any regular input inside the block.

There are three common usages of timers in Paima

## 1. Simple durations

There are two functions for scheduling events
- `createScheduledData(inputData: string, blockHeight: number): SQLUpdate`
- `deleteScheduledData(inputData: string, blockHeight: number | null): SQLUpdate`

Notably, `deleteScheduledData` is very useful to cancel timers. For example, a user may have 5 minutes to make a move otherwise the game will pick a random move for them (often called a `zombie round`). The easiest way to do this is to use `createScheduledData` to schedule a random move (assume the player will not submit a move), and then cancel it if they actually do make a move.

## 2. Synchronizing access to a shared state

See [parallelism](../200-read-write-L2-state/200-parallelism.md)


# Recurrent Timed Events

It is common to require to trigger events with recurring frequency, for example: 
  * Spawn monsters every 5 minutes
  * Cleanup stats once a day
  * Calculate prizes once a week

To do this we can set up a "recursive" scheduled event, meaning that the executing schedule input event schedules a new event in N blocks, and so forth.

You can use this pattern to generate this effect:

1. Add a Migration at 1.SQL 
2. Add a Paima Concise Command
3. Add an STF Function to process and create the next event. 

### 1. Add a Migration at 1.SQL 
Create `db/migrations/1.sql` and add an input to execute the first schedule. 

```
INSERT INTO scheduled_data (block_height, input_data ) VALUES (coalesce((SELECT block_height FROM block_heights order by block_height desc LIMIT 1), 0) + 1, 'hour|0');
```

NOTE: You can replace the value for the "block_height" if you need to run this at a specific time  
This is possible with Blockchains with known block generation time or with Emulated Blocks mode.


### 2. Add a Paima Concise Command
Modify `state-transition/src/stf/v1/parser.ts` (or where you have the Paima Concise Grammar).

Add a command to the list a new command:
```
const myGrammar = `
...
 scheduleHourly          = hour|tick
...
`;

const parserCommands = {
...
    scheduleHourly: {
       tick: PaimaParser.NumberParser(0),
    },
...
}
```

Add your interface: (Generally located at `state-transition/src/stf/v1/types.ts`) 
```
export type ParsedSubmittedInput =
  ...
  | ScheduleHourlyInput
  ...

export interface ScheduleHourlyInput {
  input: 'scheduleHourly';
  tick: number;
}
```

### 3. Add an STF Function to process and create the next event

Capture the input in the STF and process it (Generally in `state-transition/src/stf/v1/index.ts`)

```
export default async function (
  inputData: STFSubmittedData,
  blockHeight: number,
  randomnessGenerator: Prando,
  dbConn: Pool
): Promise<SQLUpdate[]> {
...
  const input = parse(inputData.inputData);
...
  if (input.input === 'scheduleHourly') {
    // Check if sent by the scheduler. Users might post the same input payload.
    if (inputData.realAddress === SCHEDULED_DATA_ADDRESS) {
        const commands: SQLUpdate[] = [];
        console.log('This message appears each hour!');
        console.log('This is tick number', input.tick);
        /* Add your custom logic */
        
        // Calculate the number of blocks in 1 hour. 
        const hourSeconds = 60 * 60;
        const hourBlocks = hourSeconds / ENV.BLOCK_TIME;
        
        commands.push(createScheduledData(
                `hour|${input.tick + 1},
                 blockHeight + hourBlocks
        ));
        
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
