import { createFacade } from "@skylib/functions/dist/helpers";
import type { NumStr, ReadonlyRecord } from "@skylib/functions/dist/types/core";

export const database = createFacade<Facade>("database", {});

export interface Facade {
  /**
   * Creates database.
   *
   * @param name - Database name.
   * @param options - Options.
   * @returns Database.
   */
  readonly create: (name: string, options?: DatabaseOptions) => Database;
}

export interface Database {
  /**
   * Creates or updates multiple documents.
   *
   * @param docs - Documents.
   * @returns Responses.
   */
  readonly bulkDocs: (docs: readonly PutDocument[]) => Promise<PutResponse[]>;
  /**
   * Counts documents.
   *
   * @param conditions - Conditions.
   * @returns The number of documents.
   */
  readonly count: (conditions: Conditions) => Promise<number>;
  /**
   * Counts attached documents.
   *
   * @param conditions - Conditions.
   * @param parentConditions - Parent conditions.
   * @returns The number of attached documents.
   */
  readonly countAttached: (
    conditions: Conditions,
    parentConditions?: Conditions
  ) => Promise<number>;
  /**
   * Checks if document exists.
   *
   * @param id - ID.
   * @returns _True_ if document exists, _false_ otherwise.
   */
  readonly exists: (id: string) => Promise<boolean>;
  /**
   * Checks if attached document exists.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns _True_ if attached document exists, _false_ otherwise.
   */
  readonly existsAttached: (id: number, parentId: string) => Promise<boolean>;
  /**
   * Fetches document.
   *
   * @param id - ID.
   * @returns Document.
   */
  readonly get: (id: string) => Promise<ExistingDocument>;
  /**
   * Fetches attached document.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns Attached document.
   */
  readonly getAttached: (
    id: number,
    parentId: string
  ) => Promise<ExistingDocumentAttached>;
  /**
   * Fetches document if exists.
   *
   * @param id - ID.
   * @returns Document if exists, _undefined_ otherwise.
   */
  readonly getIfExists: (id: string) => Promise<ExistingDocument | undefined>;
  /**
   * Fetches attached document if exists.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns Attached document if exists, _undefined_ otherwise.
   */
  readonly getIfExistsAttached: (
    id: number,
    parentId: string
  ) => Promise<ExistingDocumentAttached | undefined>;
  /**
   * Puts document.
   *
   * @param doc - Document.
   * @returns Response.
   */
  readonly put: (doc: PutDocument) => Promise<PutResponse>;
  /**
   * Puts attached document.
   *
   * @param parentId - Parent ID.
   * @param doc - Attached document.
   * @returns Response.
   */
  readonly putAttached: (
    parentId: string,
    doc: PutDocumentAttached
  ) => Promise<PutResponseAttached>;
  /**
   * Puts document if not exists.
   *
   * @param doc - Document.
   * @returns Response.
   */
  readonly putIfNotExists: (
    doc: PutDocument
  ) => Promise<PutResponse | undefined>;
  /**
   * Puts attached document if not exists.
   *
   * @param parentId - Parent ID.
   * @param doc - Attached document.
   * @returns Response.
   */
  readonly putIfNotExistsAttached: (
    parentId: string,
    doc: PutDocumentAttached
  ) => Promise<PutResponseAttached | undefined>;
  /**
   * Queries database.
   *
   * @param conditions - Conditions.
   * @param options - Options.
   * @returns Documents.
   */
  readonly query: (
    conditions: Conditions,
    options?: QueryOptions
  ) => Promise<readonly ExistingDocument[]>;
  /**
   * Queries database.
   *
   * @param conditions - Conditions.
   * @param parentConditions - Parent conditions.
   * @param options - Options.
   * @returns Attached documents.
   */
  readonly queryAttached: (
    conditions: Conditions,
    parentConditions?: Conditions,
    options?: QueryOptions
  ) => Promise<readonly ExistingDocumentAttached[]>;
  /**
   * Resets database.
   *
   * @param callback - Callback.
   * @returns Promise.
   */
  readonly reset: (callback?: ResetCallback) => Promise<void>;
  /**
   * Subscribes to changes.
   *
   * @param handler - Handler.
   * @returns Subscription ID.
   */
  readonly subscribe: (handler: ChangesHandler) => Promise<Symbol>;
  /**
   * Subscribes to changes.
   *
   * @param handler - Handler.
   * @returns Subscription ID.
   */
  readonly subscribeAttached: (
    handler: ChangesHandlerAttached
  ) => Promise<Symbol>;
  /**
   * Returns the number of unsettled documents.
   *
   * @param conditions - Conditions.
   * @returns The number of unsettled documents.
   */
  readonly unsettled: (conditions: Conditions) => Promise<number>;
  /**
   * Returns the number of unsettled attached documents.
   *
   * @param conditions - Conditions.
   * @param parentConditions - Parent conditions.
   * @returns The number of unsettled attached documents.
   */
  readonly unsettledAttached: (
    conditions: Conditions,
    parentConditions?: Conditions
  ) => Promise<number>;
  /**
   * Unsubscribes from changes.
   *
   * @param id - Subscription ID.
   * @returns Promise.
   */
  readonly unsubscribe: (id: Symbol) => Promise<void>;
  /**
   * Unsubscribes from changes.
   *
   * @param id - Subscription ID.
   * @returns Promise.
   */
  readonly unsubscribeAttached: (id: Symbol) => Promise<void>;
}

export type ChangesHandler = (doc: ExistingDocument) => void;

export type ChangesHandlerAttached = (doc: ExistingDocumentAttached) => void;

export interface Condition {
  readonly dgt?: number;
  readonly dlt?: number;
  readonly eq?: unknown;
  readonly gt?: NumStr;
  readonly gte?: NumStr;
  readonly lt?: NumStr;
  readonly lte?: NumStr;
}

export type Conditions = ReadonlyRecord<string, Condition>;

export interface DatabaseOptions {
  readonly caseSensitiveSorting?: boolean;
  readonly migrations?: readonly Migration[];
  readonly retries?: number;
}

export interface ExistingDocument extends PutDocument {
  readonly _id: string;
  readonly _rev: string;
}

export interface ExistingDocumentAttached extends PutDocumentAttached {
  readonly _id: number;
  readonly _rev: number;
  readonly parentDoc: ExistingDocument;
}

export interface Migration {
  readonly callback: MigrationCallback;
  readonly id: string;
}

export type MigrationCallback = (this: Database) => Promise<void>;

export interface PutDocument {
  readonly [key: string]: unknown;
  readonly _deleted?: true;
  readonly _id?: string;
  readonly _rev?: string;
  readonly attachedDocs?: readonly StoredDocumentAttached[];
  readonly lastAttachedDoc?: number;
}

export interface PutDocumentAttached {
  readonly [key: string]: unknown;
  readonly _deleted?: true;
  readonly _id?: number;
  readonly _rev?: number;
}

export interface PutResponse {
  readonly id: string;
  readonly rev: string;
}

export interface PutResponseAttached {
  readonly id: number;
  readonly parentId: string;
  readonly parentRev: string;
  readonly rev: number;
}

export interface QueryOptions {
  readonly limit?: number;
  readonly skip?: number;
  readonly sortBy?: string;
  readonly sortDesc?: boolean;
}

export type ResetCallback = (this: Database) => Promise<void>;

export interface StoredDocumentAttached extends PutDocumentAttached {
  readonly _id: number;
  readonly _rev: number;
}
