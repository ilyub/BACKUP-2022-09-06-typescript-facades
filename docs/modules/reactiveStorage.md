[Typescript facades](../index.md) / [Exports](../modules.md) / reactiveStorage

# Module: reactiveStorage

## Table of contents

### Interfaces

- [Facade](../interfaces/reactiveStorage.Facade.md)

### Type aliases

- [OnChange](reactiveStorage.md#onchange)
- [Reduce](reactiveStorage.md#reduce)

### Variables

- [reactiveStorage](reactiveStorage.md#reactivestorage)

## Type aliases

### OnChange

Ƭ **OnChange**<`T`\>: (`reduced`: `T`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`reduced`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reduced` | `T` |

##### Returns

`void`

___

### Reduce

Ƭ **Reduce**<`T`, `R`\>: (`data`: `T`) => `R`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `R` | `R` |

#### Type declaration

▸ (`data`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`R`

## Variables

### reactiveStorage

• **reactiveStorage**: `Facade`<[`Facade`](../interfaces/reactiveStorage.Facade.md), `unknown`\>
