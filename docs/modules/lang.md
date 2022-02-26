[Typescript facades](../index.md) / [Exports](../modules.md) / lang

# Module: lang

## Table of contents

### Interfaces

- [Dictionary](../interfaces/lang.Dictionary.md)

### Type aliases

- [Context](lang.md#context)
- [DictionaryAndWords](lang.md#dictionaryandwords)
- [Facade](lang.md#facade)
- [Transforms](lang.md#transforms)
- [Word](lang.md#word)

### Variables

- [lang](lang.md#lang)

## Type aliases

### Context

Ƭ **Context**: keyof `facades.lang.Context`

___

### DictionaryAndWords

Ƭ **DictionaryAndWords**<`T`\>: [`Dictionary`](../interfaces/lang.Dictionary.md) & `ReadonlyRecord`<[`Transforms`](lang.md#transforms)<`T`\>, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Word`](lang.md#word) |

___

### Facade

Ƭ **Facade**: [`DictionaryAndWords`](lang.md#dictionaryandwords)<[`Word`](lang.md#word)\>

___

### Transforms

Ƭ **Transforms**<`T`\>: `Capitalize`<`T`\> \| `Lowercase`<`T`\> \| `Uncapitalize`<`T`\> \| `Uppercase`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

___

### Word

Ƭ **Word**: keyof `facades.lang.Word`

## Variables

### lang

• `Const` **lang**: `Facade`<[`Facade`](lang.md#facade), `object`\>
