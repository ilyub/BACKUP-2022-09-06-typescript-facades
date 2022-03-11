import * as is from "@skylib/functions/dist/guards";
import { createFacade } from "@skylib/functions/dist/helpers";
import type {
  numbers,
  NumStr,
  ReadonlyRecord
} from "@skylib/functions/dist/types/core";

import { uniqueId } from "./uniqueId";

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
   * Creates or updates multiple attached documents.
   *
   * @param parentId - Parent ID.
   * @param docs - Attached documents.
   * @returns Responses.
   */
  readonly bulkAttachedDocs: (
    parentId: string,
    docs: PutAttachedDocuments
  ) => Promise<PutAttachedResponses>;
  /**
   * Creates or updates multiple documents.
   *
   * @param docs - Documents.
   * @returns Responses.
   */
  readonly bulkDocs: (docs: PutDocuments) => Promise<PutResponses>;
  /**
   * Updates multiple attached documents.
   *
   * @param docs - Attached documents.
   * @returns Responses.
   */
  readonly bulkExistingAttachedDocs: (
    docs: ExistingAttachedDocuments
  ) => Promise<PutAttachedResponses>;
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
  readonly reactiveCount: (config: ReactiveConfig) => ReactiveResponse<number>;
  /**
   * Counts documents.
   *
   * @param config - Configuration.
   * @returns The number of documents.
   */
  readonly reactiveCountAsync: (
    config: ReactiveConfig
  ) => Promise<ReactiveResponseAsync<number>>;
  /**
   * Counts attached documents.
   *
   * @param config - Configuration.
   * @returns The number of attached documents.
   */
  readonly reactiveCountAttached: (
    config: ReactiveConfigAttached
  ) => ReactiveResponse<number>;
  /**
   * Counts attached documents.
   *
   * @param config - Configuration.
   * @returns The number of attached documents.
   */
  readonly reactiveCountAttachedAsync: (
    config: ReactiveConfigAttached
  ) => Promise<ReactiveResponseAsync<number>>;
  /**
   * Checks if document exists.
   *
   * @param id - ID.
   * @returns _True_ if document exists, _false_ otherwise.
   */
  readonly reactiveExists: (id: string) => ReactiveResponse<boolean>;
  /**
   * Checks if document exists.
   *
   * @param id - ID.
   * @returns _True_ if document exists, _false_ otherwise.
   */
  readonly reactiveExistsAsync: (
    id: string
  ) => Promise<ReactiveResponseAsync<boolean>>;
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
  ) => ReactiveResponse<boolean>;
  /**
   * Checks if attached document exists.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns _True_ if attached document exists, _false_ otherwise.
   */
  readonly reactiveExistsAttachedAsync: (
    id: number,
    parentId: string
  ) => Promise<ReactiveResponseAsync<boolean>>;
  /**
   * Fetches document.
   *
   * @param id - ID.
   * @returns Document.
   */
  readonly reactiveGet: (id: string) => ReactiveResponse<ExistingDocument>;
  /**
   * Fetches document.
   *
   * @param id - ID.
   * @returns Document.
   */
  readonly reactiveGetAsync: (
    id: string
  ) => Promise<ReactiveResponseAsync<ExistingDocument>>;
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
  ) => ReactiveResponse<ExistingAttachedDocument>;
  /**
   * Fetches attached document.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns Attached document.
   */
  readonly reactiveGetAttachedAsync: (
    id: number,
    parentId: string
  ) => Promise<ReactiveResponseAsync<ExistingAttachedDocument>>;
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
  ) => ReactiveResponse<ExistingAttachedDocument | undefined>;
  /**
   * Fetches attached document if exists.
   *
   * @param id - ID.
   * @param parentId - Parent ID.
   * @returns Attached document if exists, _undefined_ otherwise.
   */
  readonly reactiveGetAttachedIfExistsAsync: (
    id: number,
    parentId: string
  ) => Promise<ReactiveResponseAsync<ExistingAttachedDocument | undefined>>;
  /**
   * Fetches document if exists.
   *
   * @param id - ID.
   * @returns Document if exists, _undefined_ otherwise.
   */
  readonly reactiveGetIfExists: (
    id: string
  ) => ReactiveResponse<ExistingDocument | undefined>;
  /**
   * Fetches document if exists.
   *
   * @param id - ID.
   * @returns Document if exists, _undefined_ otherwise.
   */
  readonly reactiveGetIfExistsAsync: (
    id: string
  ) => Promise<ReactiveResponseAsync<ExistingDocument | undefined>>;
  /**
   * Queries database.
   *
   * @param config - Configuration.
   * @returns Documents.
   */
  readonly reactiveQuery: (
    config: ReactiveConfig
  ) => ReactiveResponse<ExistingDocuments>;
  /**
   * Queries database.
   *
   * @param config - Configuration.
   * @returns Documents.
   */
  readonly reactiveQueryAsync: (
    config: ReactiveConfig
  ) => Promise<ReactiveResponseAsync<ExistingDocuments>>;
  /**
   * Queries database.
   *
   * @param config - Configuration.
   * @returns Attached documents.
   */
  readonly reactiveQueryAttached: (
    config: ReactiveConfigAttached
  ) => ReactiveResponse<ExistingAttachedDocuments>;
  /**
   * Queries database.
   *
   * @param config - Configuration.
   * @returns Attached documents.
   */
  readonly reactiveQueryAttachedAsync: (
    config: ReactiveConfigAttached
  ) => Promise<ReactiveResponseAsync<ExistingAttachedDocuments>>;
  /**
   * Returns the number of unsettled documents.
   *
   * @param config - Configuration.
   * @returns The number of unsettled documents.
   */
  readonly reactiveUnsettled: (
    config: ReactiveConfig
  ) => ReactiveResponse<number>;
  /**
   * Returns the number of unsettled documents.
   *
   * @param config - Configuration.
   * @returns The number of unsettled documents.
   */
  readonly reactiveUnsettledAsync: (
    config: ReactiveConfig
  ) => Promise<ReactiveResponseAsync<number>>;
  /**
   * Returns the number of unsettled attached documents.
   *
   * @param config - Configuration.
   * @returns The number of unsettled attached documents.
   */
  readonly reactiveUnsettledAttached: (
    config: ReactiveConfigAttached
  ) => ReactiveResponse<number>;
  /**
   * Returns the number of unsettled attached documents.
   *
   * @param config - Configuration.
   * @returns The number of unsettled attached documents.
   */
  readonly reactiveUnsettledAttachedAsync: (
    config: ReactiveConfigAttached
  ) => Promise<ReactiveResponseAsync<number>>;
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
  readonly subscribe: (handler: ChangesHandler) => SubscriptionId;
  /**
   * Subscribes to changes.
   *
   * @param handler - Handler.
   * @returns Subscription ID.
   */
  readonly subscribeAttached: (
    handler: AttachedChangesHandler
  ) => AttachedSubscriptionId;
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
  readonly unsubscribe: (id: SubscriptionId) => void;
  /**
   * Unsubscribes from changes.
   *
   * @param id - Subscription ID.
   * @returns Promise.
   */
  readonly unsubscribeAttached: (id: AttachedSubscriptionId) => void;
}

