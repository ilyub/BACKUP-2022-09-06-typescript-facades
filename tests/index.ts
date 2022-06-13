// eslint-disable-next-line @skylib/consistent-import -- Ok
import * as facades from "@";
import { o, reflect } from "@skylib/functions";

test.each(
  o.entries<string, object>(facades).map(([name, facade]) => {
    return { facade, name };
  })
)("facades", ({ facade, name }) => {
  expect(() => reflect.get(facade, "a")).toThrow(
    new Error(`Missing facade implementation: ${name}`)
  );
});
