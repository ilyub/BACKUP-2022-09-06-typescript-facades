import type { PromiseType } from "./types";
import type { types } from "@skylib/functions";
export declare const handlePromise: import("@skylib/functions").Facade<handlePromise.Facade, unknown>;
export declare namespace handlePromise {
    interface Facade {
        /**
         * Handles promise with progress reporting.
         *
         * @param mixed - Promise or async function.
         * @param type - Type (determines expected duration for progress reporting).
         * @param errorMessage - Error message (used to alert user on error).
         */
        <T>(type: PromiseType | undefined, mixed: types.fn.AsyncPromise<T>, errorMessage?: string): void;
        /**
         * Waits for all promises.
         *
         * @returns Promise.
         */
        readonly runAll: () => Promise<void>;
        /**
         * Checks if there are active promises.
         *
         * @returns _True_ if there are active promises, _false_ otherwise.
         */
        readonly running: () => boolean;
        /**
         * Handles promise.
         *
         * @param mixed - Promise or async function.
         * @param errorMessage - Error message (used to alert user on error).
         */
        readonly silent: <T>(mixed: types.fn.AsyncPromise<T>, errorMessage?: string) => void;
    }
}
//# sourceMappingURL=handle-promise.d.ts.map