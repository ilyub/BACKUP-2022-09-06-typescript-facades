import { createFacade } from "@skylib/functions/dist/helpers";
import type { NumStr, ReadonlyRecord } from "@skylib/functions/dist/types/core";

declare global {
  namespace facades {
    namespace lang {
      interface Context {
        readonly SampleContext: true;
      }

      interface Word {
        readonly SampleWord: true;
      }
    }
  }
}

export const lang = createFacade<Facade>("lang", {});

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
  readonly has: (key: string) => key is Transforms;
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

export type Facade = Dictionary & Words;

export type Word = keyof facades.lang.Word;

export type Transforms =
  | Capitalize<Word>
  | Lowercase<Word>
  | Uncapitalize<Word>
  | Uppercase<Word>;

export type Words = ReadonlyRecord<Transforms, string>;
