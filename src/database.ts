import { uniqueId } from "./unique-id";
import { createFacade } from "@skylib/functions";
import type { NumStr, PartialRecord, numbers } from "@skylib/functions";

export const database = createFacade<database.Facade, database.Extension>(
  "database",
  {
    uniqueAttachedSubscriptionId: (): database.AttachedSubscriptionId =>
      `attached-subscription-id-${uniqueId()}`,
    uniqueSubscriptionId: (): database.SubscriptionId =>
      `subscription-id-${uniqueId()}`
  }
);

export namespace database {
  export interface AttachedChangesHandler {
    /**
     * Changes handler.
     *
     * @param doc - Changed document.
     */
    (doc: ExistingAttachedDocument): void;
  }

  export type AttachedSubscriptionId = `attached-subscription-id-${string}`;

  export interface BaseBulkAttachedDocument extends BasePutAttachedDocument {
    readonly parentDoc: BaseExistingDocument;
  }

  export type BaseBulkAttachedDocuments = readonly BaseBulkAttachedDocument[];

  export interface BaseExistingAttachedDocument
    extends BasePutAttachedDocument {
    readonly _id: number;
    readonly _rev: number;
    readonly parentDoc: BaseExistingDocument;
  }

  export type BaseExistingAttachedDocuments =
    readonly BaseExistingAttachedDocument[];

  export interface BaseExistingDocument extends BasePutDocument {
    readonly _id: string;
    readonly _rev: string;
  }

  export type BaseExistingDocuments = readonly BaseExistingDocument[];

  export interface BasePutAttachedDocument {
    // eslint-disable-next-line @skylib/custom/no-optional-true-type -- Ok
    readonly _deleted?: true;
    readonly _id?: number;
    readonly _rev?: number;
    readonly parentDoc?: BaseExistingDocument;
  }

  export type BasePutAttachedDocuments = readonly BasePutAttachedDocument[];

  export interface BasePutDocument {
    // eslint-disable-next-line @skylib/custom/no-optional-true-type -- Ok
    readonly _deleted?: true;
    readonly _id?: string;
    readonly _rev?: string;
    readonly attachedDocs?: BaseStoredAttachedDocuments;
    readonly lastAttachedDocs?: numbers;
  }

  export type BasePutDocuments = readonly BasePutDocument[];

  export interface BaseStoredAttachedDocument extends BasePutAttachedDocument {
    readonly _id: number;
    readonly _rev: number;
  }

  export type BaseStoredAttachedDocuments =
    readonly BaseStoredAttachedDocument[];

  export interface BulkAttachedDocument extends BaseBulkAttachedDocument {
    readonly [K: string]: unknown;
  }

  export type BulkAttachedDocuments = readonly BulkAttachedDocument[];

  export interface ChangesHandler {
    /**
     * Changes handler.
     *
     * @param doc - Changed document.
     */
    (doc: ExistingDocument): void;
  }

  export type Conditions<T extends string = string> =
    | ConditionsArray<T>
    | ConditionsRecord<T>;

  export type ConditionsArray<T extends string = string> = ReadonlyArray<
    ConditionsRecord<T>
  >;

  export type ConditionsRecord<T extends string = string> = PartialRecord<
    T,
    FieldConditions
  >;

