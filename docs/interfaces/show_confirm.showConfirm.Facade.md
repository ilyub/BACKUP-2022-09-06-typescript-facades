[Typescript facades](../index.md) / [Exports](../modules.md) / [show-confirm](../modules/show_confirm.md) / [showConfirm](../modules/show_confirm.showConfirm.md) / Facade

# Interface: Facade

[show-confirm](../modules/show_confirm.md).[showConfirm](../modules/show_confirm.showConfirm.md).Facade

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

### Properties

- [async](show_confirm.showConfirm.Facade.md#async)

## Properties

### async

• `Readonly` **async**: (`message`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`message`): `Promise`<`boolean`\>

Shows confirmation dialog.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | Message. |

##### Returns

`Promise`<`boolean`\>

_True_ if accepted, _false_ if rejected.
