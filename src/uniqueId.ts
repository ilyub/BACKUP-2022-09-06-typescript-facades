import { createFacade } from "@skylib/functions/dist/helpers";

export const uniqueId = createFacade<Facade>("uniqueId", {});

export interface Facade {
  /**
   * Creates unique ID.
   *
   * @returns Unique ID.
   */
  (): string;
}
