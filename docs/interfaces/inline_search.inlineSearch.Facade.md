[Typescript facades](../index.md) / [Exports](../modules.md) / [inline-search](../modules/inline_search.md) / [inlineSearch](../modules/inline_search.inlineSearch.md) / Facade

# Interface: Facade

[inline-search](../modules/inline_search.md).[inlineSearch](../modules/inline_search.inlineSearch.md).Facade

## Table of contents

### Properties

- [create](inline_search.inlineSearch.Facade.md#create)

## Properties

### create

• `Readonly` **create**: <T\>(`idField`: `string` & keyof `T`, `fields`: readonly `string` & keyof `T`[], `items`: readonly `T`[]) => [`Engine`](inline_search.inlineSearch.Engine.md)<`T`\>

#### Type declaration

▸ <`T`\>(`idField`, `fields`, `items`): [`Engine`](inline_search.inlineSearch.Engine.md)<`T`\>

Creates search engine.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idField` | `string` & keyof `T` | ID field. |
| `fields` | readonly `string` & keyof `T`[] | Searchable fields. |
| `items` | readonly `T`[] | Items. |

##### Returns

[`Engine`](inline_search.inlineSearch.Engine.md)<`T`\>

Search engine instance.
