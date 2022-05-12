[Typescript facades](../index.md) / [Exports](../modules.md) / [handle-promise](../modules/handle_promise.md) / [handlePromise](../modules/handle_promise.handlePromise.md) / Facade

# Interface: Facade

[handle-promise](../modules/handle_promise.md).[handlePromise](../modules/handle_promise.handlePromise.md).Facade

## Table of contents

### Methods

- [runAll](handle_promise.handlePromise.Facade.md#runall)
- [running](handle_promise.handlePromise.Facade.md#running)
- [silent](handle_promise.handlePromise.Facade.md#silent)
- [verbose](handle_promise.handlePromise.Facade.md#verbose)

## Methods

### runAll

▸ `Readonly` **runAll**(): `Promise`<`void`\>

Waits for all promises.

#### Returns

`Promise`<`void`\>

Promise.

___

### running

▸ `Readonly` **running**(): `boolean`

Checks if there are active promises.

#### Returns

`boolean`

_True_ if there are active promises, _false_ otherwise.

___

### silent

▸ `Readonly` **silent**<`T`\>(`mixed`, `errorMessage?`): `void`

Handles promise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mixed` | `AsyncPromise`<`T`, `nevers`\> | Promise or async function. |
| `errorMessage?` | `string` | Error message (used to alert user on error). |

#### Returns

`void`

___

### verbose

▸ `Readonly` **verbose**<`T`\>(`mixed`, `type`, `errorMessage?`): `void`

Handles promise with progress reporting.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mixed` | `AsyncPromise`<`T`, `nevers`\> | Promise or async function. |
| `type` | [`Type`](../modules/handle_promise.handlePromise.md#type) | Type (determines expected duration for progress reporting). |
| `errorMessage?` | `string` | Error message (used to alert user on error). |

#### Returns

`void`
