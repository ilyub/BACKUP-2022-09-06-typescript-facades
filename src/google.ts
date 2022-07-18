import { createFacade } from "@skylib/functions";
import type { stringU } from "@skylib/functions";

export const google = createFacade<google.Facade>("google", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace google {
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
}
