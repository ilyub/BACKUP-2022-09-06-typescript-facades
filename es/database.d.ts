import * as is from "@skylib/functions/es/guards";
import type { numbers, NumStr, ReadonlyRecord } from "@skylib/functions/es/types/core";
export declare const database: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
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
    readonly bulkAttachedDocs: (parentId: string, docs: PutAttachedDocuments) => Promise<PutAttachedResponses>;
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
    readonly bulkExistingAttachedDocs: (docs: ExistingAttachedDocuments) => Promise<PutAttachedResponses>;
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
    readonly countAttached: (conditions?: Conditions, parentConditions?: Conditions) => Promise<number>;
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
    readonly getAttached: (id: number, parentId: string) => Promise<ExistingAttachedDocument>;
    /**
     * Fetches attached document if exists.
     *
     * @param id - ID.
     * @param parentId - Parent ID.
     * @returns Attached document if exists, _undefined_ otherwise.
     */
    readonly getAttachedIfExists: (id: number, parentId: string) => Promise<ExistingAttachedDocument | undefined>;
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
    readonly putAttached: (parentId: string, doc: PutAttachedDocument) => Promise<PutAttachedResponse>;
    /**
     * Puts attached document if not exists.
     *
     * @param parentId - Parent ID.
     * @param doc - Attached document.
     * @returns Response.
     */
    readonly putAttachedIfNotExists: (parentId: string, doc: PutAttachedDocument) => Promise<PutAttachedResponse | undefined>;
    /**
     * Puts document if not exists.
     *
     * @param doc - Document.
     * @returns Response.
     */
    readonly putIfNotExists: (doc: PutDocument) => Promise<PutResponse | undefined>;
    /**
     * Queries database.
     *
     * @param conditions - Conditions.
     * @param options - Options.
     * @returns Documents.
     */
    readonly query: (conditions?: Conditions, options?: QueryOptions) => Promise<ExistingDocuments>;
    /**
     * Queries database.
     *
     * @param conditions - Conditions.
     * @param parentConditions - Parent conditions.
     * @param options - Options.
     * @returns Attached documents.
     */
    readonly queryAttached: (conditions?: Conditions, parentConditions?: Conditions, options?: QueryOptions) => Promise<ExistingAttachedDocuments>;
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
    readonly reactiveCountAsync: (config: ReactiveConfig) => Promise<ReactiveResponseAsync<number>>;
    /**
     * Counts attached documents.
     *
     * @param config - Configuration.
     * @returns The number of attached documents.
     */
    readonly reactiveCountAttached: (config: ReactiveConfigAttached) => ReactiveResponse<number>;
    /**
     * Counts attached documents.
     *
     * @param config - Configuration.
     * @returns The number of attached documents.
     */
    readonly reactiveCountAttachedAsync: (config: ReactiveConfigAttached) => Promise<ReactiveResponseAsync<number>>;
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
    readonly reactiveExistsAsync: (id: string) => Promise<ReactiveResponseAsync<boolean>>;
    /**
     * Checks if attached document exists.
     *
     * @param id - ID.
     * @param parentId - Parent ID.
     * @returns _True_ if attached document exists, _false_ otherwise.
     */
    readonly reactiveExistsAttached: (id: number, parentId: string) => ReactiveResponse<boolean>;
    /**
     * Checks if attached document exists.
     *
     * @param id - ID.
     * @param parentId - Parent ID.
     * @returns _True_ if attached document exists, _false_ otherwise.
     */
    readonly reactiveExistsAttachedAsync: (id: number, parentId: string) => Promise<ReactiveResponseAsync<boolean>>;
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
    readonly reactiveGetAsync: (id: string) => Promise<ReactiveResponseAsync<ExistingDocument>>;
    /**
     * Fetches attached document.
     *
     * @param id - ID.
     * @param parentId - Parent ID.
     * @returns Attached document.
     */
    readonly reactiveGetAttached: (id: number, parentId: string) => ReactiveResponse<ExistingAttachedDocument>;
    /**
     * Fetches attached document.
     *
     * @param id - ID.
     * @param parentId - Parent ID.
     * @returns Attached document.
     */
    readonly reactiveGetAttachedAsync: (id: number, parentId: string) => Promise<ReactiveResponseAsync<ExistingAttachedDocument>>;
    /**
     * Fetches attached document if exists.
     *
     * @param id - ID.
     * @param parentId - Parent ID.
     * @returns Attached document if exists, _undefined_ otherwise.
     */
    readonly reactiveGetAttachedIfExists: (id: number, parentId: string) => ReactiveResponse<ExistingAttachedDocument | undefined>;
    /**
     * Fetches attached document if exists.
     *
     * @param id - ID.
     * @param parentId - Parent ID.
     * @returns Attached document if exists, _undefined_ otherwise.
     */
    readonly reactiveGetAttachedIfExistsAsync: (id: number, parentId: string) => Promise<ReactiveResponseAsync<ExistingAttachedDocument | undefined>>;
    /**
     * Fetches document if exists.
     *
     * @param id - ID.
     * @returns Document if exists, _undefined_ otherwise.
     */
    readonly reactiveGetIfExists: (id: string) => ReactiveResponse<ExistingDocument | undefined>;
    /**
     * Fetches document if exists.
     *
     * @param id - ID.
     * @returns Document if exists, _undefined_ otherwise.
     */
    readonly reactiveGetIfExistsAsync: (id: string) => Promise<ReactiveResponseAsync<ExistingDocument | undefined>>;
    /**
     * Queries database.
     *
     * @param config - Configuration.
     * @returns Documents.
     */
    readonly reactiveQuery: (config: ReactiveConfig) => ReactiveResponse<ExistingDocuments>;
    /**
     * Queries database.
     *
     * @param config - Configuration.
     * @returns Documents.
     */
    readonly reactiveQueryAsync: (config: ReactiveConfig) => Promise<ReactiveResponseAsync<ExistingDocuments>>;
    /**
     * Queries database.
     *
     * @param config - Configuration.
     * @returns Attached documents.
     */
    readonly reactiveQueryAttached: (config: ReactiveConfigAttached) => ReactiveResponse<ExistingAttachedDocuments>;
    /**
     * Queries database.
     *
     * @param config - Configuration.
     * @returns Attached documents.
     */
    readonly reactiveQueryAttachedAsync: (config: ReactiveConfigAttached) => Promise<ReactiveResponseAsync<ExistingAttachedDocuments>>;
    /**
     * Returns the number of unsettled documents.
     *
     * @param config - Configuration.
     * @returns The number of unsettled documents.
     */
    readonly reactiveUnsettled: (config: ReactiveConfig) => ReactiveResponse<number>;
    /**
     * Returns the number of unsettled documents.
     *
     * @param config - Configuration.
     * @returns The number of unsettled documents.
     */
    readonly reactiveUnsettledAsync: (config: ReactiveConfig) => Promise<ReactiveResponseAsync<number>>;
    /**
     * Returns the number of unsettled attached documents.
     *
     * @param config - Configuration.
     * @returns The number of unsettled attached documents.
     */
    readonly reactiveUnsettledAttached: (config: ReactiveConfigAttached) => ReactiveResponse<number>;
    /**
     * Returns the number of unsettled attached documents.
     *
     * @param config - Configuration.
     * @returns The number of unsettled attached documents.
     */
    readonly reactiveUnsettledAttachedAsync: (config: ReactiveConfigAttached) => Promise<ReactiveResponseAsync<number>>;
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
    readonly subscribeAttached: (handler: AttachedChangesHandler) => AttachedSubscriptionId;
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
    readonly unsettledAttached: (conditions?: Conditions, parentConditions?: Conditions) => Promise<number>;
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
export declare type AttachedSubscriptionId = `attached-subscription-id-${string}`;
export interface ChangesHandler {
    /**
     * Changes handler.
     *
     * @param doc - Changed document.
     */
    (doc: ExistingDocument): void;
}
export interface FieldConditions {
    readonly dateEq?: DateCondition;
    readonly dateGt?: DateCondition;
    readonly dateGte?: DateCondition;
    readonly dateLt?: DateCondition;
    readonly dateLte?: DateCondition;
    readonly dateNeq?: DateCondition;
    readonly eq?: unknown;
    readonly gt?: NumStr;
    readonly gte?: NumStr;
    readonly isSet?: boolean;
    readonly lt?: NumStr;
    readonly lte?: NumStr;
    readonly neq?: unknown;
}
export declare type DateCondition = string | readonly [DateConditionType, DateConditionSign, number, DateConditionUnit] | readonly [DateConditionType];
export declare type DateConditionSign = "-" | "+";
export declare type DateConditionType = "endOfDay" | "endOfHour" | "endOfMonth" | "endOfWeek" | "now" | "startOfDay" | "startOfHour" | "startOfMonth" | "startOfWeek";
export declare type DateConditionUnit = "day" | "days" | "hour" | "hours" | "minute" | "minutes";
export declare type ConditionsGroup<T extends string = string> = ReadonlyRecord<T, FieldConditions>;
export declare type ConditionsGroups<T extends string = string> = ReadonlyArray<ConditionsGroup<T>>;
export declare type Conditions<T extends string = string> = ConditionsGroup<T> | ConditionsGroups<T>;
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
export declare type ExistingAttachedDocuments = readonly ExistingAttachedDocument[];
export interface ExistingDocument extends PutDocument {
    readonly _id: string;
    readonly _rev: string;
}
export declare type ExistingDocuments = readonly ExistingDocument[];
export interface Migration {
    readonly callback: MigrationCallback;
    readonly id: string;
}
export declare type Migrations = readonly Migration[];
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
export declare type PutAttachedDocuments = readonly PutAttachedDocument[];
export interface PutAttachedResponse {
    readonly id: number;
    readonly parentId: string;
    readonly parentRev: string;
    readonly rev: number;
}
export declare type PutAttachedResponses = readonly PutAttachedResponse[];
export interface PutDocument {
    readonly [K: string]: unknown;
    readonly _deleted?: true;
    readonly _id?: string;
    readonly _rev?: string;
    readonly attachedDocs?: StoredAttachedDocuments;
    readonly lastAttachedDocs?: numbers;
}
export declare type PutDocuments = readonly PutDocument[];
export interface PutResponse {
    readonly id: string;
    readonly rev: string;
}
export declare type PutResponses = readonly PutResponse[];
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
export declare type ReactiveResponse<T> = ReactiveResponseAsync<T> | ReactiveResponseLoading;
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
export declare type StoredAttachedDocuments = readonly StoredAttachedDocument[];
export declare type SubscriptionId = `subscription-id-${string}`;
export declare const DateConditionSignVO: import("@skylib/functions/es/types/core").ValidationObject<DateConditionSign>;
export declare const DateConditionTypeVO: import("@skylib/functions/es/types/core").ValidationObject<DateConditionType>;
export declare const DateConditionUnitVO: import("@skylib/functions/es/types/core").ValidationObject<DateConditionUnit>;
export declare const isDateConditionSign: is.Guard<DateConditionSign>;
export declare const isDateConditionType: is.Guard<DateConditionType>;
export declare const isDateConditionUnit: is.Guard<DateConditionUnit>;
export declare const isDateCondition: is.Guard<DateCondition>;
export declare const isFieldConditions: is.Guard<FieldConditions>;
export declare const isConditionsGroup: is.Guard<ConditionsGroup>;
export declare const isConditionsGroups: is.Guard<ConditionsGroups>;
export declare const isConditions: is.Guard<Conditions>;
export declare const isStoredAttachedDocument: is.Guard<Partial<unknown> & Required<{
    _id: number;
    _rev: number;
}>>;
export declare const isStoredAttachedDocuments: is.Guard<readonly (Partial<unknown> & Required<{
    _id: number;
    _rev: number;
}>)[]>;
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export declare function isFieldConditionsFactory<T extends string>(_guard: is.Guard<T>): is.Guard<FieldConditions>;
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export declare function isConditionsGroupFactory<T extends string>(_guard: is.Guard<T>): is.Guard<ConditionsGroup>;
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export declare function isConditionsGroupsFactory<T extends string>(_guard: is.Guard<T>): is.Guard<ConditionsGroups>;
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export declare function isConditionsFactory<T extends string>(_guard: is.Guard<T>): is.Guard<Conditions>;
/**
 * Generates unique attached subscription ID.
 *
 * @returns Attached subscription ID.
 */
export declare function uniqueAttachedSubscriptionId(): AttachedSubscriptionId;
/**
 * Generates unique subscription ID.
 *
 * @returns Subscription ID.
 */
export declare function uniqueSubscriptionId(): SubscriptionId;
//# sourceMappingURL=database.d.ts.map