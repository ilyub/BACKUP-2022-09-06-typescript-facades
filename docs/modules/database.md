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
- [ConditionsGroup](database.md#conditionsgroup)
- [ConditionsGroups](database.md#conditionsgroups)
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

- [isConditions](database.md#isconditions)
- [isConditionsFactory](database.md#isconditionsfactory)
- [isConditionsGroup](database.md#isconditionsgroup)
- [isConditionsGroupFactory](database.md#isconditionsgroupfactory)
- [isConditionsGroups](database.md#isconditionsgroups)
- [isConditionsGroupsFactory](database.md#isconditionsgroupsfactory)
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

Ƭ **Conditions**<`T`\>: [`ConditionsGroup`](database.md#conditionsgroup)<`T`\> \| [`ConditionsGroups`](database.md#conditionsgroups)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### ConditionsGroup

Ƭ **ConditionsGroup**<`T`\>: `ReadonlyRecord`<`T`, [`FieldConditions`](../interfaces/database.FieldConditions.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

___

### ConditionsGroups

Ƭ **ConditionsGroups**<`T`\>: `ReadonlyArray`<[`ConditionsGroup`](database.md#conditionsgroup)<`T`\>\>

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

Ƭ **ReactiveResponse**<`T`\>: [`ReactiveResponseAsync`](../interfaces/database.ReactiveResponseAsync.md)<`T`\> \| [`ReactiveResponseLoading`](../interfaces/database.ReactiveResponseLoading.md)

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

### isConditions

▸ **isConditions**(`value`): value is Conditions<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Conditions<string\>

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

### isConditionsGroup

▸ **isConditionsGroup**(`value`): value is Readonly<Record<string, FieldConditions\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Readonly<Record<string, FieldConditions\>\>

___

### isConditionsGroupFactory

▸ **isConditionsGroupFactory**<`T`\>(`_guard`): `is.Guard`<[`ConditionsGroup`](database.md#conditionsgroup)\>

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

`is.Guard`<[`ConditionsGroup`](database.md#conditionsgroup)\>

Conditions guard.

___

### isConditionsGroups

▸ **isConditionsGroups**(`value`): value is ConditionsGroups<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is ConditionsGroups<string\>

___

### isConditionsGroupsFactory

▸ **isConditionsGroupsFactory**<`T`\>(`_guard`): `is.Guard`<[`ConditionsGroups`](database.md#conditionsgroups)\>

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

`is.Guard`<[`ConditionsGroups`](database.md#conditionsgroups)\>

Conditions guard.

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
