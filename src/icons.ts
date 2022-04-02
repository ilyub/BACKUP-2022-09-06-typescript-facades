import { createFacade } from "@skylib/functions/dist/helpers";
import type { TypedObject } from "@skylib/functions/dist/types/core";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {}
    }
  }
}

export const icons = createFacade<Facade, object>("icons", {});

export type Facade = facades.icons.Facade;

export type Icon = keyof Facade;

export type Icons<T extends Icon> = TypedObject<T, string>;