export interface AttachedChangesHandler {
  /**
   * Changes handler.
   *
   * @param doc - Changed document.
   */
  (doc: ExistingAttachedDocument): void;
}

export type AttachedSubscriptionId = `attached-subscription-id-${string}`;

export interface ChangesHandler {
  /**
   * Changes handler.
   *
   * @param doc - Changed document.
   */
  (doc: ExistingDocument): void;
}

export interface FieldConditions {
  readonly dateGt?: string;
  readonly dateGte?: string;
  readonly dateLt?: string;
  readonly dateLte?: string;
  readonly eq?: unknown;
  readonly gt?: NumStr;
  readonly gte?: NumStr;
  readonly isSet?: boolean;
  readonly lt?: NumStr;
  readonly lte?: NumStr;
  readonly neq?: unknown;
}

export type ConditionsGroup<T extends string = string> = ReadonlyRecord<
  T,
  FieldConditions
>;

export type ConditionsGroups<T extends string = string> = ReadonlyArray<
  ConditionsGroup<T>
>;

export type Conditions<T extends string = string> =
  | ConditionsGroup<T>
  | ConditionsGroups<T>;

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

export interface MigrationCallback {
  /**
   * Migration callback.
   *
   * @param this - Database.
   */
  (this: Database): Promise<void>;
}

export interface PutAttachedDocument {
  readonly [K: string]: unknown;
  readonly _deleted?: true;
  readonly _id?: number;
  readonly _rev?: number;
}

export type PutAttachedDocuments = readonly PutAttachedDocument[];

