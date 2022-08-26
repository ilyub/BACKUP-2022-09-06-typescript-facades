import type { Rec, types } from "@skylib/functions";
import { createFacade } from "@skylib/functions";

export const icons = createFacade<icons.Facade>("icons", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace icons {
  export type Facade = Icons<Icon>;

  export type Icon = types.object.keys.Pick<
    facades.icons.Icon,
    true,
    "extends->"
  >;

  export type Icons<T extends Icon> = Rec<T, string>;
}

declare global {
  namespace facades {
    namespace icons {
      // eslint-disable-next-line @skylib/typescript/no-empty-interfaces -- Ok
      interface Icon {}
    }
  }
}
