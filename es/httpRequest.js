import { createFacade } from "@skylib/functions/es/helpers";
import { createValidationObject } from "@skylib/functions/es/types/core";
export const httpRequest = createFacade("httpRequest", {});
export const HttpHeaderVO = createValidationObject({
    "Accept": "Accept",
    "Accept-Language": "Accept-Language",
    "Authorization": "Authorization",
    "Content-Type": "Content-Type"
});
export const HttpRequestMethodVO = createValidationObject({
    delete: "delete",
    get: "get",
    post: "post"
});
//# sourceMappingURL=httpRequest.js.map