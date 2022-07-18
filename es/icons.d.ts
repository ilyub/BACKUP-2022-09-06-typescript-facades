import type { Rec, types } from "@skylib/functions";
declare global {
    namespace facades {
        namespace icons {
            interface Icon {
            }
        }
    }
}
export declare const icons: import("@skylib/functions").Facade<icons.Facade, unknown>;
export declare namespace icons {
    type Facade = Icons<Icon>;
    type Icon = types.object.keys.Pick<facades.icons.Icon, true, "extends->">;
    type Icons<T extends Icon> = Rec<T, string>;
}
//# sourceMappingURL=icons.d.ts.map