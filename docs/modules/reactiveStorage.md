[Typescript facades](../index.md) / [Exports](../modules.md) / reactiveStorage

# Module: reactiveStorage

## Table of contents

### Interfaces

- [Facade](../interfaces/reactiveStorage.Facade.md)

### Type aliases

- [Handler](reactiveStorage.md#handler)
- [Reducer](reactiveStorage.md#reducer)

### Variables

- [reactiveStorage](reactiveStorage.md#reactivestorage)

## Type aliases

### Handler

Ƭ **Handler**<`T`\>: (`obj`: `T`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

▸ (`obj`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`void`

___

### Reducer

Ƭ **Reducer**<`T`\>: (`obj`: `T`) => `unknown`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

▸ (`obj`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`unknown`

## Variables

### reactiveStorage

• **reactiveStorage**: `Facade`<[`Facade`](../interfaces/reactiveStorage.Facade.md), `unknown`\>
