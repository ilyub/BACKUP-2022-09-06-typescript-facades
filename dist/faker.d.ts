export declare const faker: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
export interface Facade {
    /**
     * Generates random paragraph.
     *
     * @param minSentences - Min sentences.
     * @param maxSentences - Max sentences.
     * @param minWords - Min words.
     * @param maxWords - Max words.
     * @returns Random paragraph.
     */
    readonly paragraph: (minSentences?: number, maxSentences?: number, minWords?: number, maxWords?: number) => string;
    /**
     * Generates random phrase.
     *
     * @param minWords - Min words.
     * @param maxWords - Max words.
     * @returns Random phrase.
     */
    readonly phrase: (minWords?: number, maxWords?: number) => string;
    /**
     * Generates random sentence.
     *
     * @param minWords - Min words.
     * @param maxWords - Max words.
     * @returns Random sentence.
     */
    readonly sentence: (minWords?: number, maxWords?: number) => string;
    /**
     * Generates random word.
     *
     * @returns Random word.
     */
    readonly word: () => string;
}
//# sourceMappingURL=faker.d.ts.map