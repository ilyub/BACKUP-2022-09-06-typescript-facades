import { createFacade } from "@skylib/functions/dist/helpers";
import type { Rec } from "@skylib/functions/dist/types/core";
import type { PickKeys } from "@skylib/functions/dist/types/object";

declare global {
  namespace facades {
    namespace icons {
      interface Icon {
        readonly _placeholder?: never;
      }
    }
  }
}

export const icons = createFacade<Facade>("icons", {});

export type Facade = Icons<Icon>;

export type Icon = PickKeys<facades.icons.Icon, true, "extends->">;

export type Icons<T extends Icon> = Rec<T, string>;
