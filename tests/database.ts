import { database, uniqueId } from "@";

uniqueId.setImplementation(() => "unique");

test("uniqueAttachedSubscriptionId", () => {
  expect(database.uniqueAttachedSubscriptionId()).toStartWith(
    "attached-subscription-id-unique"
  );
});

test("uniqueSubscriptionId", () => {
  expect(database.uniqueSubscriptionId()).toStartWith("subscription-id-unique");
});
