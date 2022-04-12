[Typescript facades](../index.md) / [Exports](../modules.md) / lang

# Module: lang

## Table of contents

### Interfaces

- [Dictionary](../interfaces/lang.Dictionary.md)

### Type aliases

- [Context](lang.md#context)
- [Facade](lang.md#facade)
- [Lang](lang.md#lang)
- [Transforms](lang.md#transforms)
- [Word](lang.md#word)

### Variables

- [lang](lang.md#lang-1)

## Type aliases

### Context

Ƭ **Context**: `PickKeys`<`facades.lang.Context`, ``true``, ``"extends->"``\>

___

### Facade

Ƭ **Facade**: [`Lang`](lang.md#lang)<[`Word`](lang.md#word), [`Context`](lang.md#context)\>

___

### Lang

Ƭ **Lang**<`W`, `C`\>: [`Dictionary`](../interfaces/lang.Dictionary.md)<`C`\> & `Rec`<[`Transforms`](lang.md#transforms)<`W`\>, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.md#word) |
| `C` | extends [`Context`](lang.md#context) |

___

### Transforms

Ƭ **Transforms**<`T`\>: `Capitalize`<`T`\> \| `Lowercase`<`T`\> \| `Uncapitalize`<`T`\> \| `Uppercase`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Word`](lang.md#word) |

___

### Word

Ƭ **Word**: `PickKeys`<`facades.lang.Word`, ``true``, ``"extends->"``\>

## Variables

### lang

• `Const` **lang**: `Facade`<[`Facade`](lang.md#facade), `unknown`\>
