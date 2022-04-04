import type { Rec } from "@skylib/functions/dist/types/core";
declare global {
    namespace facades {
        namespace icons {
            interface Facade {
            }
        }
    }
}
export declare const icons: import("@skylib/functions/dist/helpers").Facade<facades.icons.Facade, object>;
export declare type Facade = facades.icons.Facade;
export declare type Icon = keyof Facade;
export declare type Icons<T extends Icon> = Rec<T, string>;
//# sourceMappingURL=icons.d.ts.map