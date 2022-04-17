[Typescript facades](../index.md) / [Exports](../modules.md) / [progressReporter](../modules/progressReporter.md) / [progressReporter](../modules/progressReporter.progressReporter-1.md) / Process

# Interface: Process

[progressReporter](../modules/progressReporter.md).[progressReporter](../modules/progressReporter.progressReporter-1.md).Process

## Table of contents

### Methods

- [done](progressReporter.progressReporter-1.Process.md#done)
- [setAuto](progressReporter.progressReporter-1.Process.md#setauto)
- [setProgress](progressReporter.progressReporter-1.Process.md#setprogress)
- [setWeight](progressReporter.progressReporter-1.Process.md#setweight)

## Methods

### done

▸ `Readonly` **done**(): [`Process`](progressReporter.progressReporter-1.Process.md)

Marks process as done.

#### Returns

[`Process`](progressReporter.progressReporter-1.Process.md)

Self.

___

### setAuto

▸ `Readonly` **setAuto**(`expectedDuration`): [`Process`](progressReporter.progressReporter-1.Process.md)

Auto-grows progress.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedDuration` | `number` | Expected duration in milliseconds. |

#### Returns

[`Process`](progressReporter.progressReporter-1.Process.md)

Self.

___

### setProgress

▸ `Readonly` **setProgress**(`value`): [`Process`](progressReporter.progressReporter-1.Process.md)

Sets progress.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | A number between 0 and 1. |

#### Returns

[`Process`](progressReporter.progressReporter-1.Process.md)

Self.

___

### setWeight

▸ `Readonly` **setWeight**(`value`): [`Process`](progressReporter.progressReporter-1.Process.md)

Sets weight.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | A number between 0 and 1. |

#### Returns

[`Process`](progressReporter.progressReporter-1.Process.md)

Self.
