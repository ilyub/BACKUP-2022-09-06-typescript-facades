[Typescript facades](../index.md) / [Exports](../modules.md) / [progress-reporter](../modules/progress_reporter.md) / [progressReporter](../modules/progress_reporter.progressReporter.md) / Process

# Interface: Process

[progress-reporter](../modules/progress_reporter.md).[progressReporter](../modules/progress_reporter.progressReporter.md).Process

## Table of contents

### Methods

- [done](progress_reporter.progressReporter.Process.md#done)
- [setAuto](progress_reporter.progressReporter.Process.md#setauto)
- [setProgress](progress_reporter.progressReporter.Process.md#setprogress)
- [setWeight](progress_reporter.progressReporter.Process.md#setweight)

## Methods

### done

▸ `Readonly` **done**(): [`Process`](progress_reporter.progressReporter.Process.md)

Marks process as done.

#### Returns

[`Process`](progress_reporter.progressReporter.Process.md)

Self.

___

### setAuto

▸ `Readonly` **setAuto**(`expectedDuration`): [`Process`](progress_reporter.progressReporter.Process.md)

Auto-grows progress.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedDuration` | `number` | Expected duration in milliseconds. |

#### Returns

[`Process`](progress_reporter.progressReporter.Process.md)

Self.

___

### setProgress

▸ `Readonly` **setProgress**(`value`): [`Process`](progress_reporter.progressReporter.Process.md)

Sets progress.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | A number between 0 and 1. |

#### Returns

[`Process`](progress_reporter.progressReporter.Process.md)

Self.

___

### setWeight

▸ `Readonly` **setWeight**(`value`): [`Process`](progress_reporter.progressReporter.Process.md)

Sets weight.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | A number between 0 and 1. |

#### Returns

[`Process`](progress_reporter.progressReporter.Process.md)

Self.
