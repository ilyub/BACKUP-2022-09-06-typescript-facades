[Typescript facades](../index.md) / [Exports](../modules.md) / [showConfirm](../modules/showConfirm.md) / [showConfirm](../modules/showConfirm.showConfirm-1.md) / Facade

# Interface: Facade

[showConfirm](../modules/showConfirm.md).[showConfirm](../modules/showConfirm.showConfirm-1.md).Facade

## Callable

### Facade

▸ **Facade**(`message`, `success?`, `failure?`): `void`

Shows confirmation dialog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message. |
| `success?` | () => `void` | Success callback. |
| `failure?` | () => `void` | Failure callback. |

#### Returns

`void`

## Table of contents

### Methods

- [async](showConfirm.showConfirm-1.Facade.md#async)

## Methods

### async

▸ `Readonly` **async**(`message`): `Promise`<`boolean`\>

Shows confirmation dialog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message. |

#### Returns

`Promise`<`boolean`\>

_True_ if accepted, _false_ if rejected.
