import * as is from "@skylib/functions/dist/guards";
import { createFacade } from "@skylib/functions/dist/helpers";
import type {
  numberU,
  NumStr,
  ReadonlyRecord
} from "@skylib/functions/dist/types/core";

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
  readonly bulkDocs: (docs: PutDocuments) => Promise<PutResponses>;
  /**
   * Counts documents.
   *
   * @param conditions - Conditions.
   * @returns The number of documents.
   */
  readonly count: (conditions?: Conditions) => Promise<number>;
  /**
   * Counts attached documents.
   *
   * @param conditions - Conditions.
   * @param parentConditions - Parent conditions.
   * @returns The number of attached documents.
   */
  readonly countAttached: (
    conditions?: Conditions,
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
  ) => Promise<ExistingAttachedDocument>;
  /**
   * Fetches attached document if exists.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns Attached document if exists, _undefined_ otherwise.
   */
  readonly getAttachedIfExists: (
    id: number,
    parentId: string
  ) => Promise<ExistingAttachedDocument | undefined>;
  /**
   * Fetches document if exists.
   *
   * @param id - ID.
   * @returns Document if exists, _undefined_ otherwise.
   */
  readonly getIfExists: (id: string) => Promise<ExistingDocument | undefined>;
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
    doc: PutAttachedDocument
  ) => Promise<PutAttachedResponse>;
  /**
   * Puts attached document if not exists.
   *
   * @param parentId - Parent ID.
   * @param doc - Attached document.
   * @returns Response.
   */
  readonly putAttachedIfNotExists: (
    parentId: string,
    doc: PutAttachedDocument
  ) => Promise<PutAttachedResponse | undefined>;
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
   * Queries database.
   *
   * @param conditions - Conditions.
   * @param options - Options.
   * @returns Documents.
   */
  readonly query: (
    conditions?: Conditions,
    options?: QueryOptions
  ) => Promise<ExistingDocuments>;
  /**
   * Queries database.
   *
   * @param conditions - Conditions.
   * @param parentConditions - Parent conditions.
   * @param options - Options.
   * @returns Attached documents.
   */
  readonly queryAttached: (
    conditions?: Conditions,
    parentConditions?: Conditions,
    options?: QueryOptions
  ) => Promise<ExistingAttachedDocuments>;
  /**
   * Counts documents.
   *
   * @param config - Configuration.
   * @returns The number of documents.
   */
  readonly reactiveCount: (
    config: ReactiveConfig
  ) => Promise<ReactiveResponse<number>>;
  /**
   * Counts attached documents.
   *
   * @param config - Configuration.
   * @returns The number of attached documents.
   */
  readonly reactiveCountAttached: (
    config: ReactiveConfigAttached
  ) => Promise<ReactiveResponseAttached<number>>;
  /**
   * Checks if document exists.
   *
   * @param id - ID.
   * @returns _True_ if document exists, _false_ otherwise.
   */
  readonly reactiveExists: (id: string) => Promise<ReactiveResponse<boolean>>;
  /**
   * Checks if attached document exists.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns _True_ if attached document exists, _false_ otherwise.
   */
  readonly reactiveExistsAttached: (
    id: number,
    parentId: string
  ) => Promise<ReactiveResponse<boolean>>;
  /**
   * Fetches document.
   *
   * @param id - ID.
   * @returns Document.
   */
  readonly reactiveGet: (
    id: string
  ) => Promise<ReactiveResponse<ExistingDocument>>;
  /**
   * Fetches attached document.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns Attached document.
   */
  readonly reactiveGetAttached: (
    id: number,
    parentId: string
  ) => Promise<ReactiveResponse<ExistingAttachedDocument>>;
  /**
   * Fetches attached document if exists.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns Attached document if exists, _undefined_ otherwise.
   */
  readonly reactiveGetAttachedIfExists: (
    id: number,
    parentId: string
  ) => Promise<ReactiveResponse<ExistingAttachedDocument | undefined>>;
  /**
   * Fetches document if exists.
   *
   * @param id - ID.
   * @returns Document if exists, _undefined_ otherwise.
   */
  readonly reactiveGetIfExists: (
    id: string
  ) => Promise<ReactiveResponse<ExistingDocument | undefined>>;
  /**
   * Queries database.
   *
   * @param config - Configuration.
   * @returns Documents.
   */
  readonly reactiveQuery: (
    config: ReactiveConfig
  ) => Promise<ReactiveResponse<ExistingDocuments>>;
  /**
   * Queries database.
   *
   * @param config - Configuration.
   * @returns Attached documents.
   */
  readonly reactiveQueryAttached: (
    config: ReactiveConfigAttached
  ) => Promise<ReactiveResponseAttached<ExistingAttachedDocuments>>;
  /**
   * Returns the number of unsettled documents.
   *
   * @param config - Configuration.
   * @returns The number of unsettled documents.
   */
  readonly reactiveUnsettled: (
    config: ReactiveConfig
  ) => Promise<ReactiveResponse<number>>;
  /**
   * Returns the number of unsettled attached documents.
   *
   * @param config - Configuration.
   * @returns The number of unsettled attached documents.
   */
  readonly reactiveUnsettledAttached: (
    config: ReactiveConfigAttached
  ) => Promise<ReactiveResponseAttached<number>>;
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
    handler: AttachedChangesHandler
  ) => Promise<Symbol>;
  /**
   * Returns the number of unsettled documents.
   *
   * @param conditions - Conditions.
   * @returns The number of unsettled documents.
   */
  readonly unsettled: (conditions?: Conditions) => Promise<number>;
  /**
   * Returns the number of unsettled attached documents.
   *
   * @param conditions - Conditions.
   * @param parentConditions - Parent conditions.
   * @returns The number of unsettled attached documents.
   */
  readonly unsettledAttached: (
    conditions?: Conditions,
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

export type AttachedChangesHandler = (doc: ExistingAttachedDocument) => void;

export type ChangesHandler = (doc: ExistingDocument) => void;

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
  readonly migrations?: Migrations;
  readonly retries?: number;
}

