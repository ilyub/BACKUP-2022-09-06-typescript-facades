export {};
declare global {
    namespace facades {
        namespace icons {
            interface Icon {
                readonly sampleIcon: true;
            }
        }
        namespace lang {
            interface Context {
                readonly SampleContext: true;
            }
            interface Word {
                readonly SampleWord: true;
            }
        }
        namespace reactiveStorage {
            interface Observer {
                readonly resource: unknown;
            }
        }
    }
}
//# sourceMappingURL=global-types.d.ts.map