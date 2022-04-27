import { createFacade } from "@skylib/functions";

export const testDelay = createFacade<testDelay.Facade>("testDelay", {});

export namespace testDelay {
  export interface Facade {
    /**
     * Test delay.
     */
    (): Promise<void>;
  }
}
