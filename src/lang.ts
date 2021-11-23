import * as cast from "@skylib/functions/dist/converters";
import * as is from "@skylib/functions/dist/guards";
import { createFacade, wrapProxyHandler } from "@skylib/functions/dist/helpers";
import * as reflect from "@skylib/functions/dist/reflect";
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

export const lang = createFacade<Facade, Extension>("lang", {
  createExcerpt<T extends Word>(
    keys: readonly T[],
    dev: boolean
  ): DictionaryAndWords<T> {
    const keysSet = new Set<PropertyKey>(keys);

    return dev
      ? new Proxy(
          lang,
          wrapProxyHandler("lang.createExcerpt", {
            get(target, key) {
              if (keysSet.has(key)) return reflect.get(target, key);

              if (is.string(key) && key.startsWith("__"))
                return reflect.get(target, key);

              throw new Error(`Unknown key: ${cast.string(key)}`);
            },
            getOwnPropertyDescriptor(target, key) {
              return Object.getOwnPropertyDescriptor(target, key);
            }
          })
        )
      : lang;
  }
});

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

export type DictionaryAndWords<T extends string> = Dictionary &
  ReadonlyRecord<Transforms<T>, string>;

export interface Extension {
  /**
   * Creates facade excerpt.
   *
   * @param keys - Keys.
   * @param dev - Development mode.
   * @returns Facade excerpt.
   */
  readonly createExcerpt: <T extends Word>(
    keys: readonly T[],
    dev: boolean
  ) => DictionaryAndWords<T>;
}

export type Facade = DictionaryAndWords<Word>;

export type Transforms<T extends string> =
  | Capitalize<T>
  | Lowercase<T>
  | Uncapitalize<T>
  | Uppercase<T>;

export type Word = keyof facades.lang.Word;
