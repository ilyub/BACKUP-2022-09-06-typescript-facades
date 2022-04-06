[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveResponseBase

# Interface: ReactiveResponseBase<T\>

[database](../modules/database.md).ReactiveResponseBase

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`ReactiveResponseBase`**

  ↳ [`ReactiveResponseLoaded`](database.ReactiveResponseLoaded.md)

  ↳ [`ReactiveResponseLoading`](database.ReactiveResponseLoading.md)

## Table of contents

### Properties

- [loaded](database.ReactiveResponseBase.md#loaded)
- [loading](database.ReactiveResponseBase.md#loading)
- [refresh](database.ReactiveResponseBase.md#refresh)
- [unsubscribe](database.ReactiveResponseBase.md#unsubscribe)
- [value](database.ReactiveResponseBase.md#value)

## Properties

### loaded

• `Readonly` **loaded**: `boolean`

___

### loading

• `Readonly` **loading**: `boolean`

___

### refresh

• `Readonly` **refresh**: [`ReactiveRefresh`](database.ReactiveRefresh.md)

___

### unsubscribe

• `Readonly` **unsubscribe**: [`ReactiveUnsubscribe`](database.ReactiveUnsubscribe.md)

___

### value

• `Optional` `Readonly` **value**: `T`
