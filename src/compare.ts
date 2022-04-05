import { createFacade } from "@skylib/functions/dist/helpers";

export const compare = createFacade<Facade>("compare", {});

export interface Facade {
  /**
   * Compares values.
   *
   * @param x - Value 1.
   * @param y - Value 2.
   * @returns Comparison result.
   */
  (x: unknown, y: unknown): number;
  /**
   * Compares strings.
   *
   * @param x - String 1.
   * @param y - String 2.
   * @returns Comparison result.
   */
  readonly strings: (x: string, y: string) => number;
}
