[Typescript facades](../index.md) / [Exports](../modules.md) / [lang](../modules/lang.md) / [lang](../modules/lang.lang-1.md) / Dictionary

# Interface: Dictionary<W, C\>

[lang](../modules/lang.md).[lang](../modules/lang.lang-1.md).Dictionary

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](../modules/lang.lang-1.md#word) |
| `C` | extends [`Context`](../modules/lang.lang-1.md#context) |

## Table of contents

### Properties

- [keys](lang.lang-1.Dictionary.md#keys)

### Methods

- [context](lang.lang-1.Dictionary.md#context)
- [get](lang.lang-1.Dictionary.md#get)
- [getIfExists](lang.lang-1.Dictionary.md#getifexists)
- [has](lang.lang-1.Dictionary.md#has)
- [plural](lang.lang-1.Dictionary.md#plural)
- [with](lang.lang-1.Dictionary.md#with)

## Properties

### keys

• `Readonly` **keys**: `Rec`<[`Transform`](../modules/lang.lang-1.md#transform)<`W`\>, [`Transform`](../modules/lang.lang-1.md#transform)<``"SampleWord"``\>\>

## Methods

### context

▸ `Readonly` **context**(`context`): [`Facade`](../modules/lang.lang-1.md#facade)

Sets context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | Context. |

#### Returns

[`Facade`](../modules/lang.lang-1.md#facade)

Dictionary.

___

### get

▸ `Readonly` **get**(`key`): `string`

Returns word. Uses previosly set context, count and replacements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Key`](../modules/lang.lang-1.md#key)<`W`\> | Word ID. |

#### Returns

`string`

Word.

___

### getIfExists

▸ `Readonly` **getIfExists**(`key`): `string`

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

▸ `Readonly` **has**(`key`): key is Key<"SampleWord"\>

Checks if word exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

#### Returns

key is Key<"SampleWord"\>

_True_ if word exists, _false_ otherwise.

___

### plural

▸ `Readonly` **plural**(`count`): [`Facade`](../modules/lang.lang-1.md#facade)

Sets count for plural form.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Count for plural form. |

#### Returns

[`Facade`](../modules/lang.lang-1.md#facade)

Dictionary.

___

### with

▸ `Readonly` **with**(`name`, `replacement`): [`Facade`](../modules/lang.lang-1.md#facade)

Adds replacement.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name. |
| `replacement` | `NumStr` | Value or word ID. |

#### Returns

[`Facade`](../modules/lang.lang-1.md#facade)

Dictionary.
