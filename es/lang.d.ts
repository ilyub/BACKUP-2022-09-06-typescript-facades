import type { NumStr, Rec, PickKeys } from "@skylib/functions";
declare global {
    namespace facades {
        namespace lang {
            interface Context {
                readonly _placeholder?: never;
            }
            interface Word {
                readonly _placeholder?: never;
            }
        }
    }
}
export declare const lang: import("@skylib/functions").Facade<lang.Facade, unknown>;
export declare namespace lang {
    type Context = PickKeys<facades.lang.Context, true, "extends->">;
    interface Dictionary<W extends Word, C extends Context> {
        /**
         * Sets context.
         *
         * @param context - Context.
         * @returns Dictionary.
         */
        readonly context: (context: C) => Facade;
        /**
         * Returns word. Uses previosly set context, count and replacements.
         *
         * @param key - Word ID.
         * @returns Word.
         */
        readonly get: (key: Transform<W>) => string;
        /**
         * Returns word. Uses previosly set context, count and replacements.
         *
         * @param key - Word ID.
         * @returns Word.
         */
        readonly getIfExists: (key: string) => string;
        /**
         * Checks if word exists.
         *
         * @param key - Word ID.
         * @returns _True_ if word exists, _false_ otherwise.
         */
        readonly has: (key: string) => key is Transform<Word>;
        readonly keys: Rec<Transform<W>, Transform<Word>>;
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
         * @param name - Name.
         * @param replacement - Value or word ID.
         * @returns Dictionary.
         */
        readonly with: (name: string, replacement: NumStr) => Facade;
    }
    type Facade = Lang<Word, Context>;
    type Lang<W extends Word, C extends Context> = Dictionary<W, C> & Rec<Transform<W>, string>;
    type Transform<W extends Word> = Capitalize<W> | Lowercase<W> | Uncapitalize<W> | Uppercase<W>;
    type Word = PickKeys<facades.lang.Word, true, "extends->">;
}
//# sourceMappingURL=lang.d.ts.map