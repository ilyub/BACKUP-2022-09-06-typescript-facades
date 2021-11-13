import { createFacade } from "@skylib/functions/dist/helpers";
import type { stringU } from "@skylib/functions/dist/types/core";

export const facebook = createFacade<Facade>("facebook", {});

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
