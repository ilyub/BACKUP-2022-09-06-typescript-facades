import * as fn from "@skylib/functions/dist/function";
import * as is from "@skylib/functions/dist/guards";
import { createFacade } from "@skylib/functions/dist/helpers";
import type {
  PromiseAsync,
  ValidationObject
} from "@skylib/functions/dist/types/core";
import { createValidationObject } from "@skylib/functions/dist/types/core";

export const handlePromise = fn.run(() => {
  const TaskTypeVO = createValidationObject<TaskType>({
    createDb: "createDb",
    dbRequest: "dbRequest",
    destroyDb: "destroyDb",
    httpRequest: "httpRequest",
    navigation: "navigation"
  });

  const isTaskType = is.factory(is.enumeration, TaskTypeVO);

  const isTaskTypeU = is.or.factory(isTaskType, is.undefined);

  return createFacade<Facade, Extension>("handlePromise", {
    TaskTypeVO,
    isTaskType,
    isTaskTypeU
  });
});

export interface Extension {
  TaskTypeVO: ValidationObject<TaskType>;
  isTaskType: is.Guard<TaskType>;
  isTaskTypeU: is.Guard<TaskType | undefined>;
}

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
