import { createFacade } from "@skylib/functions/dist/helpers";

export const testDelay = createFacade<Facade>("testDelay", {});

export type Facade =
  /**
   * Delays script execution.
   *
   * @returns Promise.
   */
  () => Promise<void>;
