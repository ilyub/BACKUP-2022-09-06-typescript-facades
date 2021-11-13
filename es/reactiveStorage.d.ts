export declare const reactiveStorage: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
export interface Facade {
    /**
     * Creates reactive wrapper for data object.
     *
     * @param data - Data.
     * @returns Reactive wrapper for data object.
     */
    <T extends object>(data: T): T;
    /**
     * Creates reactive wrapper for data object.
     *
     * @param data - Data.
     * @param onChange - Handles reduced value change.
     * @param reduce - Generates reduced value.
     * @returns Reactive wrapper for data object.
     */
    readonly withChangesHandler: <T extends object, R>(data: T, onChange: (x: R) => void, reduce: (x: T) => R) => T;
}
//# sourceMappingURL=reactiveStorage.d.ts.map