[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveConfig

# Interface: ReactiveConfig

[database](../modules/database.md).ReactiveConfig

## Table of contents

### Properties

- [conditions](database.ReactiveConfig.md#conditions)
- [options](database.ReactiveConfig.md#options)
- [updateInterval](database.ReactiveConfig.md#updateinterval)

### Methods

- [updateFn](database.ReactiveConfig.md#updatefn)

## Properties

### conditions

• `Readonly` **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• `Optional` `Readonly` **options**: [`QueryOptions`](database.QueryOptions.md)

___

### updateInterval

• `Optional` `Readonly` **updateInterval**: `number`

## Methods

### updateFn

▸ `Optional` `Readonly` **updateFn**(`doc`): `boolean`

Triggers update on new document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`ExistingDocument`](database.ExistingDocument.md) | New document. |

#### Returns

`boolean`

_True_ to trigger update, _false_ otherwise.
