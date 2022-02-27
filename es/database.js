import * as is from "@skylib/functions/es/guards";
import { createFacade } from "@skylib/functions/es/helpers";
import { uniqueId } from "./uniqueId";
export const database = createFacade("database", {});
export const isCondition = is.factory(is.object.of, {}, {
    dgt: is.number,
    dlt: is.number,
    eq: is.unknown,
    gt: is.numStr,
    gte: is.numStr,
    lt: is.numStr,
    lte: is.numStr,
    neq: is.unknown
});
export const isConditions = is.factory(is.indexedObject.of, isCondition);
export const isStoredAttachedDocument = is.factory(is.object.of, { _id: is.number, _rev: is.number }, {});
export const isStoredAttachedDocuments = is.factory(is.array.of, isStoredAttachedDocument);
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