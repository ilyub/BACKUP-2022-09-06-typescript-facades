import { createFacade } from "@skylib/functions";
import { uniqueId } from "./unique-id";
export const database = createFacade("database", {
    uniqueAttachedSubscriptionId: () => `uasid-${uniqueId()}`,
    uniqueSubscriptionId: () => `usid-${uniqueId()}`
});
//# sourceMappingURL=database.js.map