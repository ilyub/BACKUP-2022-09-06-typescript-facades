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
- [unsubscribe](database.ReactiveResponse.md#unsubscribe)
- [updateFn](database.ReactiveResponse.md#updatefn)
- [updateInterval](database.ReactiveResponse.md#updateinterval)
- [value](database.ReactiveResponse.md#value)

## Properties

### conditions

• **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• **options**: [`QueryOptions`](database.QueryOptions.md)

___

### unsubscribe

• `Readonly` **unsubscribe**: [`ReactiveUnsubscribe`](../modules/database.md#reactiveunsubscribe)

___

### updateFn

• **updateFn**: `undefined` \| [`ReactiveUpdateFn`](../modules/database.md#reactiveupdatefn)<[`ExistingDocument`](database.ExistingDocument.md)\>

___

### updateInterval

• **updateInterval**: `numberU`

___

### value

• `Readonly` **value**: `T`