export interface PutAttachedResponse {
  readonly id: number;
  readonly parentId: string;
  readonly parentRev: string;
  readonly rev: number;
}

export type PutAttachedResponses = readonly PutAttachedResponse[];

export interface PutDocument {
  readonly [K: string]: unknown;
  readonly _deleted?: true;
  readonly _id?: string;
  readonly _rev?: string;
  readonly attachedDocs?: StoredAttachedDocuments;
  readonly lastAttachedDocs?: numbers;
}

export type PutDocuments = readonly PutDocument[];

export interface PutResponse {
  readonly id: string;
  readonly rev: string;
}

export type PutResponses = readonly PutResponse[];

export interface QueryOptions {
  readonly descending?: boolean;
  readonly limit?: number;
  readonly skip?: number;
  readonly sortBy?: string;
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

export type ReactiveResponse<T> =
  | ReactiveResponseAsync<T>
  | ReactiveResponseLoading;

export interface ReactiveResponseAsync<T> {
  readonly loaded: true;
  readonly loading: boolean;
  readonly refresh: ReactiveRefresh;
  readonly unsubscribe: ReactiveUnsubscribe;
  readonly value: T;
}

export interface ReactiveResponseLoading {
  readonly loaded: false;
  readonly loading: true;
  readonly refresh: ReactiveRefresh;
  readonly unsubscribe: ReactiveUnsubscribe;
}

export interface ReactiveUpdateFn<T> {
  /**
   * Determines whether reactive query should be updated.
   *
   * @param doc - Received document.
   * @returns _True_ if query should be updated after receiving document, _false_ otherwise.
   */
  (doc: T): boolean;
}

export interface ReactiveRefresh {
  /**
   * Refreshes from reactive query.
   */
  (): Promise<void>;
}

export interface ReactiveUnsubscribe {
  /**
   * Unsubscribes from reactive query.
   */
  (): void;
}

export interface ResetCallback {
  /**
   * Reset callback.
   *
   * @param this - Database.
   */
  (this: Database): Promise<void>;
}

export interface StoredAttachedDocument extends PutAttachedDocument {
  readonly _id: number;
  readonly _rev: number;
}

export type StoredAttachedDocuments = readonly StoredAttachedDocument[];

export type SubscriptionId = `subscription-id-${string}`;

export const isFieldConditions: is.Guard<FieldConditions> = is.factory(
  is.object.of,
  {},
  {
    dateGt: is.string,
    dateGte: is.string,
    dateLt: is.string,
    dateLte: is.string,
    eq: is.unknown,
    gt: is.numStr,
    gte: is.numStr,
    isSet: is.boolean,
    lt: is.numStr,
    lte: is.numStr,
    neq: is.unknown
  }
);

export const isConditionsGroup: is.Guard<ConditionsGroup> = is.factory(
  is.indexedObject.of,
  isFieldConditions
);

export const isConditionsGroups: is.Guard<ConditionsGroups> = is.factory(
  is.array.of,
  isConditionsGroup
);

export const isConditions: is.Guard<Conditions> = is.or.factory(
  isConditionsGroup,
  isConditionsGroups
);

export const isStoredAttachedDocument = is.factory(
  is.object.of,
  { _id: is.number, _rev: is.number } as const,
  {}
);

export const isStoredAttachedDocuments = is.factory(
  is.array.of,
  isStoredAttachedDocument
);

/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isFieldConditionsFactory<T extends string>(
  _guard: is.Guard<T>
): is.Guard<FieldConditions> {
  return isFieldConditions;
}

/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isConditionsGroupFactory<T extends string>(
  _guard: is.Guard<T>
): is.Guard<ConditionsGroup> {
  return isConditionsGroup;
}

/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isConditionsGroupsFactory<T extends string>(
  _guard: is.Guard<T>
): is.Guard<ConditionsGroups> {
  return isConditionsGroups;
}

/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isConditionsFactory<T extends string>(
  _guard: is.Guard<T>
): is.Guard<Conditions> {
  return isConditions;
}

/**
 * Generates unique attached subscription ID.
 *
 * @returns Attached subscription ID.
 */
export function uniqueAttachedSubscriptionId(): AttachedSubscriptionId {
  return `attached-subscription-id-${uniqueId()}`;
}

/**
 * Generates unique subscription ID.
 *
 * @returns Subscription ID.
 */
export function uniqueSubscriptionId(): SubscriptionId {
  return `subscription-id-${uniqueId()}`;
}
