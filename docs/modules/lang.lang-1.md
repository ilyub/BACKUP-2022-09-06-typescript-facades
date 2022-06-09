[Typescript facades](../index.md) / [Exports](../modules.md) / [lang](lang.md) / lang

# Namespace: lang

[lang](lang.md).lang

## Table of contents

### Interfaces

- [Dictionary](../interfaces/lang.lang-1.Dictionary.md)
- [Extension](../interfaces/lang.lang-1.Extension.md)

### Type Aliases

- [Context](lang.lang-1.md#context)
- [Facade](lang.lang-1.md#facade)
- [Key](lang.lang-1.md#key)
- [Lang](lang.lang-1.md#lang)
- [Plain](lang.lang-1.md#plain)
- [Transform](lang.lang-1.md#transform)
- [Word](lang.lang-1.md#word)

## Type Aliases

### Context

Ƭ **Context**: `PickKeys`<`facades.lang.Context`, ``true``, ``"extends->"``\>

___

### Facade

Ƭ **Facade**: [`Lang`](lang.lang-1.md#lang)<[`Word`](lang.lang-1.md#word), [`Context`](lang.lang-1.md#context)\>

___

### Key

Ƭ **Key**<`W`\>: [`Transform`](lang.lang-1.md#transform)<`W`\> \| \`plain:${string}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.lang-1.md#word) = [`Word`](lang.lang-1.md#word) |

___

### Lang

Ƭ **Lang**<`W`, `C`\>: [`Dictionary`](../interfaces/lang.lang-1.Dictionary.md)<`W`, `C`\> & `Rec`<[`Transform`](lang.lang-1.md#transform)<`W`\>, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.lang-1.md#word) |
| `C` | extends [`Context`](lang.lang-1.md#context) |

___

### Plain

Ƭ **Plain**: \`plain:${string}\`

___

### Transform

Ƭ **Transform**<`W`\>: `Capitalize`<`W`\> \| `Lowercase`<`W`\> \| `Uncapitalize`<`W`\> \| `Uppercase`<`W`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](lang.lang-1.md#word) = [`Word`](lang.lang-1.md#word) |

___

### Word

Ƭ **Word**: `PickKeys`<`facades.lang.Word`, ``true``, ``"extends->"``\>
