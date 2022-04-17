import type { stringU } from "@skylib/functions";
export declare const google: import("@skylib/functions").Facade<google.Facade, unknown>;
export declare namespace google {
    interface Facade {
        /**
         * Obtains permission to access user's Google account.
         *
         * @returns ID token.
         */
        readonly idToken: () => Promise<stringU>;
        /**
         * Loads SDK.
         *
         * @returns Promise.
         */
        readonly loadSdk: () => Promise<void>;
    }
}
//# sourceMappingURL=google.d.ts.map