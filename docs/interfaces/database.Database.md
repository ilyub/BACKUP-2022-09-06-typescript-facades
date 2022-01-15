[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / Database

# Interface: Database

[database](../modules/database.md).Database

## Table of contents

### Methods

- [bulkDocs](database.Database.md#bulkdocs)
- [count](database.Database.md#count)
- [countAttached](database.Database.md#countattached)
- [exists](database.Database.md#exists)
- [existsAttached](database.Database.md#existsattached)
- [get](database.Database.md#get)
- [getAttached](database.Database.md#getattached)
- [getAttachedIfExists](database.Database.md#getattachedifexists)
- [getIfExists](database.Database.md#getifexists)
- [put](database.Database.md#put)
- [putAttached](database.Database.md#putattached)
- [putAttachedIfNotExists](database.Database.md#putattachedifnotexists)
- [putIfNotExists](database.Database.md#putifnotexists)
- [query](database.Database.md#query)
- [queryAttached](database.Database.md#queryattached)
- [reactiveCount](database.Database.md#reactivecount)
- [reactiveCountAsync](database.Database.md#reactivecountasync)
- [reactiveCountAttached](database.Database.md#reactivecountattached)
- [reactiveCountAttachedAsync](database.Database.md#reactivecountattachedasync)
- [reactiveExists](database.Database.md#reactiveexists)
- [reactiveExistsAsync](database.Database.md#reactiveexistsasync)
- [reactiveExistsAttached](database.Database.md#reactiveexistsattached)
- [reactiveExistsAttachedAsync](database.Database.md#reactiveexistsattachedasync)
- [reactiveGet](database.Database.md#reactiveget)
- [reactiveGetAsync](database.Database.md#reactivegetasync)
- [reactiveGetAttached](database.Database.md#reactivegetattached)
- [reactiveGetAttachedAsync](database.Database.md#reactivegetattachedasync)
- [reactiveGetAttachedIfExists](database.Database.md#reactivegetattachedifexists)
- [reactiveGetAttachedIfExistsAsync](database.Database.md#reactivegetattachedifexistsasync)
- [reactiveGetIfExists](database.Database.md#reactivegetifexists)
- [reactiveGetIfExistsAsync](database.Database.md#reactivegetifexistsasync)
- [reactiveQuery](database.Database.md#reactivequery)
- [reactiveQueryAsync](database.Database.md#reactivequeryasync)
- [reactiveQueryAttached](database.Database.md#reactivequeryattached)
- [reactiveQueryAttachedAsync](database.Database.md#reactivequeryattachedasync)
- [reactiveUnsettled](database.Database.md#reactiveunsettled)
- [reactiveUnsettledAsync](database.Database.md#reactiveunsettledasync)
- [reactiveUnsettledAttached](database.Database.md#reactiveunsettledattached)
- [reactiveUnsettledAttachedAsync](database.Database.md#reactiveunsettledattachedasync)
- [reset](database.Database.md#reset)
- [subscribe](database.Database.md#subscribe)
- [subscribeAttached](database.Database.md#subscribeattached)
- [unsettled](database.Database.md#unsettled)
- [unsettledAttached](database.Database.md#unsettledattached)
- [unsubscribe](database.Database.md#unsubscribe)
- [unsubscribeAttached](database.Database.md#unsubscribeattached)

## Methods

### bulkDocs

▸ `Readonly` **bulkDocs**(`docs`): `Promise`<[`PutResponses`](../modules/database.md#putresponses)\>

Creates or updates multiple documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docs` | [`PutDocuments`](../modules/database.md#putdocuments) | Documents. |

#### Returns

`Promise`<[`PutResponses`](../modules/database.md#putresponses)\>

Responses.

___

### count

▸ `Readonly` **count**(`conditions?`): `Promise`<`number`\>

Counts documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |

#### Returns

`Promise`<`number`\>

The number of documents.

___

### countAttached

▸ `Readonly` **countAttached**(`conditions?`, `parentConditions?`): `Promise`<`number`\>

Counts attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |
| `parentConditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Parent conditions. |

#### Returns

`Promise`<`number`\>

The number of attached documents.

___

### exists

▸ `Readonly` **exists**(`id`): `Promise`<`boolean`\>

Checks if document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

`Promise`<`boolean`\>

_True_ if document exists, _false_ otherwise.

___

### existsAttached

▸ `Readonly` **existsAttached**(`id`, `parentId`): `Promise`<`boolean`\>

Checks if attached document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<`boolean`\>

_True_ if attached document exists, _false_ otherwise.

___

### get

▸ `Readonly` **get**(`id`): `Promise`<[`ExistingDocument`](database.ExistingDocument.md)\>

Fetches document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

`Promise`<[`ExistingDocument`](database.ExistingDocument.md)\>

Document.

___

### getAttached

▸ `Readonly` **getAttached**(`id`, `parentId`): `Promise`<[`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

Fetches attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<[`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

Attached document.

___

### getAttachedIfExists

▸ `Readonly` **getAttachedIfExists**(`id`, `parentId`): `Promise`<`undefined` \| [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

Fetches attached document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<`undefined` \| [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

Attached document if exists, _undefined_ otherwise.

___

### getIfExists

▸ `Readonly` **getIfExists**(`id`): `Promise`<`undefined` \| [`ExistingDocument`](database.ExistingDocument.md)\>

Fetches document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

`Promise`<`undefined` \| [`ExistingDocument`](database.ExistingDocument.md)\>

Document if exists, _undefined_ otherwise.

___

### put

▸ `Readonly` **put**(`doc`): `Promise`<[`PutResponse`](database.PutResponse.md)\>

Puts document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`PutDocument`](database.PutDocument.md) | Document. |

#### Returns

`Promise`<[`PutResponse`](database.PutResponse.md)\>

Response.

___

### putAttached

▸ `Readonly` **putAttached**(`parentId`, `doc`): `Promise`<[`PutAttachedResponse`](database.PutAttachedResponse.md)\>

Puts attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `doc` | [`PutAttachedDocument`](database.PutAttachedDocument.md) | Attached document. |

#### Returns

`Promise`<[`PutAttachedResponse`](database.PutAttachedResponse.md)\>

Response.

___

### putAttachedIfNotExists

▸ `Readonly` **putAttachedIfNotExists**(`parentId`, `doc`): `Promise`<`undefined` \| [`PutAttachedResponse`](database.PutAttachedResponse.md)\>

Puts attached document if not exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `doc` | [`PutAttachedDocument`](database.PutAttachedDocument.md) | Attached document. |

#### Returns

`Promise`<`undefined` \| [`PutAttachedResponse`](database.PutAttachedResponse.md)\>

Response.

___

### putIfNotExists

▸ `Readonly` **putIfNotExists**(`doc`): `Promise`<`undefined` \| [`PutResponse`](database.PutResponse.md)\>

Puts document if not exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`PutDocument`](database.PutDocument.md) | Document. |

#### Returns

`Promise`<`undefined` \| [`PutResponse`](database.PutResponse.md)\>

Response.

___

### query

▸ `Readonly` **query**(`conditions?`, `options?`): `Promise`<[`ExistingDocuments`](../modules/database.md#existingdocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |
| `options?` | [`QueryOptions`](database.QueryOptions.md) | Options. |

#### Returns

`Promise`<[`ExistingDocuments`](../modules/database.md#existingdocuments)\>

Documents.

___

### queryAttached

▸ `Readonly` **queryAttached**(`conditions?`, `parentConditions?`, `options?`): `Promise`<[`ExistingAttachedDocuments`](../modules/database.md#existingattacheddocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |
| `parentConditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Parent conditions. |
| `options?` | [`QueryOptions`](database.QueryOptions.md) | Options. |

#### Returns

`Promise`<[`ExistingAttachedDocuments`](../modules/database.md#existingattacheddocuments)\>

Attached documents.

___

### reactiveCount

▸ `Readonly` **reactiveCount**(`config`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`number`\>

Counts documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.ReactiveConfig.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`number`\>

The number of documents.

___

### reactiveCountAsync

▸ `Readonly` **reactiveCountAsync**(`config`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`number`\>\>

Counts documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.ReactiveConfig.md) | Configuration. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`number`\>\>

The number of documents.

___

### reactiveCountAttached

▸ `Readonly` **reactiveCountAttached**(`config`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`number`\>

Counts attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.ReactiveConfigAttached.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`number`\>

The number of attached documents.

___

### reactiveCountAttachedAsync

▸ `Readonly` **reactiveCountAttachedAsync**(`config`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`number`\>\>

Counts attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.ReactiveConfigAttached.md) | Configuration. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`number`\>\>

The number of attached documents.

___

### reactiveExists

▸ `Readonly` **reactiveExists**(`id`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`boolean`\>

Checks if document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`boolean`\>

_True_ if document exists, _false_ otherwise.

___

### reactiveExistsAsync

▸ `Readonly` **reactiveExistsAsync**(`id`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`boolean`\>\>

Checks if document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`boolean`\>\>

_True_ if document exists, _false_ otherwise.

___

### reactiveExistsAttached

▸ `Readonly` **reactiveExistsAttached**(`id`, `parentId`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`boolean`\>

Checks if attached document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`boolean`\>

_True_ if attached document exists, _false_ otherwise.

___

### reactiveExistsAttachedAsync

▸ `Readonly` **reactiveExistsAttachedAsync**(`id`, `parentId`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`boolean`\>\>

Checks if attached document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`boolean`\>\>

_True_ if attached document exists, _false_ otherwise.

___

### reactiveGet

▸ `Readonly` **reactiveGet**(`id`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<[`ExistingDocument`](database.ExistingDocument.md)\>

Fetches document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<[`ExistingDocument`](database.ExistingDocument.md)\>

Document.

___

### reactiveGetAsync

▸ `Readonly` **reactiveGetAsync**(`id`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<[`ExistingDocument`](database.ExistingDocument.md)\>\>

Fetches document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<[`ExistingDocument`](database.ExistingDocument.md)\>\>

Document.

___

### reactiveGetAttached

▸ `Readonly` **reactiveGetAttached**(`id`, `parentId`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<[`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

Fetches attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<[`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

Attached document.

___

### reactiveGetAttachedAsync

▸ `Readonly` **reactiveGetAttachedAsync**(`id`, `parentId`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<[`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>\>

Fetches attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<[`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>\>

Attached document.

___

### reactiveGetAttachedIfExists

▸ `Readonly` **reactiveGetAttachedIfExists**(`id`, `parentId`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`undefined` \| [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

Fetches attached document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`undefined` \| [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

Attached document if exists, _undefined_ otherwise.

___

### reactiveGetAttachedIfExistsAsync

▸ `Readonly` **reactiveGetAttachedIfExistsAsync**(`id`, `parentId`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`undefined` \| [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>\>

Fetches attached document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`undefined` \| [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>\>

Attached document if exists, _undefined_ otherwise.

___

### reactiveGetIfExists

▸ `Readonly` **reactiveGetIfExists**(`id`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`undefined` \| [`ExistingDocument`](database.ExistingDocument.md)\>

Fetches document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`undefined` \| [`ExistingDocument`](database.ExistingDocument.md)\>

Document if exists, _undefined_ otherwise.

___

### reactiveGetIfExistsAsync

▸ `Readonly` **reactiveGetIfExistsAsync**(`id`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`undefined` \| [`ExistingDocument`](database.ExistingDocument.md)\>\>

Fetches document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`undefined` \| [`ExistingDocument`](database.ExistingDocument.md)\>\>

Document if exists, _undefined_ otherwise.

___

### reactiveQuery

▸ `Readonly` **reactiveQuery**(`config`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<[`ExistingDocuments`](../modules/database.md#existingdocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.ReactiveConfig.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<[`ExistingDocuments`](../modules/database.md#existingdocuments)\>

Documents.

___

### reactiveQueryAsync

▸ `Readonly` **reactiveQueryAsync**(`config`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<[`ExistingDocuments`](../modules/database.md#existingdocuments)\>\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.ReactiveConfig.md) | Configuration. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<[`ExistingDocuments`](../modules/database.md#existingdocuments)\>\>

Documents.

___

### reactiveQueryAttached

▸ `Readonly` **reactiveQueryAttached**(`config`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<[`ExistingAttachedDocuments`](../modules/database.md#existingattacheddocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.ReactiveConfigAttached.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<[`ExistingAttachedDocuments`](../modules/database.md#existingattacheddocuments)\>

Attached documents.

___

### reactiveQueryAttachedAsync

▸ `Readonly` **reactiveQueryAttachedAsync**(`config`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<[`ExistingAttachedDocuments`](../modules/database.md#existingattacheddocuments)\>\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.ReactiveConfigAttached.md) | Configuration. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<[`ExistingAttachedDocuments`](../modules/database.md#existingattacheddocuments)\>\>

Attached documents.

___

### reactiveUnsettled

▸ `Readonly` **reactiveUnsettled**(`config`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`number`\>

Returns the number of unsettled documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.ReactiveConfig.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`number`\>

The number of unsettled documents.

___

### reactiveUnsettledAsync

▸ `Readonly` **reactiveUnsettledAsync**(`config`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`number`\>\>

Returns the number of unsettled documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.ReactiveConfig.md) | Configuration. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`number`\>\>

The number of unsettled documents.

___

### reactiveUnsettledAttached

▸ `Readonly` **reactiveUnsettledAttached**(`config`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`number`\>

Returns the number of unsettled attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.ReactiveConfigAttached.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`number`\>

The number of unsettled attached documents.

___

### reactiveUnsettledAttachedAsync

▸ `Readonly` **reactiveUnsettledAttachedAsync**(`config`): `Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`number`\>\>

Returns the number of unsettled attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.ReactiveConfigAttached.md) | Configuration. |

#### Returns

`Promise`<[`ReactiveResponseAsync`](database.ReactiveResponseAsync.md)<`number`\>\>

The number of unsettled attached documents.

___

### reset

▸ `Readonly` **reset**(`callback?`): `Promise`<`void`\>

Resets database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | [`ResetCallback`](../modules/database.md#resetcallback) | Callback. |

#### Returns

`Promise`<`void`\>

Promise.

___

### subscribe

▸ `Readonly` **subscribe**(`handler`): `Promise`<`Symbol`\>

Subscribes to changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ChangesHandler`](../modules/database.md#changeshandler) | Handler. |

#### Returns

`Promise`<`Symbol`\>

Subscription ID.

___

### subscribeAttached

▸ `Readonly` **subscribeAttached**(`handler`): `Promise`<`Symbol`\>

Subscribes to changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`AttachedChangesHandler`](../modules/database.md#attachedchangeshandler) | Handler. |

#### Returns

`Promise`<`Symbol`\>

Subscription ID.

___

### unsettled

▸ `Readonly` **unsettled**(`conditions?`): `Promise`<`number`\>

Returns the number of unsettled documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |

#### Returns

`Promise`<`number`\>

The number of unsettled documents.

___

### unsettledAttached

▸ `Readonly` **unsettledAttached**(`conditions?`, `parentConditions?`): `Promise`<`number`\>

Returns the number of unsettled attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |
| `parentConditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Parent conditions. |

#### Returns

`Promise`<`number`\>

The number of unsettled attached documents.

___

### unsubscribe

▸ `Readonly` **unsubscribe**(`id`): `Promise`<`void`\>

Unsubscribes from changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `Symbol` | Subscription ID. |

#### Returns

`Promise`<`void`\>

Promise.

___

### unsubscribeAttached

▸ `Readonly` **unsubscribeAttached**(`id`): `Promise`<`void`\>

Unsubscribes from changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `Symbol` | Subscription ID. |

#### Returns

`Promise`<`void`\>

Promise.
