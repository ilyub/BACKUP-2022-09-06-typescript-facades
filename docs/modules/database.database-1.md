[Typescript facades](../index.md) / [Exports](../modules.md) / [database](database.md) / database

# Namespace: database

[database](database.md).database

## Table of contents

### Interfaces

- [AttachedChangesHandler](../interfaces/database.database-1.AttachedChangesHandler.md)
- [BaseBulkAttachedDocument](../interfaces/database.database-1.BaseBulkAttachedDocument.md)
- [BaseExistingAttachedDocument](../interfaces/database.database-1.BaseExistingAttachedDocument.md)
- [BaseExistingDocument](../interfaces/database.database-1.BaseExistingDocument.md)
- [BasePutAttachedDocument](../interfaces/database.database-1.BasePutAttachedDocument.md)
- [BasePutDocument](../interfaces/database.database-1.BasePutDocument.md)
- [BaseStoredAttachedDocument](../interfaces/database.database-1.BaseStoredAttachedDocument.md)
- [BulkAttachedDocument](../interfaces/database.database-1.BulkAttachedDocument.md)
- [ChangesHandler](../interfaces/database.database-1.ChangesHandler.md)
- [Database](../interfaces/database.database-1.Database.md)
- [DatabaseOptions](../interfaces/database.database-1.DatabaseOptions.md)
- [ExistingAttachedDocument](../interfaces/database.database-1.ExistingAttachedDocument.md)
- [ExistingDocument](../interfaces/database.database-1.ExistingDocument.md)
- [Extension](../interfaces/database.database-1.Extension.md)
- [Facade](../interfaces/database.database-1.Facade.md)
- [FieldConditions](../interfaces/database.database-1.FieldConditions.md)
- [Migration](../interfaces/database.database-1.Migration.md)
- [MigrationCallback](../interfaces/database.database-1.MigrationCallback.md)
- [PutAttachedDocument](../interfaces/database.database-1.PutAttachedDocument.md)
- [PutAttachedResponse](../interfaces/database.database-1.PutAttachedResponse.md)
- [PutDocument](../interfaces/database.database-1.PutDocument.md)
- [PutResponse](../interfaces/database.database-1.PutResponse.md)
- [QueryOptions](../interfaces/database.database-1.QueryOptions.md)
- [ReactiveConfig](../interfaces/database.database-1.ReactiveConfig.md)
- [ReactiveConfigAttached](../interfaces/database.database-1.ReactiveConfigAttached.md)
- [ReactiveRefresh](../interfaces/database.database-1.ReactiveRefresh.md)
- [ReactiveResponseBase](../interfaces/database.database-1.ReactiveResponseBase.md)
- [ReactiveResponseLoaded](../interfaces/database.database-1.ReactiveResponseLoaded.md)
- [ReactiveResponseLoading](../interfaces/database.database-1.ReactiveResponseLoading.md)
- [ReactiveUnsubscribe](../interfaces/database.database-1.ReactiveUnsubscribe.md)
- [ReactiveUpdate](../interfaces/database.database-1.ReactiveUpdate.md)
- [ResetCallback](../interfaces/database.database-1.ResetCallback.md)

### Type Aliases

