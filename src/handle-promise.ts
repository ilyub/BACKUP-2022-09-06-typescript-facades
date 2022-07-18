import type { PromiseType } from "./types";
import { createFacade } from "@skylib/functions";
import type { types } from "@skylib/functions";

export const handlePromise = createFacade<handlePromise.Facade>(
  "handlePromise",
  {}
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace handlePromise {
  export interface Facade {
    /**
     * Handles promise with progress reporting.
     *
     * @param mixed - Promise or async function.
     * @param type - Type (determines expected duration for progress reporting).
     * @param errorMessage - Error message (used to alert user on error).
     */
    <T>(
      type: PromiseType | undefined,
      mixed: types.fn.AsyncPromise<T>,
      errorMessage?: string
    ): void;
    /**
     * Waits for all promises.
     *
     * @returns Promise.
     */
    readonly runAll: () => Promise<void>;
    /**
     * Checks if there are active promises.
     *
     * @returns _True_ if there are active promises, _false_ otherwise.
     */
    readonly running: () => boolean;
    /**
     * Handles promise.
     *
     * @param mixed - Promise or async function.
     * @param errorMessage - Error message (used to alert user on error).
     */
    readonly silent: <T>(
      mixed: types.fn.AsyncPromise<T>,
      errorMessage?: string
    ) => void;
  }
}
