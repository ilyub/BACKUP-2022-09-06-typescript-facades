[Typescript facades](../index.md) / [Exports](../modules.md) / [reactive-storage](../modules/reactive_storage.md) / [reactiveStorage](../modules/reactive_storage.reactiveStorage.md) / Facade

# Interface: Facade

[reactive-storage](../modules/reactive_storage.md).[reactiveStorage](../modules/reactive_storage.reactiveStorage.md).Facade

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

- [unwatch](reactive_storage.reactiveStorage.Facade.md#unwatch)
- [watch](reactive_storage.reactiveStorage.Facade.md#watch)

## Methods

### unwatch

▸ `Readonly` **unwatch**(`obj`, `observer`): `void`

Unsubscribes from changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Reactive object. |
| `observer` | [`Observer`](../modules/reactive_storage.reactiveStorage.md#observer) | Observer. |

#### Returns

`void`

___

### watch

▸ `Readonly` **watch**<`T`\>(`obj`, `handler`, `reducer?`): [`Observer`](../modules/reactive_storage.reactiveStorage.md#observer)

Subscribes to changes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Reactive object. |
| `handler` | [`Handler`](reactive_storage.reactiveStorage.Handler.md)<`T`\> | Handles object change. |
| `reducer?` | [`Reducer`](reactive_storage.reactiveStorage.Reducer.md)<`T`\> | Reduces object for comparison. |

#### Returns

[`Observer`](../modules/reactive_storage.reactiveStorage.md#observer)

Observer.
