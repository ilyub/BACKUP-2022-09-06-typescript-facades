import type { HTTPHeaders, HttpMethod } from "./types";
import type { IndexedRecord } from "@skylib/functions";
import { createFacade } from "@skylib/functions";

export const httpRequest = createFacade<httpRequest.Facade>("httpRequest", {});

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace httpRequest {
  export interface Facade {
    /**
     * Sends HTTP request.
     *
     * @param url - URL.
     * @param method - HTTP method.
     * @param data - Data.
     * @param headers - HTTPHeaders.
     * @returns Server response.
     */
    readonly send: (
      url: string,
      method?: HttpMethod,
      data?: IndexedRecord,
      headers?: HTTPHeaders
    ) => Promise<unknown>;
  }
}
