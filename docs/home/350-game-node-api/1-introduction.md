# Basic Concepts

Games need to communicate not just with their UI, but also the rest of the web2 world that may want to interact with the game state.

## OpenAPI

To achieve this, Paima Engine comes with support for [OpenAPI](https://www.openapis.org/) so humans can easily interact with the node and can easily generate client libraries for games in a variety of languages. After starting your node, visit `http://localhost:3333/docs/` to see all the endpoints.

To have your game's OpenAPI definition also show up in the docs, simply place an `openapi.json` file inside the `packaged` folder generated by your game, and Paima will automatically detect it.


