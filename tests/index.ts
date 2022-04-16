import { o, reflect } from "@skylib/functions";
import {
  compare,
  database,
  datetime,
  facebook,
  faker,
  google,
  handlePromise,
  httpRequest,
  icons,
  inlineSearch,
  lang,
  progressReporter,
  reactiveStorage,
  showAlert,
  showConfirm,
  testDelay,
  uniqueId
} from "@";

test.each(
  o
    .entries<string, object>({
      compare,
      database,
      datetime,
      facebook,
      faker,
      google,
      handlePromise,
      httpRequest,
      icons,
      inlineSearch,
      lang,
      progressReporter,
      reactiveStorage,
      showAlert,
      showConfirm,
      testDelay,
      uniqueId
    })
    .map(([name, facade]) => {
      return { facade, name };
    })
)("facades", ({ facade, name }) => {
  expect(() => reflect.get(facade, "a")).toThrow(
    new Error(`Missing facade implementation: ${name}`)
  );
});
