import { uniqueId } from "./unique-id";
import { createFacade } from "@skylib/functions";
export const database = createFacade("database", {
    uniqueAttachedSubscriptionId: () => `attached-subscription-id-${uniqueId()}`,
    uniqueSubscriptionId: () => `subscription-id-${uniqueId()}`
});
//# sourceMappingURL=database.js.map