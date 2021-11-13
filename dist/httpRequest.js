"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestMethodVO = exports.HttpHeaderVO = exports.httpRequest = void 0;
const helpers_1 = require("@skylib/functions/dist/helpers");
const core_1 = require("@skylib/functions/dist/types/core");
exports.httpRequest = (0, helpers_1.createFacade)("httpRequest", {});
exports.HttpHeaderVO = (0, core_1.createValidationObject)({
    "Accept": "Accept",
    "Accept-Language": "Accept-Language",
    "Authorization": "Authorization",
    "Content-Type": "Content-Type"
});
exports.HttpRequestMethodVO = (0, core_1.createValidationObject)({
    delete: "delete",
    get: "get",
    post: "post"
});
//# sourceMappingURL=httpRequest.js.map