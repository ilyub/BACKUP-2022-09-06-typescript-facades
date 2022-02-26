[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / ReactiveUpdateFn

# Interface: ReactiveUpdateFn<T\>

[database](../modules/database.md).ReactiveUpdateFn

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ReactiveUpdateFn

▸ **ReactiveUpdateFn**(`doc`): `boolean`

Determines whether reactive query should be updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | `T` | Received document. |

#### Returns

`boolean`

_True_ if query should be updated after receiving document, _false_ otherwise.
