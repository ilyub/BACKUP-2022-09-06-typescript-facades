[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveQueryConfig

# Interface: ReactiveQueryConfig

[database](../modules/database.md).ReactiveQueryConfig

## Table of contents

### Properties

- [conditions](database.ReactiveQueryConfig.md#conditions)
- [options](database.ReactiveQueryConfig.md#options)
- [updateInterval](database.ReactiveQueryConfig.md#updateinterval)

### Methods

- [updateFn](database.ReactiveQueryConfig.md#updatefn)

## Properties

### conditions

• `Readonly` **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• `Readonly` **options**: [`QueryOptions`](database.QueryOptions.md)

___

### updateInterval

• `Optional` `Readonly` **updateInterval**: `number`

## Methods

### updateFn

▸ `Optional` `Readonly` **updateFn**(`doc`): `boolean`

Triggers update on new doc.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`ExistingDocument`](database.ExistingDocument.md) | New doc. |

#### Returns

`boolean`

_True_ to trigger update, _false_ otherwise.
