import { createFacade, createValidationObject } from "@skylib/functions/es/helpers";
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