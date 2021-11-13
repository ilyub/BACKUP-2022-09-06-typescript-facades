import type { stringU } from "@skylib/functions/es/types/core";
export declare const facebook: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
export interface Facade {
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
//# sourceMappingURL=facebook.d.ts.map