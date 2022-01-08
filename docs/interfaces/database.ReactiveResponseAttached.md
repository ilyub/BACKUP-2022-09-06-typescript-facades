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
- [value](database.ReactiveResponseAttached.md#value)

### Methods

- [unsubscribe](database.ReactiveResponseAttached.md#unsubscribe)

## Properties

### conditions

• **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• **options**: `undefined` \| [`QueryOptions`](database.QueryOptions.md)

___

### parentConditions

• **parentConditions**: `undefined` \| `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### value

• `Readonly` **value**: `T`

## Methods

### unsubscribe

▸ `Readonly` **unsubscribe**(): `Promise`<`void`\>

Unsubscribes from changes.

#### Returns

`Promise`<`void`\>

Promise.
