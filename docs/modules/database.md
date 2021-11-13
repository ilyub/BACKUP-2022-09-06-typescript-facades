[Typerock facades](../index.md) / [Exports](../modules.md) / database

# Module: database

## Table of contents

### Interfaces

- [Condition](../interfaces/database.Condition.md)
- [Database](../interfaces/database.Database.md)
- [DatabaseOptions](../interfaces/database.DatabaseOptions.md)
- [ExistingDocument](../interfaces/database.ExistingDocument.md)
- [ExistingDocumentAttached](../interfaces/database.ExistingDocumentAttached.md)
- [Facade](../interfaces/database.Facade.md)
- [Migration](../interfaces/database.Migration.md)
- [PutDocument](../interfaces/database.PutDocument.md)
- [PutDocumentAttached](../interfaces/database.PutDocumentAttached.md)
- [PutResponse](../interfaces/database.PutResponse.md)
- [PutResponseAttached](../interfaces/database.PutResponseAttached.md)
- [QueryOptions](../interfaces/database.QueryOptions.md)
- [StoredDocumentAttached](../interfaces/database.StoredDocumentAttached.md)

### Type aliases

- [ChangesHandler](database.md#changeshandler)
- [ChangesHandlerAttached](database.md#changeshandlerattached)
- [Conditions](database.md#conditions)
- [MigrationCallback](database.md#migrationcallback)
- [ResetCallback](database.md#resetcallback)

### Variables

- [database](database.md#database)

## Type aliases

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

### ChangesHandlerAttached

Ƭ **ChangesHandlerAttached**: (`doc`: [`ExistingDocumentAttached`](../interfaces/database.ExistingDocumentAttached.md)) => `void`

#### Type declaration

▸ (`doc`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`ExistingDocumentAttached`](../interfaces/database.ExistingDocumentAttached.md) |

##### Returns

`void`

___

### Conditions

Ƭ **Conditions**: `ReadonlyRecord`<`string`, [`Condition`](../interfaces/database.Condition.md)\>

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

## Variables

### database

• **database**: `Facade`<[`Facade`](../interfaces/database.Facade.md), `unknown`\>
