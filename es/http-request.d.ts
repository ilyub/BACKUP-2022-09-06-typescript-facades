import type { IndexedObject, PartialRecord } from "@skylib/functions";
export declare const httpRequest: import("@skylib/functions").Facade<httpRequest.Facade, unknown>;
export declare namespace httpRequest {
    interface Facade {
        /**
         * Sends HTTP request.
         *
         * @param url - URL.
         * @param method - HTTP method.
         * @param data - Data.
         * @param headers - Headers.
         * @returns Server response.
         */
        readonly send: (url: string, method?: HttpRequestMethod, data?: IndexedObject, headers?: HttpHeaders) => Promise<unknown>;
    }
    type HttpHeader = "Accept-Language" | "Accept" | "Authorization" | "Content-Type";
    type HttpHeaders = PartialRecord<HttpHeader, string>;
    type HttpRequestMethod = "delete" | "get" | "post";
}
//# sourceMappingURL=http-request.d.ts.map