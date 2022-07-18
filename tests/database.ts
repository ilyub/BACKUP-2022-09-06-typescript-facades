/* eslint-disable no-warning-comments -- Wait for @skylib/eslint-plugin update */

import { database, uniqueId } from "@";

// fixme
uniqueId.setImplementation(() => "unique");
test("uniqueAttachedSubscriptionId", () => {
  expect(database.uniqueAttachedSubscriptionId()).toStartWith("uasid-");
});
test("uniqueSubscriptionId", () => {
  expect(database.uniqueSubscriptionId()).toStartWith("usid-");
});
