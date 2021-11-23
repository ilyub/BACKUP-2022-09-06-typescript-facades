declare global {
    namespace facades {
        namespace icons {
            interface DefaultFacade {
                readonly sampleIcon: string;
            }
            interface Facade {
            }
        }
    }
}
export declare const icons: import("@skylib/functions/dist/helpers").Facade<facades.icons.DefaultFacade, Extension>;
export interface Extension {
    /**
     * Creates facade excerpt.
     *
     * @param keys - Keys.
     * @param dev - Development mode.
     * @returns Facade excerpt.
     */
    readonly createExcerpt: <T extends Icon>(keys: readonly T[], dev: boolean) => Record<T, string>;
}
export declare type Facade = keyof facades.icons.Facade extends never ? facades.icons.DefaultFacade : facades.icons.Facade;
export declare type Icon = keyof Facade;
//# sourceMappingURL=icons.d.ts.map