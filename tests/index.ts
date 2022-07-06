import * as facades from "@";
import { o } from "@skylib/functions";

test.each(
  // eslint-disable-next-line @skylib/custom/no-anonymous-return -- Ok
  o.entries<string, object>(facades).map(([name, facade]) => {
    return { facade, name };
  })
)("facades", ({ facade, name }) => {
  expect(() => o.get(facade, "unknown-property")).toThrow(
    new Error(`Missing facade implementation: ${name}`)
  );
});
