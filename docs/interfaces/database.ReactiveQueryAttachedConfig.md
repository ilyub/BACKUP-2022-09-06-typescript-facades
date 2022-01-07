[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveQueryAttachedConfig

# Interface: ReactiveQueryAttachedConfig

[database](../modules/database.md).ReactiveQueryAttachedConfig

## Table of contents

### Properties

- [conditions](database.ReactiveQueryAttachedConfig.md#conditions)
- [options](database.ReactiveQueryAttachedConfig.md#options)
- [parentConditions](database.ReactiveQueryAttachedConfig.md#parentconditions)
- [updateInterval](database.ReactiveQueryAttachedConfig.md#updateinterval)

### Methods

- [updateFn](database.ReactiveQueryAttachedConfig.md#updatefn)

## Properties

### conditions

• `Readonly` **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• `Readonly` **options**: [`QueryOptions`](database.QueryOptions.md)

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
