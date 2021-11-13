import { createFacade } from "@skylib/functions/dist/helpers";
import type {
  ReadonlyIndexedObject,
  ReadonlyPartialRecord
} from "@skylib/functions/dist/types/core";
import { createValidationObject } from "@skylib/functions/dist/types/core";

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
    data?: ReadonlyIndexedObject,
    headers?: HttpHeaders
  ) => Promise<unknown>;
}

export type HttpHeader =
  | "Accept"
  | "Accept-Language"
  | "Authorization"
  | "Content-Type";

export const HttpHeaderVO = createValidationObject<HttpHeader>({
  "Accept": "Accept",
  "Accept-Language": "Accept-Language",
  "Authorization": "Authorization",
  "Content-Type": "Content-Type"
});

export type HttpHeaders = ReadonlyPartialRecord<HttpHeader, string>;

export type HttpRequestMethod = "delete" | "get" | "post";

export const HttpRequestMethodVO = createValidationObject<HttpRequestMethod>({
  delete: "delete",
  get: "get",
  post: "post"
});
