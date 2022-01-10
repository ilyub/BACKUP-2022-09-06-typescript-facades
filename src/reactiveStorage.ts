import { createFacade } from "@skylib/functions/dist/helpers";

export const reactiveStorage = createFacade<Facade>("reactiveStorage", {});

export interface Facade {
  /**
   * Creates reactive object.
   *
   * @param obj - Object.
   * @returns Reactive object.
   */
  <T extends object>(obj: T): T;
  /**
   * Unsubscribes from changes.
   *
   * @param obj - Reactive object.
   * @param observer - Observer.
   */
  readonly unwatch: (obj: object, observer: unknown) => void;
  /**
   * Subscribes to changes.
   *
   * @param obj - Reactive object.
   * @param handler - Handles changes.
   * @param reducer - Generates reduced value.
   * @returns Observer.
   */
  readonly watch: <T extends object>(
    obj: T,
    handler: Handler<T>,
    reducer?: Reducer<T>
  ) => unknown;
}

export type Handler<T extends object> = (obj: T) => void;

export type Reducer<T extends object> = (obj: T) => unknown;
