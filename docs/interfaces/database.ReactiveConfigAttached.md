[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveConfigAttached

# Interface: ReactiveConfigAttached

[database](../modules/database.md).ReactiveConfigAttached

## Table of contents

### Properties

- [conditions](database.ReactiveConfigAttached.md#conditions)
- [options](database.ReactiveConfigAttached.md#options)
- [parentConditions](database.ReactiveConfigAttached.md#parentconditions)
- [updateInterval](database.ReactiveConfigAttached.md#updateinterval)

### Methods

- [updateFn](database.ReactiveConfigAttached.md#updatefn)

## Properties

### conditions

• `Readonly` **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• `Optional` `Readonly` **options**: [`QueryOptions`](database.QueryOptions.md)

___

### parentConditions

• `Optional` `Readonly` **parentConditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### updateInterval

• `Optional` `Readonly` **updateInterval**: `number`

## Methods

### updateFn

▸ `Optional` `Readonly` **updateFn**(`doc`): `boolean`

Triggers update on new attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md) | New attached document. |

#### Returns

`boolean`

_True_ to trigger update, _false_ otherwise.
