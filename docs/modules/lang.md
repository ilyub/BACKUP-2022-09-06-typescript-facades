[Typescript facades](../index.md) / [Exports](../modules.md) / lang

# Module: lang

## Table of contents

### Interfaces

- [Dictionary](../interfaces/lang.Dictionary.md)

### Type aliases

- [Context](lang.md#context)
- [Facade](lang.md#facade)
- [Lang](lang.md#lang)
- [PickKeys](lang.md#pickkeys)
- [Transforms](lang.md#transforms)
- [Word](lang.md#word)

### Variables

- [lang](lang.md#lang)

## Type aliases

### Context

Ƭ **Context**: [`PickKeys`](lang.md#pickkeys)<`facades.lang.Context`, ``true``, ``"extends->"``\>

___

### Facade

Ƭ **Facade**: [`Lang`](lang.md#lang)<[`Word`](lang.md#word), [`Context`](lang.md#context)\>

___

### Lang

Ƭ **Lang**<`W`, `C`\>: [`Dictionary`](../interfaces/lang.Dictionary.md)<`W`, `C`\> & `Rec`<[`Transforms`](lang.md#transforms)<`W`\>, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.md#word) |
| `C` | extends [`Context`](lang.md#context) |

___

### PickKeys

Ƭ **PickKeys**<`T`, `E`, `M`\>: `Exclude`<keyof `T`, `FilterKeys`<`T`, `E`, `M`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `E` | `E` |
| `M` | extends `Match` = ``"default"`` |

___

### Transforms

Ƭ **Transforms**<`T`\>: `Capitalize`<`T`\> \| `Lowercase`<`T`\> \| `Uncapitalize`<`T`\> \| `Uppercase`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Word`](lang.md#word) |

___

### Word

Ƭ **Word**: [`PickKeys`](lang.md#pickkeys)<`facades.lang.Word`, ``true``, ``"extends->"``\>

## Variables

### lang

• `Const` **lang**: `Facade`<[`Facade`](lang.md#facade), `unknown`\>
