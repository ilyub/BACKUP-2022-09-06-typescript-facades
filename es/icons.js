import * as cast from "@skylib/functions/es/converters";
import * as is from "@skylib/functions/es/guards";
import { createFacade, wrapProxyHandler } from "@skylib/functions/es/helpers";
import * as reflect from "@skylib/functions/es/reflect";
export const icons = createFacade("icons", {
    createExcerpt(keys, dev) {
        const keysSet = new Set(keys);
        return dev
            ? new Proxy(icons, wrapProxyHandler("icons.createExcerpt", {
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
            : icons;
    }
});
//# sourceMappingURL=icons.js.map