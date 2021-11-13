import { createFacade } from "@skylib/functions/dist/helpers";

export const showAlert = createFacade<Facade>("showAlert", {});

export interface Facade {
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