- [AttachedSubscriptionId](database.database-1.md#attachedsubscriptionid)
- [BaseBulkAttachedDocuments](database.database-1.md#basebulkattacheddocuments)
- [BaseExistingAttachedDocuments](database.database-1.md#baseexistingattacheddocuments)
- [BaseExistingDocuments](database.database-1.md#baseexistingdocuments)
- [BasePutAttachedDocuments](database.database-1.md#baseputattacheddocuments)
- [BasePutDocuments](database.database-1.md#baseputdocuments)
- [BaseStoredAttachedDocuments](database.database-1.md#basestoredattacheddocuments)
- [BulkAttachedDocuments](database.database-1.md#bulkattacheddocuments)
- [Conditions](database.database-1.md#conditions)
- [ConditionsArray](database.database-1.md#conditionsarray)
- [ConditionsRecord](database.database-1.md#conditionsrecord)
- [DateCondition](database.database-1.md#datecondition)
- [DateConditionSign](database.database-1.md#dateconditionsign)
- [DateConditionType](database.database-1.md#dateconditiontype)
- [DateConditionUnit](database.database-1.md#dateconditionunit)
- [ExistingAttachedDocuments](database.database-1.md#existingattacheddocuments)
- [ExistingDocuments](database.database-1.md#existingdocuments)
- [Migrations](database.database-1.md#migrations)
- [PutAttachedDocuments](database.database-1.md#putattacheddocuments)
- [PutAttachedResponses](database.database-1.md#putattachedresponses)
- [PutDocuments](database.database-1.md#putdocuments)
- [PutResponses](database.database-1.md#putresponses)
- [ReactiveResponse](database.database-1.md#reactiveresponse)
- [SubscriptionId](database.database-1.md#subscriptionid)

## Type Aliases

### AttachedSubscriptionId

Ƭ **AttachedSubscriptionId**: \`attached-subscription-id-${string}\`

___

### BaseBulkAttachedDocuments

Ƭ **BaseBulkAttachedDocuments**: readonly [`BaseBulkAttachedDocument`](../interfaces/database.database-1.BaseBulkAttachedDocument.md)[]

___

### BaseExistingAttachedDocuments

Ƭ **BaseExistingAttachedDocuments**: readonly [`BaseExistingAttachedDocument`](../interfaces/database.database-1.BaseExistingAttachedDocument.md)[]

___

### BaseExistingDocuments

Ƭ **BaseExistingDocuments**: readonly [`BaseExistingDocument`](../interfaces/database.database-1.BaseExistingDocument.md)[]

___

### BasePutAttachedDocuments

Ƭ **BasePutAttachedDocuments**: readonly [`BasePutAttachedDocument`](../interfaces/database.database-1.BasePutAttachedDocument.md)[]

___

### BasePutDocuments

Ƭ **BasePutDocuments**: readonly [`BasePutDocument`](../interfaces/database.database-1.BasePutDocument.md)[]

___

### BaseStoredAttachedDocuments

Ƭ **BaseStoredAttachedDocuments**: readonly [`BaseStoredAttachedDocument`](../interfaces/database.database-1.BaseStoredAttachedDocument.md)[]

___

### BulkAttachedDocuments

Ƭ **BulkAttachedDocuments**: readonly [`BulkAttachedDocument`](../interfaces/database.database-1.BulkAttachedDocument.md)[]

___

### Conditions

Ƭ **Conditions**<`T`\>: [`ConditionsArray`](database.database-1.md#conditionsarray)<`T`\> \| [`ConditionsRecord`](database.database-1.md#conditionsrecord)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### ConditionsArray

Ƭ **ConditionsArray**<`T`\>: `ReadonlyArray`<[`ConditionsRecord`](database.database-1.md#conditionsrecord)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### ConditionsRecord

Ƭ **ConditionsRecord**<`T`\>: `PartialRecord`<`T`, [`FieldConditions`](../interfaces/database.database-1.FieldConditions.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### DateCondition

Ƭ **DateCondition**: `string` \| readonly [[`DateConditionType`](database.database-1.md#dateconditiontype), [`DateConditionSign`](database.database-1.md#dateconditionsign), `number`, [`DateConditionUnit`](database.database-1.md#dateconditionunit)] \| readonly [[`DateConditionType`](database.database-1.md#dateconditiontype)]

___

### DateConditionSign

Ƭ **DateConditionSign**: ``"-"`` \| ``"+"``

___

### DateConditionType

Ƭ **DateConditionType**: ``"endOfDay"`` \| ``"endOfHour"`` \| ``"endOfMonth"`` \| ``"endOfWeek"`` \| ``"now"`` \| ``"startOfDay"`` \| ``"startOfHour"`` \| ``"startOfMonth"`` \| ``"startOfWeek"``

___

### DateConditionUnit

Ƭ **DateConditionUnit**: ``"day"`` \| ``"days"`` \| ``"hour"`` \| ``"hours"`` \| ``"minute"`` \| ``"minutes"``

___

### ExistingAttachedDocuments

Ƭ **ExistingAttachedDocuments**: readonly [`ExistingAttachedDocument`](../interfaces/database.database-1.ExistingAttachedDocument.md)[]

___

### ExistingDocuments

Ƭ **ExistingDocuments**: readonly [`ExistingDocument`](../interfaces/database.database-1.ExistingDocument.md)[]

___

### Migrations

Ƭ **Migrations**: readonly [`Migration`](../interfaces/database.database-1.Migration.md)[]

___

### PutAttachedDocuments

Ƭ **PutAttachedDocuments**: readonly [`PutAttachedDocument`](../interfaces/database.database-1.PutAttachedDocument.md)[]

___

### PutAttachedResponses

Ƭ **PutAttachedResponses**: readonly [`PutAttachedResponse`](../interfaces/database.database-1.PutAttachedResponse.md)[]

___

### PutDocuments

Ƭ **PutDocuments**: readonly [`PutDocument`](../interfaces/database.database-1.PutDocument.md)[]

___

### PutResponses

Ƭ **PutResponses**: readonly [`PutResponse`](../interfaces/database.database-1.PutResponse.md)[]

___

### ReactiveResponse

Ƭ **ReactiveResponse**<`T`\>: [`ReactiveResponseLoaded`](../interfaces/database.database-1.ReactiveResponseLoaded.md)<`T`\> \| [`ReactiveResponseLoading`](../interfaces/database.database-1.ReactiveResponseLoading.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### SubscriptionId

Ƭ **SubscriptionId**: \`subscription-id-${string}\`
