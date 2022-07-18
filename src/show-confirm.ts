import { createFacade } from "@skylib/functions";

export const showConfirm = createFacade<showConfirm.Facade>("showConfirm", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace showConfirm {
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
     * @returns _True_ if accepted, _false_ if rejected.
     */
    readonly async: (message: string) => Promise<boolean>;
  }
}
