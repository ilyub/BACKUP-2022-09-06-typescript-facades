[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveConfigAttached

# Interface: ReactiveConfigAttached

[database](../modules/database.md).ReactiveConfigAttached

## Table of contents

### Properties

- [conditions](database.ReactiveConfigAttached.md#conditions)
- [options](database.ReactiveConfigAttached.md#options)
- [parentConditions](database.ReactiveConfigAttached.md#parentconditions)
- [updateFn](database.ReactiveConfigAttached.md#updatefn)
- [updateInterval](database.ReactiveConfigAttached.md#updateinterval)

## Properties

### conditions

• `Optional` `Readonly` **conditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### options

• `Optional` `Readonly` **options**: [`QueryOptions`](database.QueryOptions.md)

___

### parentConditions

• `Optional` `Readonly` **parentConditions**: `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\>

___

### updateFn

• `Optional` `Readonly` **updateFn**: [`ReactiveUpdateFn`](database.ReactiveUpdateFn.md)<[`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

___

### updateInterval

• `Optional` `Readonly` **updateInterval**: `number`
