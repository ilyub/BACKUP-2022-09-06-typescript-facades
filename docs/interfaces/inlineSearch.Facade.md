[Typescript facades](../index.md) / [Exports](../modules.md) / [inlineSearch](../modules/inlineSearch.md) / Facade

# Interface: Facade

[inlineSearch](../modules/inlineSearch.md).Facade

## Table of contents

### Methods

- [create](inlineSearch.Facade.md#create)

## Methods

### create

▸ `Readonly` **create**<`T`\>(`idField`, `fields`, `items`): [`Engine`](inlineSearch.Engine.md)<`T`\>

Creates search engine.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idField` | keyof `T` & `string` | ID field. |
| `fields` | readonly keyof `T` & `string`[] | Searchable fields. |
| `items` | readonly `T`[] | Items. |

#### Returns

[`Engine`](inlineSearch.Engine.md)<`T`\>

Search engine instance.
