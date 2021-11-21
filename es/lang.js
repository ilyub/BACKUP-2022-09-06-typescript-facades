import * as cast from "@skylib/functions/es/converters";
import * as is from "@skylib/functions/es/guards";
import { createFacade, wrapProxyHandler } from "@skylib/functions/es/helpers";
import * as reflect from "@skylib/functions/es/reflect";
export const lang = createFacade("lang", {
    createExcerpt(keys, dev) {
        const keysSet = new Set(keys);
        return dev
            ? new Proxy(lang, wrapProxyHandler("lang.createExcerpt", {
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
            : lang;
    }
});
//# sourceMappingURL=lang.js.map