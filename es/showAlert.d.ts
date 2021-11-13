export declare const showAlert: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
export interface Facade {
    /**
     * Shows alert.
     *
     * @param message - Message.
     */
    (message: string): void;
    /**
     * Shows alert.
     *
     * @param message - Message.
     * @returns Promise.
     */
    readonly async: (message: string) => Promise<void>;
}
//# sourceMappingURL=showAlert.d.ts.map