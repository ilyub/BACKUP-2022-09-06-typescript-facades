import type { types } from "@skylib/functions";
declare global {
    namespace facades {
        namespace reactiveStorage {
            interface Observer {
                readonly resourceType?: "reactive-storage__observer";
            }
        }
    }
}
export declare const reactiveStorage: import("@skylib/functions").Facade<reactiveStorage.Facade, unknown>;
export declare namespace reactiveStorage {
    interface Facade {
        /**
         * Creates reactive object.
         *
         * @param obj - Object.
         * @returns Reactive object.
         */
        <T extends object>(obj: T): T;
        /**
         * Unsubscribes from changes.
         *
         * @param obj - Reactive object.
         * @param observer - Observer.
         */
        readonly unwatch: (obj: object, observer: Observer) => void;
        /**
         * Subscribes to changes.
         *
         * @param obj - Reactive object.
         * @param handler - Handles object change.
         * @param reducer - Reduces object for comparison.
         * @returns Observer.
         */
        readonly watch: <T extends object>(obj: T, handler: Handler<T>, reducer?: Reducer<T>) => Observer;
    }
    interface Handler<T extends object> {
        /**
         * Handles object change.
         *
         * @param obj - Object.
         */
        (obj: T): void;
    }
    type Observer = types.object.Required<Pick<facades.reactiveStorage.Observer, types.object.keys.Pick<facades.reactiveStorage.Observer, "optional" | "readonly", never>>, "type">;
    interface Reducer<T extends object> {
        /**
         * Reduces object for comparison.
         *
         * @param obj - Object.
         */
        (obj: T): unknown;
    }
}
//# sourceMappingURL=reactive-storage.d.ts.map