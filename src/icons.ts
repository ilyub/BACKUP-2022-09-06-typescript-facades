import { createFacade } from "@skylib/functions/dist/helpers";

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
