# Introduction

Typically, when using Paima, you are [reacting to events](../../300-react-to-events/2-primitive-catalogue/1-introduction.md) created by underlying [funnels](../../300-react-to-events/3-funnel-types/1-common-concepts/1-intro.md). There are cases, however, where you want your rollup itself to be emitting events.

## Event types

Within this, there are two types of events your rollup may want to emit:
1. [Timers & Ticks](./50-timers-ticks.md): These are events that trigger your rollup's state machine (at a later time). This is useful when you want your app to either have
     - "ticks" (regular updates) such as resetting a user leaderboards every 24hrs
     - timed events such as a potion boosting strength for 5 minutes 
2. [Log Events](./100-events/1-introduction.md): These are events that *do not* trigger your rollup's state machine. This is useful when you want to have events purely for data analytics purposes, or to power frontend functionality (be it tools like explorers, [clients](https://en.wikipedia.org/wiki/Game_client) or other tools)

## Differentiating events

Typically, when processing events in Paima, the event is uniquely is uniquely defined by the underlying [funnel](../../300-react-to-events/3-funnel-types/1-common-concepts/1-intro.md) that fetched the data (ex: which user sent the transaction? Which smart contract triggered the event?), which makes it easy to query and process this information. Equivalently, we need a way to differentiate events created by Paima itself.

[Precompiles](./300-precompiles/100-introduction.md) play this role in Paima, by allowing you to attach a [namespace](https://en.wikipedia.org/wiki/Namespace) to events that are created to make it easier to filter through them.
