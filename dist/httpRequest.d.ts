import type { ReadonlyIndexedObject, ReadonlyPartialRecord } from "@skylib/functions/dist/types/core";
export declare const httpRequest: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
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
    readonly send: (url: string, method?: HttpRequestMethod, data?: ReadonlyIndexedObject, headers?: HttpHeaders) => Promise<unknown>;
}
export declare type HttpHeader = "Accept" | "Accept-Language" | "Authorization" | "Content-Type";
export declare const HttpHeaderVO: import("@skylib/functions/dist/types/core").ValidationObject<HttpHeader>;
export declare type HttpHeaders = ReadonlyPartialRecord<HttpHeader, string>;
export declare type HttpRequestMethod = "delete" | "get" | "post";
export declare const HttpRequestMethodVO: import("@skylib/functions/dist/types/core").ValidationObject<HttpRequestMethod>;
//# sourceMappingURL=httpRequest.d.ts.map