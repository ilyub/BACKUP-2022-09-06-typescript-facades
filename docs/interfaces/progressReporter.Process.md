[Typescript facades](../index.md) / [Exports](../modules.md) / [progressReporter](../modules/progressReporter.md) / Process

# Interface: Process

[progressReporter](../modules/progressReporter.md).Process

## Table of contents

### Methods

- [done](progressReporter.Process.md#done)
- [setAuto](progressReporter.Process.md#setauto)
- [setProgress](progressReporter.Process.md#setprogress)
- [setWeight](progressReporter.Process.md#setweight)

## Methods

### done

▸ `Readonly` **done**(): [`Process`](progressReporter.Process.md)

Marks process as done.

#### Returns

[`Process`](progressReporter.Process.md)

Self.

___

### setAuto

▸ `Readonly` **setAuto**(`expectedDuration`): [`Process`](progressReporter.Process.md)

Auto-grows progress.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedDuration` | `number` | Expected duration in milliseconds. |

#### Returns

[`Process`](progressReporter.Process.md)

Self.

___

### setProgress

▸ `Readonly` **setProgress**(`value`): [`Process`](progressReporter.Process.md)

Sets progress.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | A number between 0 and 1. |

#### Returns

[`Process`](progressReporter.Process.md)

Self.

___

### setWeight

▸ `Readonly` **setWeight**(`value`): [`Process`](progressReporter.Process.md)

Sets weight.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | A number between 0 and 1. |

#### Returns

[`Process`](progressReporter.Process.md)

Self.
