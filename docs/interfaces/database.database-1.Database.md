[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / [database](../modules/database.database-1.md) / Database

# Interface: Database

[database](../modules/database.md).[database](../modules/database.database-1.md).Database

## Table of contents

### Methods

- [bulkDocs](database.database-1.Database.md#bulkdocs)
- [bulkDocsAttached](database.database-1.Database.md#bulkdocsattached)
- [count](database.database-1.Database.md#count)
- [countAttached](database.database-1.Database.md#countattached)
- [exists](database.database-1.Database.md#exists)
- [existsAttached](database.database-1.Database.md#existsattached)
- [get](database.database-1.Database.md#get)
- [getAttached](database.database-1.Database.md#getattached)
- [getIfExists](database.database-1.Database.md#getifexists)
- [getIfExistsAttached](database.database-1.Database.md#getifexistsattached)
- [put](database.database-1.Database.md#put)
- [putAttached](database.database-1.Database.md#putattached)
- [putAttachedBulk](database.database-1.Database.md#putattachedbulk)
- [putIfNotExists](database.database-1.Database.md#putifnotexists)
- [putIfNotExistsAttached](database.database-1.Database.md#putifnotexistsattached)
- [query](database.database-1.Database.md#query)
- [queryAttached](database.database-1.Database.md#queryattached)
- [reactiveCount](database.database-1.Database.md#reactivecount)
- [reactiveCountAttached](database.database-1.Database.md#reactivecountattached)
- [reactiveExists](database.database-1.Database.md#reactiveexists)
- [reactiveExistsAttached](database.database-1.Database.md#reactiveexistsattached)
- [reactiveGet](database.database-1.Database.md#reactiveget)
- [reactiveGetAttached](database.database-1.Database.md#reactivegetattached)
- [reactiveGetIfExists](database.database-1.Database.md#reactivegetifexists)
- [reactiveGetIfExistsAttached](database.database-1.Database.md#reactivegetifexistsattached)
- [reactiveQuery](database.database-1.Database.md#reactivequery)
- [reactiveQueryAttached](database.database-1.Database.md#reactivequeryattached)
- [reactiveUnsettled](database.database-1.Database.md#reactiveunsettled)
- [reactiveUnsettledAttached](database.database-1.Database.md#reactiveunsettledattached)
- [reset](database.database-1.Database.md#reset)
- [subscribe](database.database-1.Database.md#subscribe)
- [subscribeAttached](database.database-1.Database.md#subscribeattached)
- [unsettled](database.database-1.Database.md#unsettled)
- [unsettledAttached](database.database-1.Database.md#unsettledattached)
- [unsubscribe](database.database-1.Database.md#unsubscribe)
- [unsubscribeAttached](database.database-1.Database.md#unsubscribeattached)

## Methods

### bulkDocs

▸ `Readonly` **bulkDocs**(`docs`): `Promise`<[`PutResponses`](../modules/database.database-1.md#putresponses)\>

Creates or updates multiple documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docs` | [`PutDocuments`](../modules/database.database-1.md#putdocuments) | Documents. |

#### Returns

`Promise`<[`PutResponses`](../modules/database.database-1.md#putresponses)\>

Responses.

___

### bulkDocsAttached

▸ `Readonly` **bulkDocsAttached**(`docs`): `Promise`<[`PutAttachedResponses`](../modules/database.database-1.md#putattachedresponses)\>

Creates or updates multiple attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docs` | [`BulkAttachedDocuments`](../modules/database.database-1.md#bulkattacheddocuments) | Attached documents. |

#### Returns

`Promise`<[`PutAttachedResponses`](../modules/database.database-1.md#putattachedresponses)\>

Responses.

___

### count

▸ `Readonly` **count**(`conditions?`): `Promise`<`number`\>

Counts documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Conditions. |

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
| `conditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Parent conditions. |

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

▸ `Readonly` **get**(`id`): `Promise`<[`ExistingDocument`](database.database-1.ExistingDocument.md)\>

Fetches document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

`Promise`<[`ExistingDocument`](database.database-1.ExistingDocument.md)\>

Document.

___

### getAttached

▸ `Readonly` **getAttached**(`id`, `parentId`): `Promise`<[`ExistingAttachedDocument`](database.database-1.ExistingAttachedDocument.md)\>

Fetches attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<[`ExistingAttachedDocument`](database.database-1.ExistingAttachedDocument.md)\>

Attached document.

___

### getIfExists

▸ `Readonly` **getIfExists**(`id`): `Promise`<`undefined` \| [`ExistingDocument`](database.database-1.ExistingDocument.md)\>

Fetches document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

`Promise`<`undefined` \| [`ExistingDocument`](database.database-1.ExistingDocument.md)\>

Document if exists, _undefined_ otherwise.

___

### getIfExistsAttached

▸ `Readonly` **getIfExistsAttached**(`id`, `parentId`): `Promise`<`undefined` \| [`ExistingAttachedDocument`](database.database-1.ExistingAttachedDocument.md)\>

Fetches attached document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<`undefined` \| [`ExistingAttachedDocument`](database.database-1.ExistingAttachedDocument.md)\>

Attached document if exists, _undefined_ otherwise.

___

### put

▸ `Readonly` **put**(`doc`): `Promise`<[`PutResponse`](database.database-1.PutResponse.md)\>

Puts document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`PutDocument`](database.database-1.PutDocument.md) | Document. |

#### Returns

`Promise`<[`PutResponse`](database.database-1.PutResponse.md)\>

Response.

___

### putAttached

▸ `Readonly` **putAttached**(`parentId`, `doc`): `Promise`<[`PutAttachedResponse`](database.database-1.PutAttachedResponse.md)\>

Puts attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `doc` | [`PutAttachedDocument`](database.database-1.PutAttachedDocument.md) | Attached document. |

#### Returns

`Promise`<[`PutAttachedResponse`](database.database-1.PutAttachedResponse.md)\>

Response.

___

### putAttachedBulk

▸ `Readonly` **putAttachedBulk**(`parentId`, `docs`): `Promise`<[`PutAttachedResponses`](../modules/database.database-1.md#putattachedresponses)\>

Puts attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `docs` | [`PutAttachedDocuments`](../modules/database.database-1.md#putattacheddocuments) | Attached documents. |

#### Returns

`Promise`<[`PutAttachedResponses`](../modules/database.database-1.md#putattachedresponses)\>

Responses.

___

### putIfNotExists

▸ `Readonly` **putIfNotExists**(`doc`): `Promise`<`undefined` \| [`PutResponse`](database.database-1.PutResponse.md)\>

Puts document if not exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`PutDocument`](database.database-1.PutDocument.md) | Document. |

#### Returns

`Promise`<`undefined` \| [`PutResponse`](database.database-1.PutResponse.md)\>

Response.

___

### putIfNotExistsAttached

▸ `Readonly` **putIfNotExistsAttached**(`parentId`, `doc`): `Promise`<`undefined` \| [`PutAttachedResponse`](database.database-1.PutAttachedResponse.md)\>

Puts attached document if not exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `doc` | [`PutAttachedDocument`](database.database-1.PutAttachedDocument.md) | Attached document. |

#### Returns

`Promise`<`undefined` \| [`PutAttachedResponse`](database.database-1.PutAttachedResponse.md)\>

Response.

___

### query

▸ `Readonly` **query**(`conditions?`, `options?`): `Promise`<[`ExistingDocuments`](../modules/database.database-1.md#existingdocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Conditions. |
| `options?` | [`QueryOptions`](database.database-1.QueryOptions.md) | Options. |

#### Returns

`Promise`<[`ExistingDocuments`](../modules/database.database-1.md#existingdocuments)\>

Documents.

___

### queryAttached

▸ `Readonly` **queryAttached**(`conditions?`, `parentConditions?`, `options?`): `Promise`<[`ExistingAttachedDocuments`](../modules/database.database-1.md#existingattacheddocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Parent conditions. |
| `options?` | [`QueryOptions`](database.database-1.QueryOptions.md) | Options. |

#### Returns

`Promise`<[`ExistingAttachedDocuments`](../modules/database.database-1.md#existingattacheddocuments)\>

Attached documents.

___

### reactiveCount

▸ `Readonly` **reactiveCount**(`config`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`number`\>

Counts documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.database-1.ReactiveConfig.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`number`\>

The number of documents.

___

### reactiveCountAttached

▸ `Readonly` **reactiveCountAttached**(`config`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`number`\>

Counts attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.database-1.ReactiveConfigAttached.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`number`\>

The number of attached documents.

___

### reactiveExists

▸ `Readonly` **reactiveExists**(`id`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`boolean`\>

Checks if document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`boolean`\>

_True_ if document exists, _false_ otherwise.

___

### reactiveExistsAttached

▸ `Readonly` **reactiveExistsAttached**(`id`, `parentId`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`boolean`\>

Checks if attached document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`boolean`\>

_True_ if attached document exists, _false_ otherwise.

___

### reactiveGet

▸ `Readonly` **reactiveGet**(`id`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<[`ExistingDocument`](database.database-1.ExistingDocument.md)\>

Fetches document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<[`ExistingDocument`](database.database-1.ExistingDocument.md)\>

Document.

___

### reactiveGetAttached

▸ `Readonly` **reactiveGetAttached**(`id`, `parentId`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<[`ExistingAttachedDocument`](database.database-1.ExistingAttachedDocument.md)\>

Fetches attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<[`ExistingAttachedDocument`](database.database-1.ExistingAttachedDocument.md)\>

Attached document.

___

### reactiveGetIfExists

▸ `Readonly` **reactiveGetIfExists**(`id`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`undefined` \| [`ExistingDocument`](database.database-1.ExistingDocument.md)\>

Fetches document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`undefined` \| [`ExistingDocument`](database.database-1.ExistingDocument.md)\>

Document if exists, _undefined_ otherwise.

___

### reactiveGetIfExistsAttached

▸ `Readonly` **reactiveGetIfExistsAttached**(`id`, `parentId`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`undefined` \| [`ExistingAttachedDocument`](database.database-1.ExistingAttachedDocument.md)\>

Fetches attached document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`undefined` \| [`ExistingAttachedDocument`](database.database-1.ExistingAttachedDocument.md)\>

Attached document if exists, _undefined_ otherwise.

___

### reactiveQuery

▸ `Readonly` **reactiveQuery**(`config`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<[`ExistingDocuments`](../modules/database.database-1.md#existingdocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.database-1.ReactiveConfig.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<[`ExistingDocuments`](../modules/database.database-1.md#existingdocuments)\>

Documents.

___

### reactiveQueryAttached

▸ `Readonly` **reactiveQueryAttached**(`config`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<[`ExistingAttachedDocuments`](../modules/database.database-1.md#existingattacheddocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.database-1.ReactiveConfigAttached.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<[`ExistingAttachedDocuments`](../modules/database.database-1.md#existingattacheddocuments)\>

Attached documents.

___

### reactiveUnsettled

▸ `Readonly` **reactiveUnsettled**(`config`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`number`\>

Returns the number of unsettled documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.database-1.ReactiveConfig.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`number`\>

The number of unsettled documents.

___

### reactiveUnsettledAttached

▸ `Readonly` **reactiveUnsettledAttached**(`config`): [`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`number`\>

Returns the number of unsettled attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.database-1.ReactiveConfigAttached.md) | Configuration. |

#### Returns

[`ReactiveResponse`](../modules/database.database-1.md#reactiveresponse)<`number`\>

The number of unsettled attached documents.

___

### reset

▸ `Readonly` **reset**(`callback?`): `Promise`<`void`\>

Resets database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | [`ResetCallback`](database.database-1.ResetCallback.md) | Callback. |

#### Returns

`Promise`<`void`\>

Promise.

___

### subscribe

▸ `Readonly` **subscribe**(`handler`): \`subscription-id-${string}\`

Subscribes to changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ChangesHandler`](database.database-1.ChangesHandler.md) | Handler. |

#### Returns

\`subscription-id-${string}\`

Subscription ID.

___

### subscribeAttached

▸ `Readonly` **subscribeAttached**(`handler`): \`attached-subscription-id-${string}\`

Subscribes to changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`AttachedChangesHandler`](database.database-1.AttachedChangesHandler.md) | Handler. |

#### Returns

\`attached-subscription-id-${string}\`

Subscription ID.

___

### unsettled

▸ `Readonly` **unsettled**(`conditions?`): `Promise`<`number`\>

Returns the number of unsettled documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Conditions. |

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
| `conditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.database-1.md#conditions)<`string`\> | Parent conditions. |

#### Returns

`Promise`<`number`\>

The number of unsettled attached documents.

___

### unsubscribe

▸ `Readonly` **unsubscribe**(`id`): `void`

Unsubscribes from changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | \`subscription-id-${string}\` | Subscription ID. |

#### Returns

`void`

Promise.

___

### unsubscribeAttached

▸ `Readonly` **unsubscribeAttached**(`id`): `void`

Unsubscribes from changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | \`attached-subscription-id-${string}\` | Subscription ID. |

#### Returns

`void`

Promise.
