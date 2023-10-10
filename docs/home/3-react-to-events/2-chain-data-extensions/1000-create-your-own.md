# Create your own CDE

Although custom CDEs do not have to be added to Paima (people can just use the [generic CDE](./999-Generic.md), adding a CDE to Paima itself helps both with usability and with type inference.

To add a custom CDE to Paima, you need to do the following:

- (templates - optional) add your contract to `packages/contracts` if you think this contract should be bundled with Paima (useful for specifications like ERC20, etc. that might be reused often)


- fetcher (`@paima/funnel`): fetches your data from the blockchain
- updater (`@paima/sm`): handles creating updates for the Paima state machine / database when data for the CDE is found
- indexer (`@paima/db`): stores historical onchain CDE updates to the database for games to easily access
- config (`@paima/runtime`): handles parsing CDE config files users will write
- utils (`@paima/utils`): provides utility functions on top your CDE (ex: get all NFTs owned by a user)

With all these steps complete, your can create a pull request to the [Paima codebase](https://github.com/PaimaStudios/paima-engine/) so users can leverage your CDE!
