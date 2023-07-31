---
sidebar_position: 3
---

# Error Handling

Errors are unavoidable. Notably, be sure to take into accounts the following error types:
1. Programming mistakes
2. Concurrency issues. Blockchains are asynchronous and so an action that was valid when the user took it may no longer be valid when it appears on-chain. For example, a user could try joining a lobby that no longer exists.
3. User abuse. Just because your application has no UI for something, it doesn't stop somebody from creating a transaction and submitting it to the blockchain manually. For example, a user could try joining the same lobby two times on the same wallet to see if it breaks your application

To handle errors, Paima has a system to allow define error codes for your application that extend the built-in error handling in Paima

```typescript
import type { ErrorMessageFxn } from 'paima-sdk/paima-utils';
import { buildErrorCodeTranslator } from 'paima-sdk/paima-utils';
import type { EndpointErrorFxn } from 'paima-sdk/paima-mw-core';
import {
  PaimaMiddlewareErrorCode,
  PAIMA_MIDDLEWARE_ERROR_MESSAGES,
  buildAbstractEndpointErrorFxn,
} from 'paima-sdk/paima-mw-core';

export const enum MiddlewareErrorCode {
  // start your error codes after the reserved namespace for Paima Engine's internal system
  GENERIC_ERROR = PaimaMiddlewareErrorCode.FINAL_PAIMA_GENERIC_ERROR + 1,
  CANNOT_JOIN_OWN_LOBBY,
}

type ErrorMessageMapping = Record<MiddlewareErrorCode, string>;
const MIDDLEWARE_ERROR_MESSAGES: ErrorMessageMapping = {
  [MiddlewareErrorCode.GENERIC_ERROR]: 'Unspecified generic Game error',
  [MiddlewareErrorCode.CANNOT_JOIN_OWN_LOBBY]: 'Cannot join your own lobby',
};

const errorMessageFxn: ErrorMessageFxn = buildErrorCodeTranslator({
  ...PAIMA_MIDDLEWARE_ERROR_MESSAGES,
  ...MIDDLEWARE_ERROR_MESSAGES,
});

export function buildEndpointErrorFxn(endpointName: string): EndpointErrorFxn {
  return buildAbstractEndpointErrorFxn(errorMessageFxn, endpointName);
}
```

Now, when you need to throw an error, you can easily handle them as seen below

```typescript
const errorFxn = buildEndpointErrorFxn('joinLobby');

if (userJoinedOwnLobby(lobby, userId)) {
    return errorFxn(MiddlewareErrorCode.CANNOT_JOIN_OWN_LOBBY);
}
```
