import * as is from "@skylib/functions/dist/guards";

import {
  isConditionsArrayFactory,
  isConditionsFactory,
  isConditionsRecordFactory,
  isFieldConditionsFactory,
  uniqueAttachedSubscriptionId,
  uniqueSubscriptionId
} from "@/database";
import { uniqueId } from "@/uniqueId";

uniqueId.setImplementation(() => "unique");

test("isConditionsArrayFactory", () => {
  expect(typeof isConditionsArrayFactory(is.string)).toBe("function");
});

test("isConditionsFactory", () => {
  expect(typeof isConditionsFactory(is.string)).toBe("function");
});

test("isConditionsRecordFactory", () => {
  expect(typeof isConditionsRecordFactory(is.string)).toBe("function");
});

test("isFieldConditionsFactory", () => {
  expect(typeof isFieldConditionsFactory(is.string)).toBe("function");
});

test("uniqueAttachedSubscriptionId", () => {
  expect(uniqueAttachedSubscriptionId()).toStartWith(
    "attached-subscription-id-unique"
  );
});

test("uniqueSubscriptionId", () => {
  expect(uniqueSubscriptionId()).toStartWith("subscription-id-unique");
});
