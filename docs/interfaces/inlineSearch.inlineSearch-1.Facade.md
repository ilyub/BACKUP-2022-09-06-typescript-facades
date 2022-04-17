[Typescript facades](../index.md) / [Exports](../modules.md) / [inlineSearch](../modules/inlineSearch.md) / [inlineSearch](../modules/inlineSearch.inlineSearch-1.md) / Facade

# Interface: Facade

[inlineSearch](../modules/inlineSearch.md).[inlineSearch](../modules/inlineSearch.inlineSearch-1.md).Facade

## Table of contents

### Methods

- [create](inlineSearch.inlineSearch-1.Facade.md#create)

## Methods

### create

▸ `Readonly` **create**<`T`\>(`idField`, `fields`, `items`): [`Engine`](inlineSearch.inlineSearch-1.Engine.md)<`T`\>

Creates search engine.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idField` | `string` & keyof `T` | ID field. |
| `fields` | readonly `string` & keyof `T`[] | Searchable fields. |
| `items` | readonly `T`[] | Items. |

#### Returns

[`Engine`](inlineSearch.inlineSearch-1.Engine.md)<`T`\>

Search engine instance.
