import { createFacade } from "@skylib/functions";

export const uniqueId = createFacade<uniqueId.Facade>("uniqueId", {});

export namespace uniqueId {
  export interface Facade {
    /**
     * Creates unique ID.
     *
     * @returns Unique ID.
     */
    (): string;
  }
}
