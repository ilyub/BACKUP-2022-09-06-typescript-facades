import * as is from "@skylib/functions/dist/guards";

import {
  isConditionsFactory,
  isConditionsGroupFactory,
  isConditionsGroupsFactory,
  isFieldConditionsFactory,
  uniqueAttachedSubscriptionId,
  uniqueSubscriptionId
} from "@/database";
import { uniqueId } from "@/uniqueId";

uniqueId.setImplementation(() => "unique");

test("isFieldConditionsFactory", () => {
  expect(typeof isFieldConditionsFactory(is.string)).toBe("function");
});

test("isConditionsGroupFactory", () => {
  expect(typeof isConditionsGroupFactory(is.string)).toBe("function");
});

test("isConditionsGroupsFactory", () => {
  expect(typeof isConditionsGroupsFactory(is.string)).toBe("function");
});

test("isConditionsFactory", () => {
  expect(typeof isConditionsFactory(is.string)).toBe("function");
});

test("uniqueAttachedSubscriptionId", () => {
  expect(uniqueAttachedSubscriptionId()).toStartWith(
    "attached-subscription-id-unique"
  );
});

test("uniqueSubscriptionId", () => {
  expect(uniqueSubscriptionId()).toStartWith("subscription-id-unique");
});
