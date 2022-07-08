import type { IndexedRecord, PartialRecord } from "@skylib/functions";
import { createFacade } from "@skylib/functions";

export const httpRequest = createFacade<httpRequest.Facade>("httpRequest", {});

export namespace httpRequest {
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
      data?: IndexedRecord,
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
}