export interface ExistingAttachedDocument extends PutAttachedDocument {
  readonly _id: number;
  readonly _rev: number;
  readonly parentDoc: ExistingDocument;
}

export type ExistingAttachedDocuments = readonly ExistingAttachedDocument[];

export interface ExistingDocument extends PutDocument {
  readonly _id: string;
  readonly _rev: string;
}

export type ExistingDocuments = readonly ExistingDocument[];

export interface Migration {
  readonly callback: MigrationCallback;
  readonly id: string;
}

export type Migrations = readonly Migration[];

export type MigrationCallback = (this: Database) => Promise<void>;

export interface PutAttachedDocument {
  readonly [key: string]: unknown;
  readonly _deleted?: true;
  readonly _id?: number;
  readonly _rev?: number;
}

export interface PutAttachedResponse {
  readonly id: number;
  readonly parentId: string;
  readonly parentRev: string;
  readonly rev: number;
}

export interface PutDocument {
  readonly [key: string]: unknown;
  readonly _deleted?: true;
  readonly _id?: string;
  readonly _rev?: string;
  readonly attachedDocs?: StoredAttachedDocuments;
  readonly lastAttachedDoc?: number;
}

export type PutDocuments = readonly PutDocument[];

export interface PutResponse {
  readonly id: string;
  readonly rev: string;
}

export type PutResponses = readonly PutResponse[];

export interface QueryOptions {
  readonly limit?: number;
  readonly skip?: number;
  readonly sortBy?: string;
  readonly sortDesc?: boolean;
}

export interface ReactiveConfig {
  readonly conditions?: Conditions;
  readonly options?: QueryOptions;
  readonly updateFn?: ReactiveUpdateFn<ExistingDocument>;
  readonly updateInterval?: number;
}

export interface ReactiveConfigAttached {
  readonly conditions?: Conditions;
  readonly options?: QueryOptions;
  readonly parentConditions?: Conditions;
  readonly updateFn?: ReactiveUpdateFn<ExistingAttachedDocument>;
  readonly updateInterval?: number;
}

// eslint-disable-next-line @skylib/prefer-readonly
export interface ReactiveResponse<T> {
  conditions: Conditions;
  options: QueryOptions;
  readonly unsubscribe: ReactiveUnsubscribe;
  updateFn: ReactiveUpdateFn<ExistingDocument> | undefined;
  updateInterval: numberU;
  readonly value: T;
}

// eslint-disable-next-line @skylib/prefer-readonly
export interface ReactiveResponseAttached<T> {
  conditions: Conditions;
  options: QueryOptions;
  parentConditions: Conditions;
  readonly unsubscribe: ReactiveUnsubscribe;
  updateFn: ReactiveUpdateFn<ExistingAttachedDocument> | undefined;
  updateInterval: numberU;
  readonly value: T;
}

export type ReactiveUpdateFn<T> = (doc: T) => boolean;

export type ReactiveUnsubscribe = () => Promise<void>;

export type ResetCallback = (this: Database) => Promise<void>;

export interface StoredAttachedDocument extends PutAttachedDocument {
  readonly _id: number;
  readonly _rev: number;
}

export type StoredAttachedDocuments = readonly StoredAttachedDocument[];

export const isStoredAttachedDocument = is.factory(
  is.object.of,
  { _id: is.number, _rev: is.number },
  {}
);

export const isStoredAttachedDocuments = is.factory(
  is.array.of,
  isStoredAttachedDocument
);
