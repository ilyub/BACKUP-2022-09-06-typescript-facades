import { uniqueAttachedSubscriptionId, uniqueSubscriptionId } from "@/database";
import { uniqueId } from "@/uniqueId";

uniqueId.setImplementation(() => "unique");

test("uniqueAttachedSubscriptionId", () => {
  expect(uniqueAttachedSubscriptionId()).toStartWith(
    "attached-subscription-id-unique"
  );
});

test("uniqueSubscriptionId", () => {
  expect(uniqueSubscriptionId()).toStartWith("subscription-id-unique");
});
