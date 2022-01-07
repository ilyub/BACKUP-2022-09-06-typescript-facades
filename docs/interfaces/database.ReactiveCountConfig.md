[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveCountConfig

# Interface: ReactiveCountConfig

[database](../modules/database.md).ReactiveCountConfig

## Table of contents

### Properties

- [conditions](database.ReactiveCountConfig.md#conditions)
- [updateInterval](database.ReactiveCountConfig.md#updateinterval)

### Methods

- [updateFn](database.ReactiveCountConfig.md#updatefn)

## Properties

### conditions

• `Readonly` **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

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
