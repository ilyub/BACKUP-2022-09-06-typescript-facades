[Typescript facades](../index.md) / [Exports](../modules.md) / database

# Module: database

## Table of contents

### Interfaces

- [Condition](../interfaces/database.Condition.md)
- [Database](../interfaces/database.Database.md)
- [DatabaseOptions](../interfaces/database.DatabaseOptions.md)
- [ExistingAttachedDocument](../interfaces/database.ExistingAttachedDocument.md)
- [ExistingDocument](../interfaces/database.ExistingDocument.md)
- [Facade](../interfaces/database.Facade.md)
- [Migration](../interfaces/database.Migration.md)
- [PutAttachedDocument](../interfaces/database.PutAttachedDocument.md)
- [PutAttachedResponse](../interfaces/database.PutAttachedResponse.md)
- [PutDocument](../interfaces/database.PutDocument.md)
- [PutResponse](../interfaces/database.PutResponse.md)
- [QueryOptions](../interfaces/database.QueryOptions.md)
- [StoredAttachedDocument](../interfaces/database.StoredAttachedDocument.md)

### Type aliases

- [AttachedChangesHandler](database.md#attachedchangeshandler)
- [ChangesHandler](database.md#changeshandler)
- [Conditions](database.md#conditions)
- [ExistingAttachedDocuments](database.md#existingattacheddocuments)
- [ExistingDocuments](database.md#existingdocuments)
- [MigrationCallback](database.md#migrationcallback)
- [Migrations](database.md#migrations)
- [PutDocuments](database.md#putdocuments)
- [PutResponses](database.md#putresponses)
- [ResetCallback](database.md#resetcallback)
- [StoredAttachedDocuments](database.md#storedattacheddocuments)

### Variables

- [database](database.md#database)

### Functions

- [isStoredAttachedDocument](database.md#isstoredattacheddocument)
- [isStoredAttachedDocuments](database.md#isstoredattacheddocuments)

## Type aliases

### AttachedChangesHandler

Ƭ **AttachedChangesHandler**: (`doc`: [`ExistingAttachedDocument`](../interfaces/database.ExistingAttachedDocument.md)) => `void`

#### Type declaration

▸ (`doc`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`ExistingAttachedDocument`](../interfaces/database.ExistingAttachedDocument.md) |

##### Returns

`void`

___

### ChangesHandler

Ƭ **ChangesHandler**: (`doc`: [`ExistingDocument`](../interfaces/database.ExistingDocument.md)) => `void`

#### Type declaration

▸ (`doc`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`ExistingDocument`](../interfaces/database.ExistingDocument.md) |

##### Returns

`void`

___

### Conditions

Ƭ **Conditions**: `ReadonlyRecord`<`string`, [`Condition`](../interfaces/database.Condition.md)\>

___

### ExistingAttachedDocuments

Ƭ **ExistingAttachedDocuments**: readonly [`ExistingAttachedDocument`](../interfaces/database.ExistingAttachedDocument.md)[]

___

### ExistingDocuments

Ƭ **ExistingDocuments**: readonly [`ExistingDocument`](../interfaces/database.ExistingDocument.md)[]

___

### MigrationCallback

Ƭ **MigrationCallback**: (`this`: [`Database`](../interfaces/database.Database.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`this`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Database`](../interfaces/database.Database.md) |

##### Returns

`Promise`<`void`\>

___

### Migrations

Ƭ **Migrations**: readonly [`Migration`](../interfaces/database.Migration.md)[]

___

### PutDocuments

Ƭ **PutDocuments**: readonly [`PutDocument`](../interfaces/database.PutDocument.md)[]

___

### PutResponses

Ƭ **PutResponses**: readonly [`PutResponse`](../interfaces/database.PutResponse.md)[]

___

### ResetCallback

Ƭ **ResetCallback**: (`this`: [`Database`](../interfaces/database.Database.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`this`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Database`](../interfaces/database.Database.md) |

##### Returns

`Promise`<`void`\>

___

### StoredAttachedDocuments

Ƭ **StoredAttachedDocuments**: readonly [`StoredAttachedDocument`](../interfaces/database.StoredAttachedDocument.md)[]

## Variables

### database

• **database**: `Facade`<[`Facade`](../interfaces/database.Facade.md), `unknown`\>

## Functions

### isStoredAttachedDocument

▸ `Const` **isStoredAttachedDocument**(`value`): value is Required<Object\> & Optional<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Required<Object\> & Optional<unknown\>

___

### isStoredAttachedDocuments

▸ `Const` **isStoredAttachedDocuments**(`value`): value is readonly (Required<Object\> & Optional<unknown\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly (Required<Object\> & Optional<unknown\>)[]
