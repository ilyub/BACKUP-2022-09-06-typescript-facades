export declare const progressReporter: import("@skylib/functions").Facade<progressReporter.Facade, unknown>;
export declare namespace progressReporter {
    interface Facade {
        /**
         * Returns progress.
         *
         * @returns Progress.
         */
        readonly getProgress: () => number;
        /**
         * Resets to initial state.
         */
        readonly reset: () => void;
        /**
         * Starts new process.
         *
         * @returns Process.
         */
        readonly spawn: () => Process;
    }
    interface Process {
        /**
         * Marks process as done.
         *
         * @returns Self.
         */
        readonly done: () => Process;
        /**
         * Auto-grows progress.
         *
         * @param expectedDuration - Expected duration in milliseconds.
         * @returns Self.
         */
        readonly setAuto: (expectedDuration: number) => Process;
        /**
         * Sets progress.
         *
         * @param value - A number between 0 and 1.
         * @returns Self.
         */
        readonly setProgress: (value: number) => Process;
        /**
         * Sets weight.
         *
         * @param value - A number between 0 and 1.
         * @returns Self.
         */
        readonly setWeight: (value: number) => Process;
    }
}
//# sourceMappingURL=progressReporter.d.ts.map