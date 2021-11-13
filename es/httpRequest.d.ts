import type { ReadonlyIndexedObject, ReadonlyPartialRecord } from "@skylib/functions/es/types/core";
export declare const httpRequest: import("@skylib/functions/es/helpers").Facade<Facade, unknown>;
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
export declare const HttpHeaderVO: import("@skylib/functions/es/types/core").ValidationObject<HttpHeader>;
export declare type HttpHeaders = ReadonlyPartialRecord<HttpHeader, string>;
export declare type HttpRequestMethod = "delete" | "get" | "post";
export declare const HttpRequestMethodVO: import("@skylib/functions/es/types/core").ValidationObject<HttpRequestMethod>;
//# sourceMappingURL=httpRequest.d.ts.map