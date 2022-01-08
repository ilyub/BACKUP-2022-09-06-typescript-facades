[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveResponse

# Interface: ReactiveResponse<T\>

[database](../modules/database.md).ReactiveResponse

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [conditions](database.ReactiveResponse.md#conditions)
- [options](database.ReactiveResponse.md#options)
- [value](database.ReactiveResponse.md#value)

### Methods

- [unsubscribe](database.ReactiveResponse.md#unsubscribe)

## Properties

### conditions

• **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• **options**: `undefined` \| [`QueryOptions`](database.QueryOptions.md)

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
