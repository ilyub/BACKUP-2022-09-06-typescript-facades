import { createFacade } from "@skylib/functions";

export const uniqueId = createFacade<uniqueId.Facade>("uniqueId", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
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
