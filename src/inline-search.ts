import { createFacade } from "@skylib/functions";

export const inlineSearch = createFacade<inlineSearch.Facade>(
  "inlineSearch",
  {}
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace inlineSearch {
  export interface Engine<T extends object> {
    /**
     * Performs search.
     *
     * @param query - Query string.
     * @returns - Matching items.
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
    readonly create: <T extends object>(
      idField: Field<T>,
      fields: Fields<T>,
      items: readonly T[]
    ) => Engine<T>;
  }

  export type Field<T extends object> = string & keyof T;

  export type Fields<T extends object> = ReadonlyArray<string & keyof T>;
}
