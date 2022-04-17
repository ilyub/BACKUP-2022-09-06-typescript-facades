[Typescript facades](../index.md) / [Exports](../modules.md) / [reactiveStorage](../modules/reactiveStorage.md) / [reactiveStorage](../modules/reactiveStorage.reactiveStorage-1.md) / Facade

# Interface: Facade

[reactiveStorage](../modules/reactiveStorage.md).[reactiveStorage](../modules/reactiveStorage.reactiveStorage-1.md).Facade

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

- [unwatch](reactiveStorage.reactiveStorage-1.Facade.md#unwatch)
- [watch](reactiveStorage.reactiveStorage-1.Facade.md#watch)

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
| `handler` | [`Handler`](reactiveStorage.reactiveStorage-1.Handler.md)<`T`\> | Handles object change. |
| `reducer?` | [`Reducer`](reactiveStorage.reactiveStorage-1.Reducer.md)<`T`\> | Reduces object for comparison. |

#### Returns

`Observer`

Observer.
