[Typescript facades](../index.md) / [Exports](../modules.md) / database

# Module: database

## Table of contents

### Interfaces

- [AttachedChangesHandler](../interfaces/database.AttachedChangesHandler.md)
- [ChangesHandler](../interfaces/database.ChangesHandler.md)
- [Condition](../interfaces/database.Condition.md)
- [Database](../interfaces/database.Database.md)
- [DatabaseOptions](../interfaces/database.DatabaseOptions.md)
- [ExistingAttachedDocument](../interfaces/database.ExistingAttachedDocument.md)
- [ExistingDocument](../interfaces/database.ExistingDocument.md)
- [Facade](../interfaces/database.Facade.md)
- [Migration](../interfaces/database.Migration.md)
- [MigrationCallback](../interfaces/database.MigrationCallback.md)
- [PutAttachedDocument](../interfaces/database.PutAttachedDocument.md)
- [PutAttachedResponse](../interfaces/database.PutAttachedResponse.md)
- [PutDocument](../interfaces/database.PutDocument.md)
- [PutResponse](../interfaces/database.PutResponse.md)
- [QueryOptions](../interfaces/database.QueryOptions.md)
- [ReactiveConfig](../interfaces/database.ReactiveConfig.md)
- [ReactiveConfigAttached](../interfaces/database.ReactiveConfigAttached.md)
- [ReactiveResponseAsync](../interfaces/database.ReactiveResponseAsync.md)
- [ReactiveResponseLoading](../interfaces/database.ReactiveResponseLoading.md)
- [ReactiveUnsubscribe](../interfaces/database.ReactiveUnsubscribe.md)
- [ReactiveUpdateFn](../interfaces/database.ReactiveUpdateFn.md)
- [ResetCallback](../interfaces/database.ResetCallback.md)
- [StoredAttachedDocument](../interfaces/database.StoredAttachedDocument.md)

### Type aliases

- [Conditions](database.md#conditions)
- [ExistingAttachedDocuments](database.md#existingattacheddocuments)
- [ExistingDocuments](database.md#existingdocuments)
- [Migrations](database.md#migrations)
- [PutAttachedDocuments](database.md#putattacheddocuments)
- [PutAttachedResponses](database.md#putattachedresponses)
- [PutDocuments](database.md#putdocuments)
- [PutResponses](database.md#putresponses)
- [ReactiveResponse](database.md#reactiveresponse)
- [StoredAttachedDocuments](database.md#storedattacheddocuments)

### Variables

- [database](database.md#database)

### Functions

- [isCondition](database.md#iscondition)
- [isConditions](database.md#isconditions)
- [isStoredAttachedDocument](database.md#isstoredattacheddocument)
- [isStoredAttachedDocuments](database.md#isstoredattacheddocuments)

## Type aliases

### Conditions

Ƭ **Conditions**: `ReadonlyRecord`<`string`, [`Condition`](../interfaces/database.Condition.md)\>

___

### ExistingAttachedDocuments

Ƭ **ExistingAttachedDocuments**: readonly [`ExistingAttachedDocument`](../interfaces/database.ExistingAttachedDocument.md)[]

___

### ExistingDocuments

Ƭ **ExistingDocuments**: readonly [`ExistingDocument`](../interfaces/database.ExistingDocument.md)[]

___

### Migrations

Ƭ **Migrations**: readonly [`Migration`](../interfaces/database.Migration.md)[]

___

### PutAttachedDocuments

Ƭ **PutAttachedDocuments**: readonly [`PutAttachedDocument`](../interfaces/database.PutAttachedDocument.md)[]

___

### PutAttachedResponses

Ƭ **PutAttachedResponses**: readonly [`PutAttachedResponse`](../interfaces/database.PutAttachedResponse.md)[]

___

### PutDocuments

Ƭ **PutDocuments**: readonly [`PutDocument`](../interfaces/database.PutDocument.md)[]

___

### PutResponses

Ƭ **PutResponses**: readonly [`PutResponse`](../interfaces/database.PutResponse.md)[]

___

### ReactiveResponse

Ƭ **ReactiveResponse**<`T`\>: [`ReactiveResponseAsync`](../interfaces/database.ReactiveResponseAsync.md)<`T`\> \| [`ReactiveResponseLoading`](../interfaces/database.ReactiveResponseLoading.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### StoredAttachedDocuments

Ƭ **StoredAttachedDocuments**: readonly [`StoredAttachedDocument`](../interfaces/database.StoredAttachedDocument.md)[]

## Variables

### database

• `Const` **database**: `Facade`<[`Facade`](../interfaces/database.Facade.md), `unknown`\>

## Functions

### isCondition

▸ **isCondition**(`value`): value is Condition

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Condition

___

### isConditions

▸ **isConditions**(`value`): value is Readonly<IndexedObject<Condition\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Readonly<IndexedObject<Condition\>\>

___

### isStoredAttachedDocument

▸ **isStoredAttachedDocument**(`value`): value is Partial<unknown\> & Required<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Partial<unknown\> & Required<Object\>

___

### isStoredAttachedDocuments

▸ **isStoredAttachedDocuments**(`value`): value is readonly (Partial<unknown\> & Required<Object\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly (Partial<unknown\> & Required<Object\>)[]
