import { createFacade } from "@skylib/functions/dist/helpers";

export const compare = createFacade<Facade>("compare", {});

export interface Facade {
  /**
   * Compares arbitrary values.
   *
   * @param x - First value.
   * @param y - Second value.
   * @returns Comparison result.
   */
  (x: unknown, y: unknown): number;
  /**
   * Compares strings.
   *
   * @param x - First value.
   * @param y - Second value.
   * @returns Comparison result.
   */
  readonly strings: (x: string, y: string) => number;
}
