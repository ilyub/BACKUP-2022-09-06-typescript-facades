import * as is from "@skylib/functions/dist/guards";
import type { NumStr, ReadonlyRecord } from "@skylib/functions/dist/types/core";
export declare const database: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
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
    readonly count: (conditions: Conditions) => Promise<number>;
    /**
     * Counts attached documents.
     *
     * @param conditions - Conditions.
     * @param parentConditions - Parent conditions.
     * @returns The number of attached documents.
     */
    readonly countAttached: (conditions: Conditions, parentConditions?: Conditions) => Promise<number>;
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
    readonly getIfExistsAttached: (id: number, parentId: string) => Promise<ExistingAttachedDocument | undefined>;
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
     * Puts document if not exists.
     *
     * @param doc - Document.
     * @returns Response.
     */
    readonly putIfNotExists: (doc: PutDocument) => Promise<PutResponse | undefined>;
    /**
     * Puts attached document if not exists.
     *
     * @param parentId - Parent ID.
     * @param doc - Attached document.
     * @returns Response.
     */
    readonly putIfNotExistsAttached: (parentId: string, doc: PutAttachedDocument) => Promise<PutAttachedResponse | undefined>;
    /**
     * Queries database.
     *
     * @param conditions - Conditions.
     * @param options - Options.
     * @returns Documents.
     */
    readonly query: (conditions: Conditions, options?: QueryOptions) => Promise<ExistingDocuments>;
    /**
     * Queries database.
     *
     * @param conditions - Conditions.
     * @param parentConditions - Parent conditions.
     * @param options - Options.
     * @returns Attached documents.
     */
    readonly queryAttached: (conditions: Conditions, parentConditions?: Conditions, options?: QueryOptions) => Promise<ExistingAttachedDocuments>;
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
    readonly subscribeAttached: (handler: AttachedChangesHandler) => Promise<Symbol>;
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
    readonly unsettledAttached: (conditions: Conditions, parentConditions?: Conditions) => Promise<number>;
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
export declare type AttachedChangesHandler = (doc: ExistingAttachedDocument) => void;
export declare type ChangesHandler = (doc: ExistingDocument) => void;
export interface Condition {
    readonly dgt?: number;
    readonly dlt?: number;
    readonly eq?: unknown;
    readonly gt?: NumStr;
    readonly gte?: NumStr;
    readonly lt?: NumStr;
    readonly lte?: NumStr;
}
export declare type Conditions = ReadonlyRecord<string, Condition>;
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
export declare type MigrationCallback = (this: Database) => Promise<void>;
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
export declare type PutDocuments = readonly PutDocument[];
export interface PutResponse {
    readonly id: string;
    readonly rev: string;
}
export declare type PutResponses = readonly PutResponse[];
export interface QueryOptions {
    readonly limit?: number;
    readonly skip?: number;
    readonly sortBy?: string;
    readonly sortDesc?: boolean;
}
export declare type ResetCallback = (this: Database) => Promise<void>;
export interface StoredAttachedDocument extends PutAttachedDocument {
    readonly _id: number;
    readonly _rev: number;
}
export declare type StoredAttachedDocuments = readonly StoredAttachedDocument[];
export declare const isStoredAttachedDocument: is.Guard<Required<{
    _id: number;
    _rev: number;
}> & import("@skylib/functions/dist/types/core").Optional<unknown>>;
export declare const isStoredAttachedDocuments: is.Guard<readonly (Required<{
    _id: number;
    _rev: number;
}> & import("@skylib/functions/dist/types/core").Optional<unknown>)[]>;
//# sourceMappingURL=database.d.ts.map