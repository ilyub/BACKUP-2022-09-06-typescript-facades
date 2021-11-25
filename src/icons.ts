import * as cast from "@skylib/functions/dist/converters";
import * as is from "@skylib/functions/dist/guards";
import { createFacade, wrapProxyHandler } from "@skylib/functions/dist/helpers";
import * as reflect from "@skylib/functions/dist/reflect";
import type { ReadonlyRecord } from "@skylib/functions/dist/types/core";

declare global {
  namespace facades {
    namespace icons {
      // eslint-disable-next-line @typescript-eslint/no-empty-interface
      interface Facade {}
    }
  }
}

export const icons = createFacade<Facade, Extension>("icons", {
  createExcerpt<T extends Icon>(
    keys: readonly T[],
    dev: boolean
  ): ReadonlyRecord<T, string> {
    const keysSet = new Set<PropertyKey>(keys);

    return dev
      ? new Proxy(
          icons,
          wrapProxyHandler("icons.createExcerpt", {
            get(target, key) {
              if (keysSet.has(key)) return reflect.get(target, key);

              if (is.string(key) && key.startsWith("__"))
                return reflect.get(target, key);

              throw new Error(`Unknown key: ${cast.string(key)}`);
            },
            getOwnPropertyDescriptor(target, key) {
              return Object.getOwnPropertyDescriptor(target, key);
            }
          })
        )
      : icons;
  }
});

export interface Extension {
  /**
   * Creates facade excerpt.
   *
   * @param keys - Keys.
   * @param dev - Development mode.
   * @returns Facade excerpt.
   */
  readonly createExcerpt: <T extends Icon>(
    keys: readonly T[],
    dev: boolean
  ) => ReadonlyRecord<T, string>;
}

export type Facade = facades.icons.Facade;

export type Icon = keyof Facade;
