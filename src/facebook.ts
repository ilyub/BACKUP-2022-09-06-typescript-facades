import { createFacade } from "@skylib/functions";
import type { stringU } from "@skylib/functions";

export const facebook = createFacade<facebook.Facade>("facebook", {});

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
