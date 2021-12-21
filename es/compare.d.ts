export declare const compare: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
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
//# sourceMappingURL=compare.d.ts.map