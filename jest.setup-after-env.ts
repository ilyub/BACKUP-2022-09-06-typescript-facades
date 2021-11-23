import * as testUtils from "@skylib/functions/dist/testUtils";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly sampleIcon: string;
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
  }
}

testUtils.jestSetup();
beforeEach(testUtils.jestReset);
