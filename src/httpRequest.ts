import { createFacade } from "@skylib/functions/dist/helpers";
import type {
  IndexedObject,
  PartialRecord
} from "@skylib/functions/dist/types/core";

export const httpRequest = createFacade<Facade>("httpRequest", {});

export interface Facade {
  /**
   * Sends HTTP request.
   *
   * @param url - URL.
   * @param method - HTTP method.
   * @param data - Data.
   * @param headers - Headers.
   * @returns Server response.
   */
  readonly send: (
    url: string,
    method?: HttpRequestMethod,
    data?: IndexedObject,
    headers?: HttpHeaders
  ) => Promise<unknown>;
}

export type HttpHeader =
  | "Accept-Language"
  | "Accept"
  | "Authorization"
  | "Content-Type";

export type HttpHeaders = PartialRecord<HttpHeader, string>;

export type HttpRequestMethod = "delete" | "get" | "post";
