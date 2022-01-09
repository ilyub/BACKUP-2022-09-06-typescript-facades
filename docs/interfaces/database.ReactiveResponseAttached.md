[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveResponseAttached

# Interface: ReactiveResponseAttached<T\>

[database](../modules/database.md).ReactiveResponseAttached

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [conditions](database.ReactiveResponseAttached.md#conditions)
- [options](database.ReactiveResponseAttached.md#options)
- [parentConditions](database.ReactiveResponseAttached.md#parentconditions)
- [unsubscribe](database.ReactiveResponseAttached.md#unsubscribe)
- [updateFn](database.ReactiveResponseAttached.md#updatefn)
- [updateInterval](database.ReactiveResponseAttached.md#updateinterval)
- [value](database.ReactiveResponseAttached.md#value)

## Properties

### conditions

• **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• **options**: [`QueryOptions`](database.QueryOptions.md)

___

### parentConditions

• **parentConditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### unsubscribe

• `Readonly` **unsubscribe**: [`ReactiveUnsubscribe`](../modules/database.md#reactiveunsubscribe)

___

### updateFn

• **updateFn**: `undefined` \| [`ReactiveUpdateFn`](../modules/database.md#reactiveupdatefn)<[`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

___

### updateInterval

• **updateInterval**: `numberU`

___

### value

• `Readonly` **value**: `T`
