export declare const showConfirm: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
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
     * @returns _True_ on success, _false_ on failure.
     */
    readonly async: (message: string) => Promise<boolean>;
}
//# sourceMappingURL=showConfirm.d.ts.map