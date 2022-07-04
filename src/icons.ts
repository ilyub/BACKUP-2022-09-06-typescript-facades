import { createFacade } from "@skylib/functions";
import type { PickKeys, Rec } from "@skylib/functions";

declare global {
  namespace facades {
    namespace icons {
      interface Icon {
        readonly _placeholder?: never;
      }
    }
  }
}

export const icons = createFacade<icons.Facade>("icons", {});

export namespace icons {
  export type Facade = Icons<Icon>;

  export type Icon = PickKeys<facades.icons.Icon, true, "extends->">;

  // eslint-disable-next-line @skylib/no-restricted-syntax -- Ok
  export type Icons<T extends Icon> = Rec<T, string>;
}
