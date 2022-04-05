import type { Match } from "ts-toolbelt/out/Any/_Internal";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";

import { createFacade } from "@skylib/functions/dist/helpers";
import type { NumStr, Rec } from "@skylib/functions/dist/types/core";

declare global {
  namespace facades {
    namespace lang {
      interface Context {}

      interface Word {}
    }
  }
}

export const lang = createFacade<Facade>("lang", {});

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
  readonly get: (key: string) => string;
  /**
   * Checks that word exists.
   *
   * @param key - Word ID.
   * @returns _True_ if word exists, _false_ otherwise.
   */
  readonly has: (key: string) => key is Transforms<W>;
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

export type Facade = Lang<Word, Context>;

export type Lang<W extends Word, C extends Context> = Dictionary<W, C> &
  Rec<Transforms<W>, string>;

export type Transforms<T extends Word> =
  | Capitalize<T>
  | Lowercase<T>
  | Uncapitalize<T>
  | Uppercase<T>;

export type Word = PickKeys<facades.lang.Word, true, "extends->">;

// eslint-disable-next-line no-warning-comments -- Wait for @skylib/functions update
// fixme
export type PickKeys<
  T extends object,
  E,
  M extends Match = "default"
> = Exclude<keyof T, FilterKeys<T, E, M>>;
