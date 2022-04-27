import { uniqueId } from "./unique-id";
import { createFacade } from "@skylib/functions";
export const database = createFacade("database", {
    uniqueAttachedSubscriptionId() {
        return `attached-subscription-id-${uniqueId()}`;
    },
    uniqueSubscriptionId() {
        return `subscription-id-${uniqueId()}`;
    }
});
//# sourceMappingURL=database.js.map