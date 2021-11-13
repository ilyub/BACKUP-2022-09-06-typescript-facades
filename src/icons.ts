import { createFacade } from "@skylib/functions/dist/helpers";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly sampleIcon: string;
      }
    }
  }
}

export const icons = createFacade<facades.icons.Facade>("icons", {});
