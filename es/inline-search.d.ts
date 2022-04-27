export declare const inlineSearch: import("@skylib/functions").Facade<inlineSearch.Facade, unknown>;
export declare namespace inlineSearch {
    interface Engine<T extends object> {
        /**
         * Performs search.
         *
         * @param query - Query string.
         * @returns - Matching items.
         */
        readonly search: (query: string) => readonly T[];
    }
    interface Facade {
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
}
//# sourceMappingURL=inline-search.d.ts.map