# Create your own Primitive

Although custom Primitives do not always have to be added to Paima (people can just use the [Generic EVM Primitive](./10-evm/999-Generic.md)), adding a Primitive to Paima itself helps both with usability and with type inference.

To add a custom Primitive to Paima, you need to do the following:

- (templates - optional) add your contract to `packages/contracts` if you think this contract should be bundled with Paima (useful for specifications like ERC20, etc. that might be reused often)


- fetcher (`@paima/funnel`): fetches your data from the blockchain
- updater (`@paima/sm`): handles creating updates for the Paima state machine / database when data for the Primitive is found
- indexer (`@paima/db`): stores historical onchain Primitive updates to the database for games to easily access
- config (`@paima/runtime`): handles parsing Primitive config files users will write
- utils (`@paima/utils`): provides utility functions on top your Primitive (ex: get all NFTs owned by a user)

With all these steps complete, your can create a pull request to the [Paima codebase](https://github.com/PaimaStudios/paima-engine/) so users can leverage your Primitive!

## FAQ

### Q: Do I need to write a Primitive for my dApp? I have an API where people can fetch their account state in my dApp already

It depends what you want. If actions in your dApp do no directly tie into the game world, you do not need a Primitive. However, if you want actions in your dApp to be able to affect game state (ex: something like Pokemon where some pokemon only evolves if you trade them on a specific marketplace), then you will need a Primitive so that the game can trustlessly update based on the onchain activity (otherwise, the game would break if your API ever goes down)

### Q: All this seems only for reading state. What about writing state?

Primitives are just about reading state from the chain and evolving the game based off of them. For creating transactions from the game frontend, you can use whatever API you prefer for creating the transaction. Do keep in mind that Paima does come with its own [account abstraction framework](../../../700-multichain-support/2-wallet-layer/1-introduction.mdx) for creating wallets, so if your API for creating transactions is too high-level (ex: if it handles the entire flow from wallet initialization through `window.ethereum` down to creating the transaction) it may be hard to combine with our account abstraction framework.
