import type { stringU } from "@skylib/functions/dist/types/core";
export declare const google: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
export interface Facade {
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
//# sourceMappingURL=google.d.ts.map