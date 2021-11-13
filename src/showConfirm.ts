import { createFacade } from "@skylib/functions/dist/helpers";

export const showConfirm = createFacade<Facade>("showConfirm", {});

export interface Facade {
  /**
   * Shows confirmation dialog.
   *
   * @param message - Message.
   * @param success - Success callback.
   * @param failure - Failure callback.
   */
  (message: string, success?: () => void, failure?: () => void): void;
  /**
   * Shows confirmation dialog.
   *
   * @param message - Message.
   * @returns _True_ on success, _false_ on failure.
   */
  readonly async: (message: string) => Promise<boolean>;
}
