[Typescript facades](../index.md) / [Exports](../modules.md) / handle-promise

# Module: handle-promise

## Table of contents

### Namespaces

- [handlePromise](handle_promise.handlePromise.md)

### Functions

- [handlePromise](handle_promise.md#handlepromise)

## Functions

### handlePromise

▸ **handlePromise**<`T`\>(`type`, `mixed`, `errorMessage?`): `void`

Handles promise with progress reporting.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `undefined` \| [`PromiseType`](../enums/types.PromiseType.md) | Type (determines expected duration for progress reporting). |
| `mixed` | `AsyncPromise`<`T`, `nevers`\> | Promise or async function. |
| `errorMessage?` | `string` | Error message (used to alert user on error). |

#### Returns

`void`
