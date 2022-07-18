import type { HTTPHeaders, HttpMethod } from "./types";
import type { IndexedRecord } from "@skylib/functions";
export declare const httpRequest: import("@skylib/functions").Facade<httpRequest.Facade, unknown>;
export declare namespace httpRequest {
    interface Facade {
        /**
         * Sends HTTP request.
         *
         * @param url - URL.
         * @param method - HTTP method.
         * @param data - Data.
         * @param headers - HTTPHeaders.
         * @returns Server response.
         */
        readonly send: (url: string, method?: HttpMethod, data?: IndexedRecord, headers?: HTTPHeaders) => Promise<unknown>;
    }
}
//# sourceMappingURL=http-request.d.ts.map