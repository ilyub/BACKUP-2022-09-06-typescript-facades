[Typescript facades](../index.md) / [Exports](../modules.md) / icons

# Module: icons

## Table of contents

### Type aliases

- [Facade](icons.md#facade)
- [Icon](icons.md#icon)
- [Icons](icons.md#icons)
- [PickKeys](icons.md#pickkeys)

### Variables

- [icons](icons.md#icons)

## Type aliases

### Facade

Ƭ **Facade**: [`Icons`](icons.md#icons)<[`Icon`](icons.md#icon)\>

___

### Icon

Ƭ **Icon**: [`PickKeys`](icons.md#pickkeys)<`facades.icons.Icon`, ``true``, ``"extends->"``\>

___

### Icons

Ƭ **Icons**<`T`\>: `Rec`<`T`, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Icon`](icons.md#icon) |

___

### PickKeys

Ƭ **PickKeys**<`T`, `E`, `M`\>: `Exclude`<keyof `T`, `FilterKeys`<`T`, `E`, `M`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `E` | `E` |
| `M` | extends `Match` = ``"default"`` |

## Variables

### icons

• `Const` **icons**: `Facade`<[`Facade`](icons.md#facade), `unknown`\>
