[Typescript facades](../index.md) / [Exports](../modules.md) / [database](../modules/database.md) / [database](../modules/database.database.md) / BaseExistingDocument

# Interface: BaseExistingDocument

[database](../modules/database.md).[database](../modules/database.database.md).BaseExistingDocument

## Hierarchy

- [`BasePutDocument`](database.database.BasePutDocument.md)

  ↳ **`BaseExistingDocument`**

  ↳↳ [`ExistingDocument`](database.database.ExistingDocument.md)

## Table of contents

### Properties

- [\_deleted](database.database.BaseExistingDocument.md#_deleted)
- [\_id](database.database.BaseExistingDocument.md#_id)
- [\_rev](database.database.BaseExistingDocument.md#_rev)
- [attachedDocs](database.database.BaseExistingDocument.md#attacheddocs)
- [lastAttachedDocs](database.database.BaseExistingDocument.md#lastattacheddocs)

## Properties

### \_deleted

• `Optional` `Readonly` **\_deleted**: ``true``

#### Inherited from

[BasePutDocument](database.database.BasePutDocument.md).[_deleted](database.database.BasePutDocument.md#_deleted)

___

### \_id

• `Readonly` **\_id**: `string`

#### Overrides

[BasePutDocument](database.database.BasePutDocument.md).[_id](database.database.BasePutDocument.md#_id)

___

### \_rev

• `Readonly` **\_rev**: `string`

#### Overrides

[BasePutDocument](database.database.BasePutDocument.md).[_rev](database.database.BasePutDocument.md#_rev)

___

### attachedDocs

• `Optional` `Readonly` **attachedDocs**: [`BaseStoredAttachedDocuments`](../modules/database.database.md#basestoredattacheddocuments)

#### Inherited from

[BasePutDocument](database.database.BasePutDocument.md).[attachedDocs](database.database.BasePutDocument.md#attacheddocs)

___

### lastAttachedDocs

• `Optional` `Readonly` **lastAttachedDocs**: `numbers`

#### Inherited from

[BasePutDocument](database.database.BasePutDocument.md).[lastAttachedDocs](database.database.BasePutDocument.md#lastattacheddocs)
