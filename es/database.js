import { createFacade } from "@skylib/functions/es/helpers";
import { uniqueId } from "./uniqueId";
export const database = createFacade("database", {});
/**
 * Generates unique attached subscription ID.
 *
 * @returns Attached subscription ID.
 */
export function uniqueAttachedSubscriptionId() {
    return `attached-subscription-id-${uniqueId()}`;
}
/**
 * Generates unique subscription ID.
 *
 * @returns Subscription ID.
 */
export function uniqueSubscriptionId() {
    return `subscription-id-${uniqueId()}`;
}
//# sourceMappingURL=database.js.map