import * as is from "@skylib/functions/es/guards";
import { createFacade, createValidationObject } from "@skylib/functions/es/helpers";
import { uniqueId } from "./uniqueId";
export const database = createFacade("database", {});
export const DateConditionSignVO = createValidationObject({
    "+": "+",
    "-": "-"
});
export const DateConditionTypeVO = createValidationObject({
    endOfDay: "endOfDay",
    endOfHour: "endOfHour",
    endOfMonth: "endOfMonth",
    endOfWeek: "endOfWeek",
    now: "now",
    startOfDay: "startOfDay",
    startOfHour: "startOfHour",
    startOfMonth: "startOfMonth",
    startOfWeek: "startOfWeek"
});
export const DateConditionUnitVO = createValidationObject({
    day: "day",
    days: "days",
    hour: "hour",
    hours: "hours",
    minute: "minute",
    minutes: "minutes"
});
export const isDateConditionSign = is.factory(is.enumeration, DateConditionSignVO);
export const isDateConditionType = is.factory(is.enumeration, DateConditionTypeVO);
export const isDateConditionUnit = is.factory(is.enumeration, DateConditionUnitVO);
export const isDateCondition = is.or.factory(is.string, is.tuple.factory(isDateConditionType), is.tuple.factory(isDateConditionType, isDateConditionSign, is.number, isDateConditionUnit));
export const isFieldConditions = is.object.of.factory({}, {
    dateEq: isDateCondition,
    dateGt: isDateCondition,
    dateGte: isDateCondition,
    dateLt: isDateCondition,
    dateLte: isDateCondition,
    dateNeq: isDateCondition,
    eq: is.unknown,
    gt: is.numStr,
    gte: is.numStr,
    isSet: is.boolean,
    lt: is.numStr,
    lte: is.numStr,
    neq: is.unknown
});
export const isConditionsRecord = is.factory(is.indexedObject.of, isFieldConditions);
export const isConditionsArray = is.factory(is.array.of, isConditionsRecord);
export const isConditions = is.or.factory(isConditionsRecord, isConditionsArray);
export const isStoredAttachedDocument = is.object.of.factory({ _id: is.number, _rev: is.number }, {});
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
export function isConditionsRecordFactory(_guard) {
    return isConditionsRecord;
}
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
export function isConditionsArrayFactory(_guard) {
    return isConditionsArray;
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