"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icons = void 0;
const tslib_1 = require("tslib");
const cast = (0, tslib_1.__importStar)(require("@skylib/functions/dist/converters"));
const is = (0, tslib_1.__importStar)(require("@skylib/functions/dist/guards"));
const helpers_1 = require("@skylib/functions/dist/helpers");
const reflect = (0, tslib_1.__importStar)(require("@skylib/functions/dist/reflect"));
exports.icons = (0, helpers_1.createFacade)("icons", {
    createExcerpt(keys, dev) {
        const keysSet = new Set(keys);
        return dev
            ? new Proxy(exports.icons, (0, helpers_1.wrapProxyHandler)("icons.createExcerpt", {
                get(target, key) {
                    if (keysSet.has(key))
                        return reflect.get(target, key);
                    if (is.string(key) && key.startsWith("__"))
                        return reflect.get(target, key);
                    throw new Error(`Unknown key: ${cast.string(key)}`);
                },
                getOwnPropertyDescriptor(target, key) {
                    return Object.getOwnPropertyDescriptor(target, key);
                }
            }))
            : exports.icons;
    }
});
//# sourceMappingURL=icons.js.map