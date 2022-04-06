export declare const compare: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
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
//# sourceMappingURL=compare.d.ts.map