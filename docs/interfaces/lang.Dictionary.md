[Typescript facades](../index.md) / [Exports](../modules.md) / [lang](../modules/lang.md) / Dictionary

# Interface: Dictionary

[lang](../modules/lang.md).Dictionary

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
| `context` | ``"SampleContext"`` | Context. |

#### Returns

[`Facade`](../modules/lang.md#facade)

Dictionary.

___

### get

▸ `Readonly` **get**(`key`): `string`

Returns word based on context and count (applies replacements).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

#### Returns

`string`

Word.

___

### has

▸ `Readonly` **has**(`key`): key is Transforms

Checks if word exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

#### Returns

key is Transforms

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

▸ `Readonly` **with**(`search`, `replace`): [`Facade`](../modules/lang.md#facade)

Adds replacement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `search` | `string` | Search term. |
| `replace` | `NumStr` | Replacement. |

#### Returns

[`Facade`](../modules/lang.md#facade)

Dictionary.
