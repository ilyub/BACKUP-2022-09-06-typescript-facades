import * as facades from "@";
import { o } from "@skylib/functions";

interface Subtest {
  readonly facade: object;
  readonly name: string;
}

test.each(
  o.entries(facades).map(([name, facade]): Subtest => ({ facade, name }))
)("facades", ({ facade, name }) => {
  expect(() => o.get(facade, "unknown-property")).toThrow(
    new Error(`Missing facade implementation: ${name}`)
  );
});
