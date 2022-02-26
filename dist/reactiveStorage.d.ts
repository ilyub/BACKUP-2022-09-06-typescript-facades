export declare const reactiveStorage: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
export interface Facade {
    /**
     * Creates reactive object.
     *
     * @param obj - Object.
     * @returns Reactive object.
     */
    <T extends object>(obj: T): T;
    /**
     * Unsubscribes from changes.
     *
     * @param obj - Reactive object.
     * @param observer - Observer.
     */
    readonly unwatch: (obj: object, observer: unknown) => void;
    /**
     * Subscribes to changes.
     *
     * @param obj - Reactive object.
     * @param handler - Handles changes.
     * @param reducer - Generates reduced value.
     * @returns Observer.
     */
    readonly watch: <T extends object>(obj: T, handler: Handler<T>, reducer?: Reducer<T>) => unknown;
}
export interface Handler<T extends object> {
    /**
     * Handles object change.
     *
     * @param obj - Object.
     */
    (obj: T): void;
}
export interface Reducer<T extends object> {
    /**
     * Reduces object for comparison.
     *
     * @param obj - Object.
     */
    (obj: T): unknown;
}
//# sourceMappingURL=reactiveStorage.d.ts.map