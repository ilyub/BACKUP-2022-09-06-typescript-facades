[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / Database

# Interface: Database

[database](../modules/database.md).Database

## Table of contents

### Methods

- [bulkDocs](database.Database.md#bulkdocs)
- [bulkDocsAttached](database.Database.md#bulkdocsattached)
- [count](database.Database.md#count)
- [countAttached](database.Database.md#countattached)
- [exists](database.Database.md#exists)
- [existsAttached](database.Database.md#existsattached)
- [get](database.Database.md#get)
- [getAttached](database.Database.md#getattached)
- [getIfExists](database.Database.md#getifexists)
- [getIfExistsAttached](database.Database.md#getifexistsattached)
- [put](database.Database.md#put)
- [putAttached](database.Database.md#putattached)
- [putAttachedBulk](database.Database.md#putattachedbulk)
- [putIfNotExists](database.Database.md#putifnotexists)
- [putIfNotExistsAttached](database.Database.md#putifnotexistsattached)
- [query](database.Database.md#query)
- [queryAttached](database.Database.md#queryattached)
- [reactiveCount](database.Database.md#reactivecount)
- [reactiveCountAttached](database.Database.md#reactivecountattached)
- [reactiveExists](database.Database.md#reactiveexists)
- [reactiveExistsAttached](database.Database.md#reactiveexistsattached)
- [reactiveGet](database.Database.md#reactiveget)
- [reactiveGetAttached](database.Database.md#reactivegetattached)
- [reactiveGetIfExists](database.Database.md#reactivegetifexists)
- [reactiveGetIfExistsAttached](database.Database.md#reactivegetifexistsattached)
- [reactiveQuery](database.Database.md#reactivequery)
- [reactiveQueryAttached](database.Database.md#reactivequeryattached)
- [reactiveUnsettled](database.Database.md#reactiveunsettled)
- [reactiveUnsettledAttached](database.Database.md#reactiveunsettledattached)
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

### bulkDocsAttached

▸ `Readonly` **bulkDocsAttached**(`docs`): `Promise`<[`PutAttachedResponses`](../modules/database.md#putattachedresponses)\>

Creates or updates multiple attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docs` | [`BulkAttachedDocuments`](../modules/database.md#bulkattacheddocuments) | Attached documents. |

#### Returns

`Promise`<[`PutAttachedResponses`](../modules/database.md#putattachedresponses)\>

Responses.

___

### count

▸ `Readonly` **count**(`conditions?`): `Promise`<`number`\>

Counts documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Conditions. |

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
| `conditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Parent conditions. |

#### Returns

`Promise`<`number`\>

The number of attached documents.

___

### exists

▸ `Readonly` **exists**(`id`): `Promise`<`boolean`\>

Checks that document exists.

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

Checks that attached document exists.

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

### getIfExistsAttached

▸ `Readonly` **getIfExistsAttached**(`id`, `parentId`): `Promise`<`undefined` \| [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

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

### putAttachedBulk

▸ `Readonly` **putAttachedBulk**(`parentId`, `docs`): `Promise`<[`PutAttachedResponses`](../modules/database.md#putattachedresponses)\>

Puts attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `docs` | [`PutAttachedDocuments`](../modules/database.md#putattacheddocuments) | Attached documents. |

#### Returns

`Promise`<[`PutAttachedResponses`](../modules/database.md#putattachedresponses)\>

Responses.

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

### putIfNotExistsAttached

▸ `Readonly` **putIfNotExistsAttached**(`parentId`, `doc`): `Promise`<`undefined` \| [`PutAttachedResponse`](database.PutAttachedResponse.md)\>

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

### query

▸ `Readonly` **query**(`conditions?`, `options?`): `Promise`<[`ExistingDocuments`](../modules/database.md#existingdocuments)\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Conditions. |
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
| `conditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Parent conditions. |
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

### reactiveExists

▸ `Readonly` **reactiveExists**(`id`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`boolean`\>

Checks that document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`boolean`\>

_True_ if document exists, _false_ otherwise.

___

### reactiveExistsAttached

▸ `Readonly` **reactiveExistsAttached**(`id`, `parentId`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`boolean`\>

Checks that attached document exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

[`ReactiveResponse`](../modules/database.md#reactiveresponse)<`boolean`\>

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

### reactiveGetIfExistsAttached

▸ `Readonly` **reactiveGetIfExistsAttached**(`id`, `parentId`): [`ReactiveResponse`](../modules/database.md#reactiveresponse)<`undefined` \| [`ExistingAttachedDocument`](database.ExistingAttachedDocument.md)\>

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

### reset

▸ `Readonly` **reset**(`callback?`): `Promise`<`void`\>

Resets database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | [`ResetCallback`](database.ResetCallback.md) | Callback. |

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
| `handler` | [`ChangesHandler`](database.ChangesHandler.md) | Handler. |

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
| `handler` | [`AttachedChangesHandler`](database.AttachedChangesHandler.md) | Handler. |

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
| `conditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Conditions. |

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
| `conditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.md#conditions)<`string`\> | Parent conditions. |

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
