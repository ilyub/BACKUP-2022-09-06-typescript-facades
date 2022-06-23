import * as facades from "@";
import { o } from "@skylib/functions";

test.each(
  o.entries<string, object>(facades).map(([name, facade]) => {
    return { facade, name };
  })
)("facades", ({ facade, name }) => {
  // eslint-disable-next-line @skylib/functions/no-restricted-syntax -- Wait for @skylib/functions update
  expect(() => o.get(facade, "unknown-property")).toThrow(
    new Error(`Missing facade implementation: ${name}`)
  );
});
