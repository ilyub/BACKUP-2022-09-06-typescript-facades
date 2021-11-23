import type { NumStr, ReadonlyRecord } from "@skylib/functions/es/types/core";
declare global {
    namespace facades {
        namespace lang {
            interface DefaultContext {
                readonly SampleContext: true;
            }
            interface DefaultWord {
                readonly SampleWord: true;
            }
            interface Context {
            }
            interface Word {
            }
        }
    }
}
export declare const lang: import("@skylib/functions/es/helpers").Facade<Facade, Extension>;
export declare type Context = keyof facades.lang.Context extends never ? keyof facades.lang.DefaultContext : keyof facades.lang.Context;
export interface Dictionary {
    /**
     * Sets context.
     *
     * @param context - Context.
     * @returns Dictionary.
     */
    readonly context: (context: Context) => Facade;
    /**
     * Returns word based on context and count (applies replacements).
     *
     * @param key - Word ID.
     * @returns Word.
     */
    readonly get: (key: string) => string;
    /**
     * Checks if word exists.
     *
     * @param key - Word ID.
     * @returns _True_ if word exists, _false_ otherwise.
     */
    readonly has: (key: string) => key is Transforms<Word>;
    /**
     * Sets count for plural form.
     *
     * @param count - Count for plural form.
     * @returns Dictionary.
     */
    readonly plural: (count: number) => Facade;
    /**
     * Adds replacement.
     *
     * @param search - Search term.
     * @param replace - Replacement.
     * @returns Dictionary.
     */
    readonly with: (search: string, replace: NumStr) => Facade;
}
export declare type DictionaryAndWords<T extends string> = Dictionary & ReadonlyRecord<Transforms<T>, string>;
export interface Extension {
    /**
     * Creates facade excerpt.
     *
     * @param keys - Keys.
     * @param dev - Development mode.
     * @returns Facade excerpt.
     */
    readonly createExcerpt: <T extends Word>(keys: readonly T[], dev: boolean) => DictionaryAndWords<T>;
}
export declare type Facade = DictionaryAndWords<Word>;
export declare type Transforms<T extends string> = Capitalize<T> | Lowercase<T> | Uncapitalize<T> | Uppercase<T>;
export declare type Word = keyof facades.lang.Word extends never ? keyof facades.lang.DefaultWord : keyof facades.lang.Word;
//# sourceMappingURL=lang.d.ts.map