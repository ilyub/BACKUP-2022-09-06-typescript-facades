import { createFacade } from "@skylib/functions";
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

export const lang = createFacade<lang.Facade, lang.Extension>("lang", {
  plain: (str: string) => `plain:${str}`
});

export namespace lang {
  export type Context = PickKeys<facades.lang.Context, true, "extends->">;

  export interface Dictionary<W extends Word, C extends Context> {
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
    readonly get: (key: Key) => string;
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
    readonly has: (key: string) => key is Key;
    readonly keys: Rec<Transform<W>, Transform>;
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

  export interface Extension {
    /**
     * Wraps plain text.
     *
     * @param str - Plain text.
     * @returns Wrapped plain text.
     */
    readonly plain: (str: string) => Plain;
  }

  export type Facade = Lang<Word, Context>;

  export type Key<W extends Word = Word> = Transform<W> | `plain:${string}`;

  export type Lang<W extends Word, C extends Context> = Dictionary<W, C> &
    Rec<Transform<W>, string>;

  export type Plain = `plain:${string}`;

  export type Transform<W extends Word = Word> =
    | Capitalize<W>
    | Lowercase<W>
    | Uncapitalize<W>
    | Uppercase<W>;

  export type Word = PickKeys<facades.lang.Word, true, "extends->">;
}
