[Typescript facades](../index.md) / [Exports](../modules.md) / database

# Module: database

## Table of contents

### Interfaces

- [AttachedChangesHandler](../interfaces/database.AttachedChangesHandler.md)
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
- [ReactiveResponseAsync](../interfaces/database.ReactiveResponseAsync.md)
- [ReactiveResponseLoading](../interfaces/database.ReactiveResponseLoading.md)
- [ReactiveUnsubscribe](../interfaces/database.ReactiveUnsubscribe.md)
- [ReactiveUpdateFn](../interfaces/database.ReactiveUpdateFn.md)
- [ResetCallback](../interfaces/database.ResetCallback.md)
- [StoredAttachedDocument](../interfaces/database.StoredAttachedDocument.md)

### Type aliases

- [AttachedSubscriptionId](database.md#attachedsubscriptionid)
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

- [DateConditionSignVO](database.md#dateconditionsignvo)
- [DateConditionTypeVO](database.md#dateconditiontypevo)
- [DateConditionUnitVO](database.md#dateconditionunitvo)
- [database](database.md#database)

### Functions

- [isConditions](database.md#isconditions)
- [isConditionsArray](database.md#isconditionsarray)
- [isConditionsArrayFactory](database.md#isconditionsarrayfactory)
- [isConditionsFactory](database.md#isconditionsfactory)
- [isConditionsRecord](database.md#isconditionsrecord)
- [isConditionsRecordFactory](database.md#isconditionsrecordfactory)
- [isDateCondition](database.md#isdatecondition)
- [isDateConditionSign](database.md#isdateconditionsign)
- [isDateConditionType](database.md#isdateconditiontype)
- [isDateConditionUnit](database.md#isdateconditionunit)
- [isFieldConditions](database.md#isfieldconditions)
- [isFieldConditionsFactory](database.md#isfieldconditionsfactory)
- [isStoredAttachedDocument](database.md#isstoredattacheddocument)
- [isStoredAttachedDocuments](database.md#isstoredattacheddocuments)
- [uniqueAttachedSubscriptionId](database.md#uniqueattachedsubscriptionid)
- [uniqueSubscriptionId](database.md#uniquesubscriptionid)

## Type aliases

### AttachedSubscriptionId

Ƭ **AttachedSubscriptionId**: \`attached-subscription-id-${string}\`

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

Ƭ **ConditionsRecord**<`T`\>: `PartialTypedObject`<`T`, [`FieldConditions`](../interfaces/database.FieldConditions.md)\>

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

Ƭ **ReactiveResponse**<`T`\>: [`ReactiveResponseAsync`](../interfaces/database.ReactiveResponseAsync.md)<`T`\> \| [`ReactiveResponseLoading`](../interfaces/database.ReactiveResponseLoading.md)<`T`\>

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

### DateConditionSignVO

• `Const` **DateConditionSignVO**: `ValidationObject`<[`DateConditionSign`](database.md#dateconditionsign)\>

___

### DateConditionTypeVO

• `Const` **DateConditionTypeVO**: `ValidationObject`<[`DateConditionType`](database.md#dateconditiontype)\>

___

### DateConditionUnitVO

• `Const` **DateConditionUnitVO**: `ValidationObject`<[`DateConditionUnit`](database.md#dateconditionunit)\>

___

### database

• `Const` **database**: `Facade`<[`Facade`](../interfaces/database.Facade.md), `unknown`\>

## Functions

### isConditions

▸ **isConditions**(`value`): value is Conditions<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Conditions<string\>

___

### isConditionsArray

▸ **isConditionsArray**(`value`): value is ConditionsArray<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is ConditionsArray<string\>

___

### isConditionsArrayFactory

▸ **isConditionsArrayFactory**<`T`\>(`_guard`): `is.Guard`<[`ConditionsArray`](database.md#conditionsarray)\>

Creates conditions guard.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_guard` | `Guard`<`T`\> | Guard. |

#### Returns

`is.Guard`<[`ConditionsArray`](database.md#conditionsarray)\>

Conditions guard.

___

### isConditionsFactory

▸ **isConditionsFactory**<`T`\>(`_guard`): `is.Guard`<[`Conditions`](database.md#conditions)\>

Creates conditions guard.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_guard` | `Guard`<`T`\> | Guard. |

#### Returns

`is.Guard`<[`Conditions`](database.md#conditions)\>

Conditions guard.

___

### isConditionsRecord

▸ **isConditionsRecord**(`value`): value is ConditionsRecord<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is ConditionsRecord<string\>

___

### isConditionsRecordFactory

▸ **isConditionsRecordFactory**<`T`\>(`_guard`): `is.Guard`<[`ConditionsRecord`](database.md#conditionsrecord)\>

Creates conditions guard.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_guard` | `Guard`<`T`\> | Guard. |

#### Returns

`is.Guard`<[`ConditionsRecord`](database.md#conditionsrecord)\>

Conditions guard.

___

### isDateCondition

▸ **isDateCondition**(`value`): value is DateCondition

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is DateCondition

___

### isDateConditionSign

▸ **isDateConditionSign**(`value`): value is DateConditionSign

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is DateConditionSign

___

### isDateConditionType

▸ **isDateConditionType**(`value`): value is DateConditionType

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is DateConditionType

___

### isDateConditionUnit

▸ **isDateConditionUnit**(`value`): value is DateConditionUnit

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is DateConditionUnit

___

### isFieldConditions

▸ **isFieldConditions**(`value`): value is FieldConditions

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is FieldConditions

___

### isFieldConditionsFactory

▸ **isFieldConditionsFactory**<`T`\>(`_guard`): `is.Guard`<[`FieldConditions`](../interfaces/database.FieldConditions.md)\>

Creates conditions guard.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_guard` | `Guard`<`T`\> | Guard. |

#### Returns

`is.Guard`<[`FieldConditions`](../interfaces/database.FieldConditions.md)\>

Conditions guard.

___

### isStoredAttachedDocument

▸ **isStoredAttachedDocument**(`value`): value is object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is object

___

### isStoredAttachedDocuments

▸ **isStoredAttachedDocuments**(`value`): value is readonly object[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly object[]

___

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
