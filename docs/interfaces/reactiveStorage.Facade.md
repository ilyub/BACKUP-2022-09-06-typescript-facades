[Typerock facades](../index.md) / [Exports](../modules.md) / [reactiveStorage](../modules/reactiveStorage.md) / Facade

# Interface: Facade

[reactiveStorage](../modules/reactiveStorage.md).Facade

## Callable

### Facade

▸ **Facade**<`T`\>(`data`): `T`

Creates reactive wrapper for data object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | Data. |

#### Returns

`T`

Reactive wrapper for data object.

## Table of contents

### Methods

- [withChangesHandler](reactiveStorage.Facade.md#withchangeshandler)

## Methods

### withChangesHandler

▸ `Readonly` **withChangesHandler**<`T`, `R`\>(`data`, `onChange`, `reduce`): `T`

Creates reactive wrapper for data object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `R` | `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | Data. |
| `onChange` | (`x`: `R`) => `void` | Handles reduced value change. |
| `reduce` | (`x`: `T`) => `R` | Generates reduced value. |

#### Returns

`T`

Reactive wrapper for data object.
