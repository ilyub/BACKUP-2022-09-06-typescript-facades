import { createFacade } from "@skylib/functions";
import type { AsyncPromise } from "@skylib/functions";

export const handlePromise = createFacade<handlePromise.Facade>(
  "handlePromise",
  {}
);

export namespace handlePromise {
  export interface Facade {
    /**
     * Waits for all promises.
     *
     * @returns Promise.
     */
    readonly runAll: () => Promise<void>;
    /**
     * Checks that there are active promises.
     *
     * @returns _True_ if there are active promises, _false_ otherwise.
     */
    readonly running: () => boolean;
    /**
     * Handles promise.
     *
     * @param promiseAsync - Promise or async function.
     * @param errorMessage - Error message (used to alert user on error).
     */
    readonly silent: <T>(
      promiseAsync: AsyncPromise<T>,
      errorMessage?: string
    ) => void;
    /**
     * Handles promise with progress reporting.
     *
     * @param promiseAsync - Promise or async function.
     * @param type - Type (determines expected duration for progress reporting).
     * @param errorMessage - Error message (used to alert user on error).
     */
    readonly verbose: <T>(
      promiseAsync: AsyncPromise<T>,
      type: Type,
      errorMessage?: string
    ) => void;
  }

  export type Type =
    | "createDb"
    | "dbRequest"
    | "destroyDb"
    | "httpRequest"
    | "navigation";
}
