export declare const showConfirm: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
export interface Facade {
    /**
     * Shows confirmation dialog.
     *
     * @param message - Message.
     * @param success - Success callback.
     * @param failure - Failure callback.
     */
    (message: string, success?: () => void, failure?: () => void): void;
    /**
     * Shows confirmation dialog.
     *
     * @param message - Message.
     * @returns _True_ if accepted, _false_ if rejected.
     */
    readonly async: (message: string) => Promise<boolean>;
}
//# sourceMappingURL=showConfirm.d.ts.map