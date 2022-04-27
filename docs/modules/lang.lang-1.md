[Typescript facades](../index.md) / [Exports](../modules.md) / [lang](lang.md) / lang

# Namespace: lang

[lang](lang.md).lang

## Table of contents

### Interfaces

- [Dictionary](../interfaces/lang.lang-1.Dictionary.md)

### Type aliases

- [Context](lang.lang-1.md#context)
- [Facade](lang.lang-1.md#facade)
- [Lang](lang.lang-1.md#lang)
- [Word](lang.lang-1.md#word)

## Type aliases

### Context

Ƭ **Context**: `PickKeys`<`facades.lang.Context`, ``true``, ``"extends->"``\>

___

### Facade

Ƭ **Facade**: [`Lang`](lang.lang-1.md#lang)<[`Word`](lang.lang-1.md#word), [`Context`](lang.lang-1.md#context)\>

___

### Lang

Ƭ **Lang**<`W`, `C`\>: [`Dictionary`](../interfaces/lang.lang-1.Dictionary.md)<`C`\> & `Rec`<`Capitalize`<`W`\> \| `Lowercase`<`W`\> \| `Uncapitalize`<`W`\> \| `Uppercase`<`W`\>, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.lang-1.md#word) |
| `C` | extends [`Context`](lang.lang-1.md#context) |

___

### Word

Ƭ **Word**: `PickKeys`<`facades.lang.Word`, ``true``, ``"extends->"``\>
