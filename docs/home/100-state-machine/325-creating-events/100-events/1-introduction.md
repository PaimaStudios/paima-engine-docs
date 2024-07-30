# Introduction

Typically, when using Paima, you are [reacting to events](../../300-react-to-events/10-primitive-catalogue/1-introduction.md) created by underlying [funnels](../../300-react-to-events/3-funnel-types/1-common-concepts/1-intro.md). There are cases, however, where you want your rollup to react to events emitted by your rollup itself, and this case is supported through ["ticks" (scheduled events)](../50-timers-ticks.md). **However, what if you want your rollup to emit events purely for external applications to connect to, as opposed to triggering a state transition in your rollup? This is the goal of event logs.**

## Core concept

When writing a application, being able to easily know usage patterns is crucial to:
1. As the core developers, to know what is working and what isn't
2. As an external developer, to be able to build interesting projects on top of the core protocol

Although there are cases where having [relational databases](https://en.wikipedia.org/wiki/Relational_database) can provide a lot of speed, clarity and usability benefits, in a lot of cases [non-relational databases](https://en.wikipedia.org/wiki/NoSQL) are significantly easier to write and much easier to consume externally. This is especially true in cases where use-generated content plays a key role in the protocol, as you often cannot know which relational structures best fit user behavior ahead of time. You can see this in practice for example with blockchains, where often there are relational database options for parts that seldom change (the core protocol itself), whereas user-generated content (ex: dApps) are often indexed using general logging systems (ex: [event logs](https://docs.alchemy.com/docs/deep-dive-into-eth_getlogs) for Solidity).

Similarly, for Paima Engine, we provide [database management](../../../500-database-management/100-introduction.md) of rollup state out of the box, but also provide a simpler logging system for cases where it makes sense.

Notably, for Paima's event system, we had the following desirable properties:
1. **Events should be customizable**
    1. Events can be defined on a per-app basis, be emitted wherever needed (ex: an event if a player completes a quest)
    1. Events can self-define which fields are [indexable](https://en.wikipedia.org/wiki/Database_index) to fine-tune performance
2. **Events should be easily parsable**
    1. Events should support static typing using [json-schema](https://json-schema.org/learn/getting-started-step-by-step)
    1. Events should come with a code generation and documentation generation to make it easy for external developers to understand
3. **Events should be easy to access**
    1. Historical events are kept permanently by default
    1. (for historical data) Events should be accessible via a [REST](https://en.wikipedia.org/wiki/REST) interface
    1. (for realtime data) Events should be accessible via a [pub-sub system](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
