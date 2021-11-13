import { createFacade } from "@skylib/functions/dist/helpers";

export const uniqueId = createFacade<Facade>("uniqueId", {});

export type Facade =
  /**
   * Generates unique ID.
   *
   * @returns Unique ID.
   */
  () => string;
