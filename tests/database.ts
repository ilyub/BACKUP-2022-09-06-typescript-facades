import * as facades from "@";

facades.uniqueId.setImplementation(() => "unique");

test("uniqueAttachedSubscriptionId", () => {
  expect(facades.database.uniqueAttachedSubscriptionId()).toBe("uasid-unique");
});

test("uniqueSubscriptionId", () => {
  expect(facades.database.uniqueSubscriptionId()).toBe("usid-unique");
});
