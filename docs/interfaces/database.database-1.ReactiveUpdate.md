[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / [database](../modules/database.database-1.md) / ReactiveUpdate

# Interface: ReactiveUpdate<T\>

[database](../modules/database.md).[database](../modules/database.database-1.md).ReactiveUpdate

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ReactiveUpdate

▸ **ReactiveUpdate**(`doc`): `boolean`

Triggers reactive query update.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | `T` | Document received. |

#### Returns

`boolean`

_True_ to trigger update, _false_ otherwise.
