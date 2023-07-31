---
sidebar_position: 2
---

# Sequential State Identifier

By default, updates to Paima state may be applied in parallel. This is powerful as it allows different matches played by different players to be run in parallel. However, moves by players in the same lobby need to be made sequential.

`|*` denotes that the value following it is a unique state identifier for some sub-section of global game state which will **never** be mutated by any other game input unless it also carries the same state identifier/id, and makes inputs that use this identifier run sequentially (yet still in parallel to inputs that do not specify it)

Currently, only one `|*` is allowed in a game input for the time being. We might try to make the state identifier more expressive by being able to chain them via the equivalent of `AND`s, but for the time being we will skip over this.

In other words, every game input which is trying to mutate some state, such as a lobby/match demarcated by it's unique lobby ID, must specify that it intends to do so using the state identifier, thus allowing the Paima Engine Runtime to know that they will be mutating the same piece of global state.

From there, Paima Engine sorts all scheduled and user submitted game input into a series of queues, where any game inputs which have the same state identifier id get put together in the same queue and run one-by-one (though in parallel to all of the other queues). Any game inputs which aren't marked with a state identifier are put into their own "1 element queue" and run in parallel as well.

## Example

Suppose you have the following grammar
```typescript
const myGrammar = `
createLobby         = c|lobbyID
joinLobby           = j|*lobbyID
submitMove          = s|*lobbyID|move
`;
```

1. When creating a lobby, use `|` as-is (not `|*`). This is because creating a lobby mutates no existing state, but in fact creates brand new state that is completely unique and unrelated to the rest of the game global state.
2. When joining the lobby, use `*lobbyID`. The parallel notation will allow your STF to process join lobby requests sequentially so that lobby joining is first-come-first-serve up to the max participants in a lobby for your game
3. When submitting a move inside the lobby for the game, use `*lobbyID` so that moves in the game are ordered first-come-first-serve.

### Applying Global Side Effects

Besides simply updating the game input strings with a state identifier, there is one final and important consideration which must be made when building game state machines which are going to be run in parallel mode via the runtime. Any time that any of these parallel executed computations produce global side effects, we inherently have a problem of how we are going to apply those back in global state such that we arrive at a deterministically resolved final state.

For example, maybe a game needs to update each user's wins/losses/ties record. We could theoretically just hope that a player never finishes two matches at the same block height, or if they do, hope when executing in parallel they update the same state luckily one-by-one, rather than both trying to apply updates and having one being overwritten by the other, but this is inherently unprincipled and unworkable.

As such, we need a new approach for how we can apply global side effects in a principled manner. Lucky for us, we already have a great piece of functionality implemented in Paima Engine exactly suited for this job: scheduled inputs.

Using scheduled inputs, whenever a global side effect needs to be applied, we simply create a new scheduled input for `[current block height] + 1` (see [passive events](../3%20-%20Reacting%20to%20events/1%20-%20scheduled-events.md) to learn more) and ensure that it also carries a state identifier inside. Thus in our grammar, we can simply define a new type of valid (scheduled) game input which specifies that the given user's stats need to be updated with the resulting win/tie/loss:

```typescript
const myGrammar = `
userScheduledData    = u|*user|result
`;

const userScheduledData: ParserRecord<UserStats> = {
  user: PaimaParser.WalletAddress(),
  result: PaimaParser.EnumParser(['w', 'l']),
};
```

All user stat updates will carry the state identifier (which in this case is the user's address, not a lobby ID), thus queuing them all back-to-back, and thereby allowing said side effects to be safely and deterministically applied and everything to work without issues.
