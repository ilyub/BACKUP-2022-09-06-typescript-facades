// eslint-disable-next-line @skylib/consistent-import -- Postponed
import * as facades from "@";
import { o } from "@skylib/functions";

test.each(
  o.entries<string, object>(facades).map(([name, facade]) => {
    return { facade, name };
  })
)("facades", ({ facade, name }) => {
  // eslint-disable-next-line no-restricted-syntax -- Ok
  expect(() => o.get(facade, "unknown-property")).toThrow(
    new Error(`Missing facade implementation: ${name}`)
  );
});
