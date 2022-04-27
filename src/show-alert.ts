import { createFacade } from "@skylib/functions";

export const showAlert = createFacade<showAlert.Facade>("showAlert", {});

export namespace showAlert {
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
}
