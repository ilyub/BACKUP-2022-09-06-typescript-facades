[Typescript facades](../index.md) / [Exports](../modules.md) / [lang](../modules/lang.md) / Dictionary

# Interface: Dictionary<W, C\>

[lang](../modules/lang.md).Dictionary

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](../modules/lang.md#word) |
| `C` | extends [`Context`](../modules/lang.md#context) |

## Table of contents

### Methods

- [context](lang.Dictionary.md#context)
- [get](lang.Dictionary.md#get)
- [has](lang.Dictionary.md#has)
- [plural](lang.Dictionary.md#plural)
- [with](lang.Dictionary.md#with)

## Methods

### context

▸ `Readonly` **context**(`context`): [`Facade`](../modules/lang.md#facade)

Sets context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | Context. |

#### Returns

[`Facade`](../modules/lang.md#facade)

Dictionary.

___

### get

▸ `Readonly` **get**(`key`): `string`

Returns word. Uses previosly set context, count and replacements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

#### Returns

`string`

Word.

___

### has

▸ `Readonly` **has**(`key`): key is Transforms<W\>

Checks that word exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

#### Returns

key is Transforms<W\>

_True_ if word exists, _false_ otherwise.

___

### plural

▸ `Readonly` **plural**(`count`): [`Facade`](../modules/lang.md#facade)

Sets count for plural form.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Count for plural form. |

#### Returns

[`Facade`](../modules/lang.md#facade)

Dictionary.

___

### with

▸ `Readonly` **with**(`name`, `replacement`): [`Facade`](../modules/lang.md#facade)

Adds replacement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name. |
| `replacement` | `NumStr` | Value or word ID. |

#### Returns

[`Facade`](../modules/lang.md#facade)

Dictionary.
