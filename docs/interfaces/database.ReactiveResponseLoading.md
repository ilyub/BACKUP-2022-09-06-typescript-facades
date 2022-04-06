[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveResponseLoading

# Interface: ReactiveResponseLoading<T\>

[database](../modules/database.md).ReactiveResponseLoading

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ReactiveResponseBase`](database.ReactiveResponseBase.md)<`T`\>

  ↳ **`ReactiveResponseLoading`**

## Table of contents

### Properties

- [loaded](database.ReactiveResponseLoading.md#loaded)
- [loading](database.ReactiveResponseLoading.md#loading)
- [refresh](database.ReactiveResponseLoading.md#refresh)
- [unsubscribe](database.ReactiveResponseLoading.md#unsubscribe)
- [value](database.ReactiveResponseLoading.md#value)

## Properties

### loaded

• `Readonly` **loaded**: ``false``

#### Overrides

[ReactiveResponseBase](database.ReactiveResponseBase.md).[loaded](database.ReactiveResponseBase.md#loaded)

___

### loading

• `Readonly` **loading**: ``true``

#### Overrides

[ReactiveResponseBase](database.ReactiveResponseBase.md).[loading](database.ReactiveResponseBase.md#loading)

___

### refresh

• `Readonly` **refresh**: [`ReactiveRefresh`](database.ReactiveRefresh.md)

#### Inherited from

[ReactiveResponseBase](database.ReactiveResponseBase.md).[refresh](database.ReactiveResponseBase.md#refresh)

___

### unsubscribe

• `Readonly` **unsubscribe**: [`ReactiveUnsubscribe`](database.ReactiveUnsubscribe.md)

#### Inherited from

[ReactiveResponseBase](database.ReactiveResponseBase.md).[unsubscribe](database.ReactiveResponseBase.md#unsubscribe)

___

### value

• `Optional` `Readonly` **value**: `T`

#### Inherited from

[ReactiveResponseBase](database.ReactiveResponseBase.md).[value](database.ReactiveResponseBase.md#value)
