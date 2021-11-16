[Typescript facades](../index.md) / [Exports](../modules.md) / [inlineSearch](../modules/inlineSearch.md) / Facade

# Interface: Facade

[inlineSearch](../modules/inlineSearch.md).Facade

## Table of contents

### Methods

- [create](inlineSearch.Facade.md#create)

## Methods

### create

▸ `Readonly` **create**(`idField`, `fields`, `items`): [`Engine`](inlineSearch.Engine.md)

Creates search engine.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idField` | `string` | ID field. |
| `fields` | readonly `string`[] | Searchable fields. |
| `items` | readonly `object`[] | Items. |

#### Returns

[`Engine`](inlineSearch.Engine.md)

Search engine instance.
