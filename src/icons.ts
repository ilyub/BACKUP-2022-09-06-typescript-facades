import { createFacade } from "@skylib/functions/dist/helpers";
import type { ReadonlyRecord } from "@skylib/functions/dist/types/core";

declare global {
  namespace facades {
    namespace icons {
      // eslint-disable-next-line @typescript-eslint/no-empty-interface
      interface Facade {}
    }
  }
}

export const icons = createFacade<Facade, object>("icons", {});

export type Facade = facades.icons.Facade;

export type Icon = keyof Facade;

export type Icons<T extends Icon> = ReadonlyRecord<T, string>;
