export declare const showAlert: import("@skylib/functions").Facade<showAlert.Facade, unknown>;
export declare namespace showAlert {
    interface Facade {
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
}
//# sourceMappingURL=show-alert.d.ts.map