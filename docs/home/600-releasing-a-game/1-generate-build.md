# Deploying Your Game Node

If you wish to deploy your game on a server/move into a production environment, the following files are all that is needed for Paima Engine to run your game node:

- `packaged/gameCode.cjs` (packed game code)
- `packaged/endpoints.cjs` (packed webserver code)
- `.env.*` (Your game node config)
- `paima-engine` (The Paima Engine executable)

In other words, you do not require your unpacked game code, allowing you to easily run your game node wherever you deem best (without even needing node installed or any external dependencies).
