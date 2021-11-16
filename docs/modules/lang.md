[Typescript facades](../index.md) / [Exports](../modules.md) / lang

# Module: lang

## Table of contents

### Interfaces

- [Dictionary](../interfaces/lang.Dictionary.md)

### Type aliases

- [Context](lang.md#context)
- [Facade](lang.md#facade)
- [Transforms](lang.md#transforms)
- [Word](lang.md#word)
- [Words](lang.md#words)

### Variables

- [lang](lang.md#lang)

## Type aliases

### Context

Ƭ **Context**: keyof `facades.lang.Context`

___

### Facade

Ƭ **Facade**: [`Dictionary`](../interfaces/lang.Dictionary.md) & [`Words`](lang.md#words)

___

### Transforms

Ƭ **Transforms**: `Capitalize`<[`Word`](lang.md#word)\> \| `Lowercase`<[`Word`](lang.md#word)\> \| `Uncapitalize`<[`Word`](lang.md#word)\> \| `Uppercase`<[`Word`](lang.md#word)\>

___

### Word

Ƭ **Word**: keyof `facades.lang.Word`

___

### Words

Ƭ **Words**: `ReadonlyRecord`<[`Transforms`](lang.md#transforms), `string`\>

## Variables

### lang

• **lang**: `Facade`<[`Facade`](lang.md#facade), `unknown`\>
