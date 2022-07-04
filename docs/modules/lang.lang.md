[Typescript facades](../index.md) / [Exports](../modules.md) / [lang](lang.md) / lang

# Namespace: lang

[lang](lang.md).lang

## Table of contents

### Interfaces

- [Dictionary](../interfaces/lang.lang.Dictionary.md)

### Type Aliases

- [Context](lang.lang.md#context)
- [Facade](lang.lang.md#facade)
- [Key](lang.lang.md#key)
- [Lang](lang.lang.md#lang)
- [Plain](lang.lang.md#plain)
- [Transform](lang.lang.md#transform)
- [Word](lang.lang.md#word)

## Type Aliases

### Context

Ƭ **Context**: `PickKeys`<`facades.lang.Context`, ``true``, ``"extends->"``\>

___

### Facade

Ƭ **Facade**: [`Lang`](lang.lang.md#lang)<[`Word`](lang.lang.md#word), [`Context`](lang.lang.md#context)\>

___

### Key

Ƭ **Key**<`W`\>: [`Plain`](lang.lang.md#plain) \| [`Transform`](lang.lang.md#transform)<`W`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.lang.md#word) = [`Word`](lang.lang.md#word) |

___

### Lang

Ƭ **Lang**<`W`, `C`\>: [`Dictionary`](../interfaces/lang.lang.Dictionary.md)<`W`, `C`\> & `Rec`<[`Transform`](lang.lang.md#transform)<`W`\>, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.lang.md#word) |
| `C` | extends [`Context`](lang.lang.md#context) |

___

### Plain

Ƭ **Plain**: \`plain:${string}\`

___

### Transform

Ƭ **Transform**<`W`\>: `Capitalize`<`W`\> \| `Lowercase`<`W`\> \| `Uncapitalize`<`W`\> \| `Uppercase`<`W`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.lang.md#word) = [`Word`](lang.lang.md#word) |

___

### Word

Ƭ **Word**: `PickKeys`<`facades.lang.Word`, ``true``, ``"extends->"``\>
