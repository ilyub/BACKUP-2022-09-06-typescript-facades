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
- [getIfExists](database.Database.md#getifexists)
- [getIfExistsAttached](database.Database.md#getifexistsattached)
- [put](database.Database.md#put)
- [putAttached](database.Database.md#putattached)
- [putIfNotExists](database.Database.md#putifnotexists)
- [putIfNotExistsAttached](database.Database.md#putifnotexistsattached)
- [query](database.Database.md#query)
- [queryAttached](database.Database.md#queryattached)
- [reset](database.Database.md#reset)
- [subscribe](database.Database.md#subscribe)
- [subscribeAttached](database.Database.md#subscribeattached)
- [unsettled](database.Database.md#unsettled)
- [unsettledAttached](database.Database.md#unsettledattached)
- [unsubscribe](database.Database.md#unsubscribe)
- [unsubscribeAttached](database.Database.md#unsubscribeattached)

## Methods

### bulkDocs

▸ `Readonly` **bulkDocs**(`docs`): `Promise`<[`PutResponse`](database.PutResponse.md)[]\>

Creates or updates multiple documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docs` | readonly [`PutDocument`](database.PutDocument.md)[] | Documents. |

#### Returns

`Promise`<[`PutResponse`](database.PutResponse.md)[]\>

Responses.

___

### count

▸ `Readonly` **count**(`conditions`): `Promise`<`number`\>

Counts documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |

#### Returns

`Promise`<`number`\>

The number of documents.

___

### countAttached

▸ `Readonly` **countAttached**(`conditions`, `parentConditions?`): `Promise`<`number`\>

Counts attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |
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

▸ `Readonly` **getAttached**(`id`, `parentId`): `Promise`<[`ExistingDocumentAttached`](database.ExistingDocumentAttached.md)\>

Fetches attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<[`ExistingDocumentAttached`](database.ExistingDocumentAttached.md)\>

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

▸ `Readonly` **getIfExistsAttached**(`id`, `parentId`): `Promise`<`undefined` \| [`ExistingDocumentAttached`](database.ExistingDocumentAttached.md)\>

Fetches attached document if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID. |
| `parentId` | `string` | Parent ID. |

#### Returns

`Promise`<`undefined` \| [`ExistingDocumentAttached`](database.ExistingDocumentAttached.md)\>

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

▸ `Readonly` **putAttached**(`parentId`, `doc`): `Promise`<[`PutResponseAttached`](database.PutResponseAttached.md)\>

Puts attached document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `doc` | [`PutDocumentAttached`](database.PutDocumentAttached.md) | Attached document. |

#### Returns

`Promise`<[`PutResponseAttached`](database.PutResponseAttached.md)\>

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

### putIfNotExistsAttached

▸ `Readonly` **putIfNotExistsAttached**(`parentId`, `doc`): `Promise`<`undefined` \| [`PutResponseAttached`](database.PutResponseAttached.md)\>

Puts attached document if not exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentId` | `string` | Parent ID. |
| `doc` | [`PutDocumentAttached`](database.PutDocumentAttached.md) | Attached document. |

#### Returns

`Promise`<`undefined` \| [`PutResponseAttached`](database.PutResponseAttached.md)\>

Response.

___

### query

▸ `Readonly` **query**(`conditions`, `options?`): `Promise`<readonly [`ExistingDocument`](database.ExistingDocument.md)[]\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |
| `options?` | [`QueryOptions`](database.QueryOptions.md) | Options. |

#### Returns

`Promise`<readonly [`ExistingDocument`](database.ExistingDocument.md)[]\>

Documents.

___

### queryAttached

▸ `Readonly` **queryAttached**(`conditions`, `parentConditions?`, `options?`): `Promise`<readonly [`ExistingDocumentAttached`](database.ExistingDocumentAttached.md)[]\>

Queries database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |
| `parentConditions?` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Parent conditions. |
| `options?` | [`QueryOptions`](database.QueryOptions.md) | Options. |

#### Returns

`Promise`<readonly [`ExistingDocumentAttached`](database.ExistingDocumentAttached.md)[]\>

Attached documents.

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
| `handler` | [`ChangesHandlerAttached`](../modules/database.md#changeshandlerattached) | Handler. |

#### Returns

`Promise`<`Symbol`\>

Subscription ID.

___

### unsettled

▸ `Readonly` **unsettled**(`conditions`): `Promise`<`number`\>

Returns the number of unsettled documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |

#### Returns

`Promise`<`number`\>

The number of unsettled documents.

___

### unsettledAttached

▸ `Readonly` **unsettledAttached**(`conditions`, `parentConditions?`): `Promise`<`number`\>

Returns the number of unsettled attached documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conditions` | `Readonly`<`Record`<`string`, [`Condition`](database.Condition.md)\>\> | Conditions. |
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
