# Updating Typescript Bindings

Paima leverages a tool called [pgtyped](https://github.com/adelsz/pgtyped) to automatically generate Typescript bindings to your database queries. This can save a lot of time and helps avoid bugs by ensuring that your code always matches the database schema.

To learn the exact syntax for generated these bindings, we recommend the [pgtyped docs](https://pgtyped.dev/).

## Regenerating the bindings

1. Ensure your database credentials are specified in `db/pgtypedconfig.json`
2. Run `npm run compile:db` from the root of your project, or `npm run compile` from within the `db` folder.

### `pgtyped` version mismatch

If the version of `pgtyped` you used in your project doesn't match the one used by the version of Paima Engine, you will get an error that looks something like this when regenerating the bindings:

- `Type '[PreparedQuery<_, void>, _][]' is not assignable to type 'SQLUpdate[]'`
- `Types have separate declarations of a private property 'queryIR'`

To fix this, check the version of `@pgtyped/runtime` used in your `db/package.json` and ensure it matches the version used in `@paima/db/package.json`. These versions need to stay the same to avoid compatibility issues.
