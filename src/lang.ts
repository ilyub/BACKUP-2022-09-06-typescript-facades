import { createFacade } from "@skylib/functions/dist/helpers";
import type { NumStr, ReadonlyRecord } from "@skylib/functions/dist/types/core";

declare global {
  namespace facades {
    namespace lang {
      // eslint-disable-next-line @typescript-eslint/no-empty-interface
      interface Context {}

      // eslint-disable-next-line @typescript-eslint/no-empty-interface
      interface Word {}
    }
  }
}

export const lang = createFacade<Facade, object>("lang", {});

export type Context = keyof facades.lang.Context;

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

export type DictionaryAndWords<T extends Word> = Dictionary &
  ReadonlyRecord<Transforms<T>, string>;

export type Facade = DictionaryAndWords<Word>;

export type Transforms<T extends string> =
  | Capitalize<T>
  | Lowercase<T>
  | Uncapitalize<T>
  | Uppercase<T>;

export type Word = keyof facades.lang.Word;
