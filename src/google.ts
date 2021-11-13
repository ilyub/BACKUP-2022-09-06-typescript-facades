import { createFacade } from "@skylib/functions/dist/helpers";
import type { stringU } from "@skylib/functions/dist/types/core";

export const google = createFacade<Facade>("google", {});

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
