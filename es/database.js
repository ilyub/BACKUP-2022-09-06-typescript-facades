import * as is from "@skylib/functions/es/guards";
import { createFacade } from "@skylib/functions/es/helpers";
import { uniqueId } from "./uniqueId";
export const database = createFacade("database", {});
export const isFieldConditions = is.factory(is.object.of, {}, {
    dateGt: is.string,
    dateGte: is.string,
    dateLt: is.string,
    dateLte: is.string,
    eq: is.unknown,
    gt: is.numStr,
    gte: is.numStr,
    isSet: is.boolean,
    lt: is.numStr,
    lte: is.numStr,
    neq: is.unknown
});
export const isConditionsGroup = is.factory(is.indexedObject.of, isFieldConditions);
export const isConditionsGroups = is.factory(is.array.of, isConditionsGroup);
export const isConditions = is.or.factory(isConditionsGroup, isConditionsGroups);
export const isStoredAttachedDocument = is.factory(is.object.of, { _id: is.number, _rev: is.number }, {});
export const isStoredAttachedDocuments = is.factory(is.array.of, isStoredAttachedDocument);
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isFieldConditionsFactory(_guard) {
    return isFieldConditions;
}
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isConditionsGroupFactory(_guard) {
    return isConditionsGroup;
}
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isConditionsGroupsFactory(_guard) {
    return isConditionsGroups;
}
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isConditionsFactory(_guard) {
    return isConditions;
}
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