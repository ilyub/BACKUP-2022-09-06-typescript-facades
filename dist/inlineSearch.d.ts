export declare const inlineSearch: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
export interface Engine {
    /**
     * Performs search.
     *
     * @param query - Query string.
     * @returns - Matching items' IDs.
     */
    readonly search: (query: string) => readonly unknown[];
}
export interface Facade {
    /**
     * Creates search engine.
     *
     * @param idField - ID field.
     * @param fields - Searchable fields.
     * @param items - Items.
     * @returns Search engine instance.
     */
    readonly create: (idField: string, fields: readonly string[], items: readonly object[]) => Engine;
}
//# sourceMappingURL=inlineSearch.d.ts.map