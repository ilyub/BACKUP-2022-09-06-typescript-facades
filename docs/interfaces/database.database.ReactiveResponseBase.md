[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / [database](../modules/database.database.md) / ReactiveResponseBase

# Interface: ReactiveResponseBase<T\>

[database](../modules/database.md).[database](../modules/database.database.md).ReactiveResponseBase

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`ReactiveResponseBase`**

  ↳ [`ReactiveResponseLoaded`](database.database.ReactiveResponseLoaded.md)

  ↳ [`ReactiveResponseLoading`](database.database.ReactiveResponseLoading.md)

## Table of contents

### Properties

- [loaded](database.database.ReactiveResponseBase.md#loaded)
- [loading](database.database.ReactiveResponseBase.md#loading)
- [refresh](database.database.ReactiveResponseBase.md#refresh)
- [unsubscribe](database.database.ReactiveResponseBase.md#unsubscribe)
- [value](database.database.ReactiveResponseBase.md#value)

## Properties

### loaded

• `Readonly` **loaded**: `boolean`

___

### loading

• `Readonly` **loading**: `boolean`

___

### refresh

• `Readonly` **refresh**: [`ReactiveRefresh`](database.database.ReactiveRefresh.md)

___

### unsubscribe

• `Readonly` **unsubscribe**: [`ReactiveUnsubscribe`](database.database.ReactiveUnsubscribe.md)

___

### value

• `Optional` `Readonly` **value**: `T`
