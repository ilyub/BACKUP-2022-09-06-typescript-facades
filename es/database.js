import { createFacade } from "@skylib/functions";
import { uniqueId } from "./uniqueId";
export const database = createFacade("database", {
    uniqueAttachedSubscriptionId() {
        return `attached-subscription-id-${uniqueId()}`;
    },
    uniqueSubscriptionId() {
        return `subscription-id-${uniqueId()}`;
    }
});
//# sourceMappingURL=database.js.map