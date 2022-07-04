[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / [database](../modules/database.database.md) / Database

# Interface: Database

[database](../modules/database.md).[database](../modules/database.database.md).Database

## Table of contents

### Properties

- [bulkDocs](database.database.Database.md#bulkdocs)
- [bulkDocsAttached](database.database.Database.md#bulkdocsattached)
- [count](database.database.Database.md#count)
- [countAttached](database.database.Database.md#countattached)
- [exists](database.database.Database.md#exists)
- [existsAttached](database.database.Database.md#existsattached)
- [get](database.database.Database.md#get)
- [getAttached](database.database.Database.md#getattached)
- [getIfExists](database.database.Database.md#getifexists)
- [getIfExistsAttached](database.database.Database.md#getifexistsattached)
- [put](database.database.Database.md#put)
- [putAttached](database.database.Database.md#putattached)
- [putAttachedBulk](database.database.Database.md#putattachedbulk)
- [putIfNotExists](database.database.Database.md#putifnotexists)
- [putIfNotExistsAttached](database.database.Database.md#putifnotexistsattached)
- [query](database.database.Database.md#query)
- [queryAttached](database.database.Database.md#queryattached)
- [reactiveCount](database.database.Database.md#reactivecount)
- [reactiveCountAttached](database.database.Database.md#reactivecountattached)
- [reactiveExists](database.database.Database.md#reactiveexists)
- [reactiveExistsAttached](database.database.Database.md#reactiveexistsattached)
- [reactiveGet](database.database.Database.md#reactiveget)
- [reactiveGetAttached](database.database.Database.md#reactivegetattached)
- [reactiveGetIfExists](database.database.Database.md#reactivegetifexists)
- [reactiveGetIfExistsAttached](database.database.Database.md#reactivegetifexistsattached)
- [reactiveQuery](database.database.Database.md#reactivequery)
- [reactiveQueryAttached](database.database.Database.md#reactivequeryattached)
- [reactiveUnsettled](database.database.Database.md#reactiveunsettled)
- [reactiveUnsettledAttached](database.database.Database.md#reactiveunsettledattached)
- [reset](database.database.Database.md#reset)
- [subscribe](database.database.Database.md#subscribe)
- [subscribeAttached](database.database.Database.md#subscribeattached)
- [unsettled](database.database.Database.md#unsettled)
- [unsettledAttached](database.database.Database.md#unsettledattached)
- [unsubscribe](database.database.Database.md#unsubscribe)
- [unsubscribeAttached](database.database.Database.md#unsubscribeattached)

## Properties

### bulkDocs

• `Readonly` **bulkDocs**: (`docs`: [`PutDocuments`](../modules/database.database.md#putdocuments)) => `Promise`<[`PutResponses`](../modules/database.database.md#putresponses)\>

#### Type declaration

▸ (`docs`): `Promise`<[`PutResponses`](../modules/database.database.md#putresponses)\>

Creates or updates multiple documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docs` | [`PutDocuments`](../modules/database.database.md#putdocuments) | Documents. |

##### Returns

`Promise`<[`PutResponses`](../modules/database.database.md#putresponses)\>

Responses.

___

### bulkDocsAttached

• `Readonly` **bulkDocsAttached**: (`docs`: [`BulkAttachedDocuments`](../modules/database.database.md#bulkattacheddocuments)) => `Promise`<[`PutAttachedResponses`](../modules/database.database.md#putattachedresponses)\>

#### Type declaration

▸ (`docs`): `Promise`<[`PutAttachedResponses`](../modules/database.database.md#putattachedresponses)\>

Creates or updates multiple attached documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docs` | [`BulkAttachedDocuments`](../modules/database.database.md#bulkattacheddocuments) | Attached documents. |

##### Returns

`Promise`<[`PutAttachedResponses`](../modules/database.database.md#putattachedresponses)\>

Responses.

___

### count

• `Readonly` **count**: (`conditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>) => `Promise`<`number`\>

#### Type declaration

▸ (`conditions?`): `Promise`<`number`\>

Counts documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Conditions. |

##### Returns

`Promise`<`number`\>

The number of documents.

___

### countAttached

• `Readonly` **countAttached**: (`conditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>, `parentConditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>) => `Promise`<`number`\>

#### Type declaration

▸ (`conditions?`, `parentConditions?`): `Promise`<`number`\>

Counts attached documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Parent conditions. |

##### Returns

`Promise`<`number`\>

The number of attached documents.

___

### exists

• `Readonly` **exists**: (`id`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`id`): `Promise`<`boolean`\>

Checks if document exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

##### Returns

`Promise`<`boolean`\>

_True_ if document exists, _false_ otherwise.

___

### existsAttached

• `Readonly` **existsAttached**: (`id`: `number`, `parentId`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`id`, `parentId`): `Promise`<`boolean`\>

Checks if attached document exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

##### Returns

`Promise`<`boolean`\>

_True_ if attached document exists, _false_ otherwise.

___

### get

• `Readonly` **get**: (`id`: `string`) => `Promise`<[`ExistingDocument`](database.database.ExistingDocument.md)\>

#### Type declaration

▸ (`id`): `Promise`<[`ExistingDocument`](database.database.ExistingDocument.md)\>

Fetches document.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

##### Returns

`Promise`<[`ExistingDocument`](database.database.ExistingDocument.md)\>

Document.

___

### getAttached

• `Readonly` **getAttached**: (`id`: `number`, `parentId`: `string`) => `Promise`<[`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

#### Type declaration

▸ (`id`, `parentId`): `Promise`<[`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

Fetches attached document.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

##### Returns

`Promise`<[`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

Attached document.

___

### getIfExists

• `Readonly` **getIfExists**: (`id`: `string`) => `Promise`<`undefined` \| [`ExistingDocument`](database.database.ExistingDocument.md)\>

#### Type declaration

▸ (`id`): `Promise`<`undefined` \| [`ExistingDocument`](database.database.ExistingDocument.md)\>

Fetches document if exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

##### Returns

`Promise`<`undefined` \| [`ExistingDocument`](database.database.ExistingDocument.md)\>

Document if exists, _undefined_ otherwise.

___

### getIfExistsAttached

• `Readonly` **getIfExistsAttached**: (`id`: `number`, `parentId`: `string`) => `Promise`<`undefined` \| [`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

#### Type declaration

▸ (`id`, `parentId`): `Promise`<`undefined` \| [`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

Fetches attached document if exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

##### Returns

`Promise`<`undefined` \| [`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

Attached document if exists, _undefined_ otherwise.

___

### put

• `Readonly` **put**: (`doc`: [`PutDocument`](database.database.PutDocument.md)) => `Promise`<[`PutResponse`](database.database.PutResponse.md)\>

#### Type declaration

▸ (`doc`): `Promise`<[`PutResponse`](database.database.PutResponse.md)\>

Puts document.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`PutDocument`](database.database.PutDocument.md) | Document. |

##### Returns

`Promise`<[`PutResponse`](database.database.PutResponse.md)\>

Response.

___

### putAttached

• `Readonly` **putAttached**: (`parentId`: `string`, `doc`: [`PutAttachedDocument`](database.database.PutAttachedDocument.md)) => `Promise`<[`PutAttachedResponse`](database.database.PutAttachedResponse.md)\>

#### Type declaration

▸ (`parentId`, `doc`): `Promise`<[`PutAttachedResponse`](database.database.PutAttachedResponse.md)\>

Puts attached document.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `doc` | [`PutAttachedDocument`](database.database.PutAttachedDocument.md) | Attached document. |

##### Returns

`Promise`<[`PutAttachedResponse`](database.database.PutAttachedResponse.md)\>

Response.

___

### putAttachedBulk

• `Readonly` **putAttachedBulk**: (`parentId`: `string`, `docs`: [`PutAttachedDocuments`](../modules/database.database.md#putattacheddocuments)) => `Promise`<[`PutAttachedResponses`](../modules/database.database.md#putattachedresponses)\>

#### Type declaration

▸ (`parentId`, `docs`): `Promise`<[`PutAttachedResponses`](../modules/database.database.md#putattachedresponses)\>

Puts attached documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `docs` | [`PutAttachedDocuments`](../modules/database.database.md#putattacheddocuments) | Attached documents. |

##### Returns

`Promise`<[`PutAttachedResponses`](../modules/database.database.md#putattachedresponses)\>

Responses.

___

### putIfNotExists

• `Readonly` **putIfNotExists**: (`doc`: [`PutDocument`](database.database.PutDocument.md)) => `Promise`<`undefined` \| [`PutResponse`](database.database.PutResponse.md)\>

#### Type declaration

▸ (`doc`): `Promise`<`undefined` \| [`PutResponse`](database.database.PutResponse.md)\>

Puts document if not exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`PutDocument`](database.database.PutDocument.md) | Document. |

##### Returns

`Promise`<`undefined` \| [`PutResponse`](database.database.PutResponse.md)\>

Response.

___

### putIfNotExistsAttached

• `Readonly` **putIfNotExistsAttached**: (`parentId`: `string`, `doc`: [`PutAttachedDocument`](database.database.PutAttachedDocument.md)) => `Promise`<`undefined` \| [`PutAttachedResponse`](database.database.PutAttachedResponse.md)\>

#### Type declaration

▸ (`parentId`, `doc`): `Promise`<`undefined` \| [`PutAttachedResponse`](database.database.PutAttachedResponse.md)\>

Puts attached document if not exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `doc` | [`PutAttachedDocument`](database.database.PutAttachedDocument.md) | Attached document. |

##### Returns

`Promise`<`undefined` \| [`PutAttachedResponse`](database.database.PutAttachedResponse.md)\>

Response.

___

### query

• `Readonly` **query**: (`conditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>, `options?`: [`QueryOptions`](database.database.QueryOptions.md)) => `Promise`<[`ExistingDocuments`](../modules/database.database.md#existingdocuments)\>

#### Type declaration

▸ (`conditions?`, `options?`): `Promise`<[`ExistingDocuments`](../modules/database.database.md#existingdocuments)\>

Queries database.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Conditions. |
| `options?` | [`QueryOptions`](database.database.QueryOptions.md) | Options. |

##### Returns

`Promise`<[`ExistingDocuments`](../modules/database.database.md#existingdocuments)\>

Documents.

___

### queryAttached

• `Readonly` **queryAttached**: (`conditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>, `parentConditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>, `options?`: [`QueryOptions`](database.database.QueryOptions.md)) => `Promise`<[`ExistingAttachedDocuments`](../modules/database.database.md#existingattacheddocuments)\>

#### Type declaration

▸ (`conditions?`, `parentConditions?`, `options?`): `Promise`<[`ExistingAttachedDocuments`](../modules/database.database.md#existingattacheddocuments)\>

Queries database.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Parent conditions. |
| `options?` | [`QueryOptions`](database.database.QueryOptions.md) | Options. |

##### Returns

`Promise`<[`ExistingAttachedDocuments`](../modules/database.database.md#existingattacheddocuments)\>

Attached documents.

___

### reactiveCount

• `Readonly` **reactiveCount**: (`config`: [`ReactiveConfig`](database.database.ReactiveConfig.md)) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

#### Type declaration

▸ (`config`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

Counts documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.database.ReactiveConfig.md) | Configuration. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

The number of documents.

___

### reactiveCountAttached

• `Readonly` **reactiveCountAttached**: (`config`: [`ReactiveConfigAttached`](database.database.ReactiveConfigAttached.md)) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

#### Type declaration

▸ (`config`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

Counts attached documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.database.ReactiveConfigAttached.md) | Configuration. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

The number of attached documents.

___

### reactiveExists

• `Readonly` **reactiveExists**: (`id`: `string`) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`boolean`\>

#### Type declaration

▸ (`id`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`boolean`\>

Checks if document exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`boolean`\>

_True_ if document exists, _false_ otherwise.

___

### reactiveExistsAttached

• `Readonly` **reactiveExistsAttached**: (`id`: `number`, `parentId`: `string`) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`boolean`\>

#### Type declaration

▸ (`id`, `parentId`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`boolean`\>

Checks if attached document exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`boolean`\>

_True_ if attached document exists, _false_ otherwise.

___

### reactiveGet

• `Readonly` **reactiveGet**: (`id`: `string`) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingDocument`](database.database.ExistingDocument.md)\>

#### Type declaration

▸ (`id`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingDocument`](database.database.ExistingDocument.md)\>

Fetches document.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingDocument`](database.database.ExistingDocument.md)\>

Document.

___

### reactiveGetAttached

• `Readonly` **reactiveGetAttached**: (`id`: `number`, `parentId`: `string`) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

#### Type declaration

▸ (`id`, `parentId`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

Fetches attached document.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

Attached document.

___

### reactiveGetIfExists

• `Readonly` **reactiveGetIfExists**: (`id`: `string`) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`undefined` \| [`ExistingDocument`](database.database.ExistingDocument.md)\>

#### Type declaration

▸ (`id`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`undefined` \| [`ExistingDocument`](database.database.ExistingDocument.md)\>

Fetches document if exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`undefined` \| [`ExistingDocument`](database.database.ExistingDocument.md)\>

Document if exists, _undefined_ otherwise.

___

### reactiveGetIfExistsAttached

• `Readonly` **reactiveGetIfExistsAttached**: (`id`: `number`, `parentId`: `string`) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`undefined` \| [`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

#### Type declaration

▸ (`id`, `parentId`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`undefined` \| [`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

Fetches attached document if exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`undefined` \| [`ExistingAttachedDocument`](database.database.ExistingAttachedDocument.md)\>

Attached document if exists, _undefined_ otherwise.

___

### reactiveQuery

• `Readonly` **reactiveQuery**: (`config`: [`ReactiveConfig`](database.database.ReactiveConfig.md)) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingDocuments`](../modules/database.database.md#existingdocuments)\>

#### Type declaration

▸ (`config`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingDocuments`](../modules/database.database.md#existingdocuments)\>

Queries database.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.database.ReactiveConfig.md) | Configuration. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingDocuments`](../modules/database.database.md#existingdocuments)\>

Documents.

___

### reactiveQueryAttached

• `Readonly` **reactiveQueryAttached**: (`config`: [`ReactiveConfigAttached`](database.database.ReactiveConfigAttached.md)) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingAttachedDocuments`](../modules/database.database.md#existingattacheddocuments)\>

#### Type declaration

▸ (`config`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingAttachedDocuments`](../modules/database.database.md#existingattacheddocuments)\>

Queries database.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.database.ReactiveConfigAttached.md) | Configuration. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<[`ExistingAttachedDocuments`](../modules/database.database.md#existingattacheddocuments)\>

Attached documents.

___

### reactiveUnsettled

• `Readonly` **reactiveUnsettled**: (`config`: [`ReactiveConfig`](database.database.ReactiveConfig.md)) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

#### Type declaration

▸ (`config`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

Returns the number of unsettled documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfig`](database.database.ReactiveConfig.md) | Configuration. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

The number of unsettled documents.

___

### reactiveUnsettledAttached

• `Readonly` **reactiveUnsettledAttached**: (`config`: [`ReactiveConfigAttached`](database.database.ReactiveConfigAttached.md)) => [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

#### Type declaration

▸ (`config`): [`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

Returns the number of unsettled attached documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`ReactiveConfigAttached`](database.database.ReactiveConfigAttached.md) | Configuration. |

##### Returns

[`ReactiveResponse`](../modules/database.database.md#reactiveresponse)<`number`\>

The number of unsettled attached documents.

___

### reset

• `Readonly` **reset**: (`callback?`: [`ResetCallback`](database.database.ResetCallback.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`callback?`): `Promise`<`void`\>

Resets database.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | [`ResetCallback`](database.database.ResetCallback.md) | Callback. |

##### Returns

`Promise`<`void`\>

Promise.

___

### subscribe

• `Readonly` **subscribe**: (`handler`: [`ChangesHandler`](database.database.ChangesHandler.md)) => \`subscription-id-${string}\`

#### Type declaration

▸ (`handler`): \`subscription-id-${string}\`

Subscribes to changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`ChangesHandler`](database.database.ChangesHandler.md) | Handler. |

##### Returns

\`subscription-id-${string}\`

Subscription ID.

___

### subscribeAttached

• `Readonly` **subscribeAttached**: (`handler`: [`AttachedChangesHandler`](database.database.AttachedChangesHandler.md)) => \`attached-subscription-id-${string}\`

#### Type declaration

▸ (`handler`): \`attached-subscription-id-${string}\`

Subscribes to changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`AttachedChangesHandler`](database.database.AttachedChangesHandler.md) | Handler. |

##### Returns

\`attached-subscription-id-${string}\`

Subscription ID.

___

### unsettled

• `Readonly` **unsettled**: (`conditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>) => `Promise`<`number`\>

#### Type declaration

▸ (`conditions?`): `Promise`<`number`\>

Returns the number of unsettled documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Conditions. |

##### Returns

`Promise`<`number`\>

The number of unsettled documents.

___

### unsettledAttached

• `Readonly` **unsettledAttached**: (`conditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>, `parentConditions?`: [`Conditions`](../modules/database.database.md#conditions)<`string`\>) => `Promise`<`number`\>

#### Type declaration

▸ (`conditions?`, `parentConditions?`): `Promise`<`number`\>

Returns the number of unsettled attached documents.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Conditions. |
| `parentConditions?` | [`Conditions`](../modules/database.database.md#conditions)<`string`\> | Parent conditions. |

##### Returns

`Promise`<`number`\>

The number of unsettled attached documents.

___

### unsubscribe

• `Readonly` **unsubscribe**: (`id`: \`subscription-id-${string}\`) => `void`

#### Type declaration

▸ (`id`): `void`

Unsubscribes from changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | \`subscription-id-${string}\` | Subscription ID. |

##### Returns

`void`

Promise.

___

### unsubscribeAttached

• `Readonly` **unsubscribeAttached**: (`id`: \`attached-subscription-id-${string}\`) => `void`

#### Type declaration

▸ (`id`): `void`

Unsubscribes from changes.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | \`attached-subscription-id-${string}\` | Subscription ID. |

##### Returns

`void`

Promise.
