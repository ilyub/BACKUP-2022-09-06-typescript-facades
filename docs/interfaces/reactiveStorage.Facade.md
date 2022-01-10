[Typescript facades](../index.md) / [Exports](../modules.md) / [reactiveStorage](../modules/reactiveStorage.md) / Facade

# Interface: Facade

[reactiveStorage](../modules/reactiveStorage.md).Facade

## Callable

### Facade

▸ **Facade**<`T`\>(`obj`): `T`

Creates reactive object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

`T`

Reactive object.

## Table of contents

### Methods

- [unwatch](reactiveStorage.Facade.md#unwatch)
- [watch](reactiveStorage.Facade.md#watch)

## Methods

### unwatch

▸ `Readonly` **unwatch**(`obj`, `observer`): `void`

Unsubscribes from changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Reactive object. |
| `observer` | `unknown` | Observer. |

#### Returns

`void`

___

### watch

▸ `Readonly` **watch**<`T`\>(`obj`, `handler`, `reducer?`): `unknown`

Subscribes to changes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Reactive object. |
| `handler` | [`Handler`](../modules/reactiveStorage.md#handler)<`T`\> | Handles changes. |
| `reducer?` | [`Reducer`](../modules/reactiveStorage.md#reducer)<`T`\> | Generates reduced value. |

#### Returns

`unknown`

Observer.
