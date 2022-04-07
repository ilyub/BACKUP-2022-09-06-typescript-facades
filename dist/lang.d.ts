import type { Match } from "ts-toolbelt/out/Any/_Internal";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { NumStr, Rec } from "@skylib/functions/dist/types/core";
declare global {
    namespace facades {
        namespace lang {
            interface Context {
            }
            interface Word {
            }
        }
    }
}
export declare const lang: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
export declare type Context = PickKeys<facades.lang.Context, true, "extends->">;
export interface Dictionary<C extends Context> {
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
export declare type Facade = Lang<Word, Context>;
export declare type Lang<W extends Word, C extends Context> = Dictionary<C> & Rec<Transforms<W>, string>;
export declare type Transforms<T extends Word> = Capitalize<T> | Lowercase<T> | Uncapitalize<T> | Uppercase<T>;
export declare type Word = PickKeys<facades.lang.Word, true, "extends->">;
export declare type PickKeys<T extends object, E, M extends Match = "default"> = Exclude<keyof T, FilterKeys<T, E, M>>;
//# sourceMappingURL=lang.d.ts.map