  export interface Database {
    /**
     * Creates or updates multiple documents.
     *
     * @param docs - Documents.
     * @returns Responses.
     */
    readonly bulkDocs: (docs: PutDocuments) => Promise<PutResponses>;
    /**
     * Creates or updates multiple attached documents.
     *
     * @param docs - Attached documents.
     * @returns Responses.
     */
    readonly bulkDocsAttached: (
      docs: BulkAttachedDocuments
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
    ) => Promise<ExistingAttachedDocument | undefined>;
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
     * Puts attached documents.
     *
     * @param parentId - Parent ID.
     * @param docs - Attached documents.
     * @returns Responses.
     */
    readonly putAttachedBulk: (
      parentId: string,
      docs: PutAttachedDocuments
    ) => Promise<PutAttachedResponses>;
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
      doc: PutAttachedDocument
    ) => Promise<PutAttachedResponse | undefined>;
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
    ) => ReactiveResponse<number>;
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
     * Checks if document exists.
     *
     * @param id - ID.
     * @returns _True_ if document exists, _false_ otherwise.
     */
    readonly reactiveExists: (id: string) => ReactiveResponse<boolean>;
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
     * Fetches document.
     *
     * @param id - ID.
     * @returns Document.
     */
    readonly reactiveGet: (id: string) => ReactiveResponse<ExistingDocument>;
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
     * Fetches document if exists.
     *
     * @param id - ID.
     * @returns Document if exists, _undefined_ otherwise.
     */
    readonly reactiveGetIfExists: (
      id: string
    ) => ReactiveResponse<ExistingDocument | undefined>;
    /**
     * Fetches attached document if exists.
     *
     * @param id - ID.
     * @param parentId - Parent ID.
     * @returns Attached document if exists, _undefined_ otherwise.
     */
    readonly reactiveGetIfExistsAttached: (
      id: number,
      parentId: string
    ) => ReactiveResponse<ExistingAttachedDocument | undefined>;
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
     * @returns Attached documents.
     */
    readonly reactiveQueryAttached: (
      config: ReactiveConfigAttached
    ) => ReactiveResponse<ExistingAttachedDocuments>;
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
     * Returns the number of unsettled attached documents.
     *
     * @param config - Configuration.
     * @returns The number of unsettled attached documents.
     */
    readonly reactiveUnsettledAttached: (
      config: ReactiveConfigAttached
    ) => ReactiveResponse<number>;
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

  export interface DatabaseOptions {
    readonly caseSensitiveSorting?: boolean;
    readonly migrations?: Migrations;
    readonly retries?: number;
  }

  export type DateCondition =
    | string
    // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
    | readonly [DateConditionType, DateConditionSign, number, DateConditionUnit]
    | readonly [DateConditionType];

  export type DateConditionSign = "-" | "+";

  export type DateConditionType =
    | "endOfDay"
    | "endOfHour"
    | "endOfMonth"
    | "endOfWeek"
    | "now"
    | "startOfDay"
    | "startOfHour"
    | "startOfMonth"
    | "startOfWeek";

  export type DateConditionUnit =
    | "day"
    | "days"
    | "hour"
    | "hours"
    | "minute"
    | "minutes";

  export interface ExistingAttachedDocument
    extends BaseExistingAttachedDocument {
    readonly [K: string]: unknown;
  }

  export type ExistingAttachedDocuments = readonly ExistingAttachedDocument[];

  export interface ExistingDocument extends BaseExistingDocument {
    readonly [K: string]: unknown;
  }

  export type ExistingDocuments = readonly ExistingDocument[];

  export interface Extension {
    /**
     * Generates unique attached subscription ID.
     *
     * @returns Attached subscription ID.
     */
    readonly uniqueAttachedSubscriptionId: () => AttachedSubscriptionId;
    /**
     * Generates unique subscription ID.
     *
     * @returns Subscription ID.
     */
    readonly uniqueSubscriptionId: () => SubscriptionId;
  }

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

  export interface Migration {
    readonly callback: MigrationCallback;
    readonly id: string;
  }

  export interface MigrationCallback {
    /**
     * Migration callback.
     *
     * @param db - Database.
     */
    (db: Database): Promise<void>;
  }

  export type Migrations = readonly Migration[];

  export interface PutAttachedDocument extends BasePutAttachedDocument {
    readonly [K: string]: unknown;
  }

  export type PutAttachedDocuments = readonly PutAttachedDocument[];

  export interface PutAttachedResponse {
    readonly id: number;
    readonly parentId: string;
    readonly parentRev: string;
    readonly rev: number;
  }

  export type PutAttachedResponses = readonly PutAttachedResponse[];

  export interface PutDocument extends BasePutDocument {
    readonly [K: string]: unknown;
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
    readonly update?: ReactiveUpdate<ExistingDocument>;
    readonly updateInterval?: number;
  }

  export interface ReactiveConfigAttached {
    readonly conditions?: Conditions;
    readonly options?: QueryOptions;
    readonly parentConditions?: Conditions;
    readonly update?: ReactiveUpdate<ExistingAttachedDocument>;
    readonly updateInterval?: number;
  }

  export interface ReactiveRefresh {
    /**
     * Refreshes reactive query.
     */
    (): Promise<void>;
  }

  export type ReactiveResponse<T> =
    | ReactiveResponseLoaded<T>
    | ReactiveResponseLoading<T>;

  export interface ReactiveResponseBase<T> {
    readonly loaded: boolean;
    readonly loading: boolean;
    readonly refresh: ReactiveRefresh;
    readonly unsubscribe: ReactiveUnsubscribe;
    readonly value?: T;
  }

  export interface ReactiveResponseLoaded<T> extends ReactiveResponseBase<T> {
    readonly loaded: true;
    readonly value: T;
  }

  export interface ReactiveResponseLoading<T> extends ReactiveResponseBase<T> {
    readonly loaded: false;
    readonly loading: true;
  }

  export interface ReactiveUnsubscribe {
    /**
     * Unsubscribes from reactive query.
     */
    (): void;
  }

  export interface ReactiveUpdate<T> {
    /**
     * Triggers reactive query update.
     *
     * @param doc - Document received.
     * @returns _True_ to trigger update, _false_ otherwise.
     */
    (doc: T): boolean;
  }

  export interface ResetCallback {
    /**
     * Reset callback.
     *
     * @param this - Database.
     */
    (this: Database): Promise<void>;
  }

  export type SubscriptionId = `subscription-id-${string}`;
}
