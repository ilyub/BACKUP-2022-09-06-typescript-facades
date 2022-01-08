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
    onChange: OnChange<R>,
    reduce: Reduce<T, R>
  ) => T;
}

export type OnChange<T> = (reduced: T) => void;

export type Reduce<T extends object, R> = (data: T) => R;
