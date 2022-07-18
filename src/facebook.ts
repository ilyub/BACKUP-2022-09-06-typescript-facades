import { createFacade } from "@skylib/functions";
import type { stringU } from "@skylib/functions";

export const facebook = createFacade<facebook.Facade>("facebook", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace facebook {
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
}
