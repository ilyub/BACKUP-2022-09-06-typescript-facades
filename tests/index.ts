import * as facades from "@";
import { o } from "@skylib/functions";

test.each(o.values(facades))("facades", facade => {
  expect(facade).toBeDefined();
});
