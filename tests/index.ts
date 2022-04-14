import * as o from "@skylib/functions/dist/object";
import * as reflect from "@skylib/functions/dist/reflect";
import { compare } from "@/compare";
import { database } from "@/database";
import { datetime } from "@/datetime";
import { facebook } from "@/facebook";
import { faker } from "@/faker";
import { google } from "@/google";
import { handlePromise } from "@/handlePromise";
import { httpRequest } from "@/httpRequest";
import { icons } from "@/icons";
import { inlineSearch } from "@/inlineSearch";
import { lang } from "@/lang";
import { progressReporter } from "@/progressReporter";
import { reactiveStorage } from "@/reactiveStorage";
import { showAlert } from "@/showAlert";
import { showConfirm } from "@/showConfirm";
import { testDelay } from "@/testDelay";
import { uniqueId } from "@/uniqueId";

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
