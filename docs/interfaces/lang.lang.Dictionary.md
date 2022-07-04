[Typescript facades](../index.md) / [Exports](../modules.md) / [lang](../modules/lang.md) / [lang](../modules/lang.lang.md) / Dictionary

# Interface: Dictionary<W, C\>

[lang](../modules/lang.md).[lang](../modules/lang.lang.md).Dictionary

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | extends [`Word`](../modules/lang.lang.md#word) |
| `C` | extends [`Context`](../modules/lang.lang.md#context) |

## Table of contents

### Properties

- [context](lang.lang.Dictionary.md#context)
- [get](lang.lang.Dictionary.md#get)
- [getIfExists](lang.lang.Dictionary.md#getifexists)
- [has](lang.lang.Dictionary.md#has)
- [keys](lang.lang.Dictionary.md#keys)
- [plain](lang.lang.Dictionary.md#plain)
- [plural](lang.lang.Dictionary.md#plural)
- [with](lang.lang.Dictionary.md#with)

## Properties

### context

• `Readonly` **context**: (`context`: `C`) => [`Facade`](../modules/lang.lang.md#facade)

#### Type declaration

▸ (`context`): [`Facade`](../modules/lang.lang.md#facade)

Sets context.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | Context. |

##### Returns

[`Facade`](../modules/lang.lang.md#facade)

Dictionary.

___

### get

• `Readonly` **get**: (`key`: [`Key`](../modules/lang.lang.md#key)<``"SampleWord"``\>) => `string`

#### Type declaration

▸ (`key`): `string`

Returns word. Uses previosly set context, count and replacements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Key`](../modules/lang.lang.md#key)<``"SampleWord"``\> | Word ID. |

##### Returns

`string`

Word.

___

### getIfExists

• `Readonly` **getIfExists**: (`key`: `string`) => `string`

#### Type declaration

▸ (`key`): `string`

Returns word. Uses previosly set context, count and replacements.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

##### Returns

`string`

Word.

___

### has

• `Readonly` **has**: (`key`: `string`) => key is Key<"SampleWord"\>

#### Type declaration

▸ (`key`): key is Key<"SampleWord"\>

Checks if word exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Word ID. |

##### Returns

key is Key<"SampleWord"\>

_True_ if word exists, _false_ otherwise.

___

### keys

• `Readonly` **keys**: `Rec`<[`Transform`](../modules/lang.lang.md#transform)<`W`\>, [`Transform`](../modules/lang.lang.md#transform)<``"SampleWord"``\>\>

___

### plain

• `Readonly` **plain**: (`str`: `string`) => \`plain:${string}\`

#### Type declaration

▸ (`str`): \`plain:${string}\`

Wraps plain text.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | Plain text. |

##### Returns

\`plain:${string}\`

Wrapped plain text.

___

### plural

• `Readonly` **plural**: (`count`: `number`) => [`Facade`](../modules/lang.lang.md#facade)

#### Type declaration

▸ (`count`): [`Facade`](../modules/lang.lang.md#facade)

Sets count for plural form.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Count for plural form. |

##### Returns

[`Facade`](../modules/lang.lang.md#facade)

Dictionary.

___

### with

• `Readonly` **with**: (`name`: `string`, `replacement`: `NumStr`) => [`Facade`](../modules/lang.lang.md#facade)

#### Type declaration

▸ (`name`, `replacement`): [`Facade`](../modules/lang.lang.md#facade)

Adds replacement.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name. |
| `replacement` | `NumStr` | Value or word ID. |

##### Returns

[`Facade`](../modules/lang.lang.md#facade)

Dictionary.
