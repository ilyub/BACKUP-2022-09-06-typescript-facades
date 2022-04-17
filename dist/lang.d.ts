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
    interface Dictionary<C extends Context> {
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
        readonly get: (key: string) => string;
        /**
         * Checks that word exists.
         *
         * @param key - Word ID.
         * @returns _True_ if word exists, _false_ otherwise.
         */
        readonly has: (key: string) => boolean;
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
    type Lang<W extends Word, C extends Context> = Dictionary<C> & Rec<Transforms<W>, string>;
    type Transforms<T extends Word> = Capitalize<T> | Lowercase<T> | Uncapitalize<T> | Uppercase<T>;
    type Word = PickKeys<facades.lang.Word, true, "extends->">;
}
//# sourceMappingURL=lang.d.ts.map