import { createFacade } from "@skylib/functions";

export const testDelay = createFacade<testDelay.Facade>("testDelay", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace testDelay {
  export interface Facade {
    /**
     * Test delay.
     */
    (): Promise<void>;
  }
}
