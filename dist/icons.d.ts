import type { Match } from "ts-toolbelt/out/Any/_Internal";
import type { FilterKeys } from "ts-toolbelt/out/Object/FilterKeys";
import type { Rec } from "@skylib/functions/dist/types/core";
declare global {
    namespace facades {
        namespace icons {
            interface Icon {
            }
        }
    }
}
export declare const icons: import("@skylib/functions/dist/helpers").Facade<Facade, unknown>;
export declare type Facade = Icons<Icon>;
export declare type Icon = PickKeys<facades.icons.Icon, true, "extends->">;
export declare type Icons<T extends Icon> = Rec<T, string>;
export declare type PickKeys<T extends object, E, M extends Match = "default"> = Exclude<keyof T, FilterKeys<T, E, M>>;
//# sourceMappingURL=icons.d.ts.map