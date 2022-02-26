export declare const inlineSearch: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
export interface Engine<T extends object> {
    /**
     * Performs search.
     *
     * @param query - Query string.
     * @returns - Matching items' IDs.
     */
    readonly search: (query: string) => readonly T[];
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
    readonly create: <T extends object>(idField: string & keyof T, fields: ReadonlyArray<string & keyof T>, items: readonly T[]) => Engine<T>;
}
//# sourceMappingURL=inlineSearch.d.ts.map