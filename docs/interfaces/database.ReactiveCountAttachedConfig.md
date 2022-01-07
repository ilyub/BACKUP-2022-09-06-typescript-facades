[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveCountAttachedConfig

# Interface: ReactiveCountAttachedConfig

[database](../modules/database.md).ReactiveCountAttachedConfig

## Table of contents

### Properties

- [conditions](database.ReactiveCountAttachedConfig.md#conditions)
- [parentConditions](database.ReactiveCountAttachedConfig.md#parentconditions)
- [updateInterval](database.ReactiveCountAttachedConfig.md#updateinterval)

### Methods

- [updateFn](database.ReactiveCountAttachedConfig.md#updatefn)

## Properties

### conditions

• `Readonly` **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### parentConditions

• `Readonly` **parentConditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

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
| `doc` | [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md) | New doc. |

#### Returns

`boolean`

_True_ to trigger update, _false_ otherwise.
