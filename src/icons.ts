import type { Match } from "ts-toolbelt/out/Any/_Internal";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";

import { createFacade } from "@skylib/functions/dist/helpers";
import type { Rec } from "@skylib/functions/dist/types/core";

declare global {
  namespace facades {
    namespace icons {
      interface Icon {}
    }
  }
}

export const icons = createFacade<Facade>("icons", {});

export type Facade = Icons<Icon>;

export type Icon = PickKeys<facades.icons.Icon, true, "extends->">;

export type Icons<T extends Icon> = Rec<T, string>;

// eslint-disable-next-line no-warning-comments -- Wait for @skylib/functions update
// fixme
export type PickKeys<
  T extends object,
  E,
  M extends Match = "default"
> = Exclude<keyof T, FilterKeys<T, E, M>>;
