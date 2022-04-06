[Typescript facades](../index.md) / [Exports](../modules.md) / database

# Module: database

## Table of contents

### Interfaces

- [AttachedChangesHandler](../interfaces/database.AttachedChangesHandler.md)
- [BaseBulkAttachedDocument](../interfaces/database.BaseBulkAttachedDocument.md)
- [BaseExistingAttachedDocument](../interfaces/database.BaseExistingAttachedDocument.md)
- [BaseExistingDocument](../interfaces/database.BaseExistingDocument.md)
- [BasePutAttachedDocument](../interfaces/database.BasePutAttachedDocument.md)
- [BasePutDocument](../interfaces/database.BasePutDocument.md)
- [BaseStoredAttachedDocument](../interfaces/database.BaseStoredAttachedDocument.md)
- [BulkAttachedDocument](../interfaces/database.BulkAttachedDocument.md)
- [ChangesHandler](../interfaces/database.ChangesHandler.md)
- [Database](../interfaces/database.Database.md)
- [DatabaseOptions](../interfaces/database.DatabaseOptions.md)
- [ExistingAttachedDocument](../interfaces/database.ExistingAttachedDocument.md)
- [ExistingDocument](../interfaces/database.ExistingDocument.md)
- [Facade](../interfaces/database.Facade.md)
- [FieldConditions](../interfaces/database.FieldConditions.md)
- [Migration](../interfaces/database.Migration.md)
- [MigrationCallback](../interfaces/database.MigrationCallback.md)
- [PutAttachedDocument](../interfaces/database.PutAttachedDocument.md)
- [PutAttachedResponse](../interfaces/database.PutAttachedResponse.md)
- [PutDocument](../interfaces/database.PutDocument.md)
- [PutResponse](../interfaces/database.PutResponse.md)
- [QueryOptions](../interfaces/database.QueryOptions.md)
- [ReactiveConfig](../interfaces/database.ReactiveConfig.md)
- [ReactiveConfigAttached](../interfaces/database.ReactiveConfigAttached.md)
- [ReactiveRefresh](../interfaces/database.ReactiveRefresh.md)
- [ReactiveResponseBase](../interfaces/database.ReactiveResponseBase.md)
- [ReactiveResponseLoaded](../interfaces/database.ReactiveResponseLoaded.md)
- [ReactiveResponseLoading](../interfaces/database.ReactiveResponseLoading.md)
- [ReactiveUnsubscribe](../interfaces/database.ReactiveUnsubscribe.md)
- [ReactiveUpdate](../interfaces/database.ReactiveUpdate.md)
- [ResetCallback](../interfaces/database.ResetCallback.md)
- [StoredAttachedDocument](../interfaces/database.StoredAttachedDocument.md)

### Type aliases

- [AttachedSubscriptionId](database.md#attachedsubscriptionid)
- [BulkAttachedDocuments](database.md#bulkattacheddocuments)
- [Conditions](database.md#conditions)
- [ConditionsArray](database.md#conditionsarray)
- [ConditionsRecord](database.md#conditionsrecord)
- [DateCondition](database.md#datecondition)
- [DateConditionSign](database.md#dateconditionsign)
- [DateConditionType](database.md#dateconditiontype)
- [DateConditionUnit](database.md#dateconditionunit)
- [ExistingAttachedDocuments](database.md#existingattacheddocuments)
- [ExistingDocuments](database.md#existingdocuments)
- [Migrations](database.md#migrations)
- [PutAttachedDocuments](database.md#putattacheddocuments)
- [PutAttachedResponses](database.md#putattachedresponses)
- [PutDocuments](database.md#putdocuments)
- [PutResponses](database.md#putresponses)
- [ReactiveResponse](database.md#reactiveresponse)
- [StoredAttachedDocuments](database.md#storedattacheddocuments)
- [SubscriptionId](database.md#subscriptionid)

### Variables

- [database](database.md#database)

### Functions

- [uniqueAttachedSubscriptionId](database.md#uniqueattachedsubscriptionid)
- [uniqueSubscriptionId](database.md#uniquesubscriptionid)

## Type aliases

### AttachedSubscriptionId

Ƭ **AttachedSubscriptionId**: \`attached-subscription-id-${string}\`

___

### BulkAttachedDocuments

Ƭ **BulkAttachedDocuments**: readonly [`BulkAttachedDocument`](../interfaces/database.BulkAttachedDocument.md)[]

___

### Conditions

Ƭ **Conditions**<`T`\>: [`ConditionsArray`](database.md#conditionsarray)<`T`\> \| [`ConditionsRecord`](database.md#conditionsrecord)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### ConditionsArray

Ƭ **ConditionsArray**<`T`\>: `ReadonlyArray`<[`ConditionsRecord`](database.md#conditionsrecord)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### ConditionsRecord

Ƭ **ConditionsRecord**<`T`\>: `PartialRecord`<`T`, [`FieldConditions`](../interfaces/database.FieldConditions.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### DateCondition

Ƭ **DateCondition**: `string` \| readonly [[`DateConditionType`](database.md#dateconditiontype), [`DateConditionSign`](database.md#dateconditionsign), `number`, [`DateConditionUnit`](database.md#dateconditionunit)] \| readonly [[`DateConditionType`](database.md#dateconditiontype)]

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

Ƭ **ReactiveResponse**<`T`\>: [`ReactiveResponseLoaded`](../interfaces/database.ReactiveResponseLoaded.md)<`T`\> \| [`ReactiveResponseLoading`](../interfaces/database.ReactiveResponseLoading.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### StoredAttachedDocuments

Ƭ **StoredAttachedDocuments**: readonly [`StoredAttachedDocument`](../interfaces/database.StoredAttachedDocument.md)[]

___

### SubscriptionId

Ƭ **SubscriptionId**: \`subscription-id-${string}\`

## Variables

### database

• `Const` **database**: `Facade`<[`Facade`](../interfaces/database.Facade.md), `unknown`\>

## Functions

### uniqueAttachedSubscriptionId

▸ **uniqueAttachedSubscriptionId**(): [`AttachedSubscriptionId`](database.md#attachedsubscriptionid)

Generates unique attached subscription ID.

#### Returns

[`AttachedSubscriptionId`](database.md#attachedsubscriptionid)

Attached subscription ID.

___

### uniqueSubscriptionId

▸ **uniqueSubscriptionId**(): [`SubscriptionId`](database.md#subscriptionid)

Generates unique subscription ID.

#### Returns

[`SubscriptionId`](database.md#subscriptionid)

Subscription ID.
