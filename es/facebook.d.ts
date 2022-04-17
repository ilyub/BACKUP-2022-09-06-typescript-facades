import type { stringU } from "@skylib/functions";
export declare const facebook: import("@skylib/functions").Facade<facebook.Facade, unknown>;
export declare namespace facebook {
    interface Facade {
        /**
         * Obtains permission to access user's Facebook account.
         *
         * @returns Access token.
         */
        readonly accessToken: () => Promise<stringU>;
        /**
         * Loads SDK.
         *
         * @returns Promise.
         */
        readonly loadSdk: () => Promise<void>;
    }
}
//# sourceMappingURL=facebook.d.ts.map