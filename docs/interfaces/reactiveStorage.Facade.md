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
| `observer` | `Observer` | Observer. |

#### Returns

`void`

___

### watch

▸ `Readonly` **watch**<`T`\>(`obj`, `handler`, `reducer?`): `Observer`

Subscribes to changes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Reactive object. |
| `handler` | [`Handler`](reactiveStorage.Handler.md)<`T`\> | Handles object change. |
| `reducer?` | [`Reducer`](reactiveStorage.Reducer.md)<`T`\> | Reduces object for comparison. |

#### Returns

`Observer`

Observer.
