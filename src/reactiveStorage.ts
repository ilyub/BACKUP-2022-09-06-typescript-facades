import { createFacade } from "@skylib/functions/dist/helpers";

export const reactiveStorage = createFacade<Facade>("reactiveStorage", {});

export interface Facade {
  /**
   * Creates reactive wrapper for data object.
   *
   * @param data - Data.
   * @returns Reactive wrapper for data object.
   */
  <T extends object>(data: T): T;
  /**
   * Creates reactive wrapper for data object.
   *
   * @param data - Data.
   * @param onChange - Handles reduced value change.
   * @param reduce - Generates reduced value.
   * @returns Reactive wrapper for data object.
   */
  readonly withChangesHandler: <T extends object, R>(
    data: T,
    onChange: (x: R) => void,
    reduce: (x: T) => R
  ) => T;
}
