import { createFacade } from "@skylib/functions/dist/helpers";
import type { PromiseAsync } from "@skylib/functions/dist/types/core";

export const handlePromise = createFacade<Facade>("handlePromise", {});

export interface Facade {
  /**
   * Waits for all active promises.
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
   * @param promiseAsync - Promise or asynchronous function.
   * @param errorMessage - Error message (used to alert user on error).
   */
  readonly silent: <T>(
    promiseAsync: PromiseAsync<T>,
    errorMessage?: string
  ) => void;
  /**
   * Handles promise with progress reporting.
   *
   * @param promiseAsync - Promise or asynchronous function.
   * @param type - Type (determines expected duration for progress reporting).
   * @param errorMessage - Error message (used to alert user on error).
   */
  readonly verbose: <T>(
    promiseAsync: PromiseAsync<T>,
    type: TaskType,
    errorMessage?: string
  ) => void;
}

export type TaskType =
  | "createDb"
  | "dbRequest"
  | "destroyDb"
  | "httpRequest"
  | "navigation";
