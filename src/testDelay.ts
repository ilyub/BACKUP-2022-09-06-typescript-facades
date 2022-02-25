import { createFacade } from "@skylib/functions/dist/helpers";

export const testDelay = createFacade<Facade>("testDelay", {});

export interface Facade {
  /**
   * Test delay.
   */
  (): Promise<void>;
}
