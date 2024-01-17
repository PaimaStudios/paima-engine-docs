# Setting Up Database

Paima Engine requires you to deploy a Postgres database which will be used to store all state of your game node.

For those already experienced with setting up a Postgres DB, feel free to skip over the majority of this section. One important note however is that each game template also includes a `init.sql` file in the `/db/migrations/init` folder which you should use to initialize the database.

## Using Docker To Setup A Postgres DB

For those who prefer an automated solution, simply proceed with the following steps to have a local Postgres database ready-to-use with your game node:

1. Install docker/docker compose on your computer (https://docs.docker.com/compose/install/)
2. Go into the root folder of your game code (ie. `generic-game-template`) in your terminal.
3. Run `npm run database:up`
4. Docker compose will automatically download and setup Postgres for you, while also using the `init.sql` from your game code to initialize the DB.
5. Your DB will be up and running, and can be closed via `Ctrl + c` like any CLI application.
6. Any time you want to bring the DB back online, simply re-run `npm run database:up`.

## Updating Your init.sql

One side note, as you begin writing your game logic (or when building a template) you likely will end up changing the DB schema from the base template you started off with. When you do this, make sure to update the `init.sql` file to properly initialize your DB schema so that future game nodes either you or others deploy for your game will be able to properly work with your game logic.

## Typescript bindings

Templates generally come with bindings pre-generated for you, but you will need to regenerate them yourself if you change the database schema. Learn more [here](./500-ts-bindings.md).

## Resetting the Database

The easiest way to reset the database is to reset the docker image entirely. This can be done using
```bash
npm run database:reset
```

## Co-location requirement

Your node (Paima Engine instance) and your Database NEED to be on the same machine. This is not only required from a performance perspective, but Paima engine also depends on Postgres [LISTEN](https://www.postgresql.org/docs/current/sql-listen.html) events to manage cache invalidation.
