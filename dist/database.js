"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSubscriptionId = exports.uniqueAttachedSubscriptionId = exports.isConditionsFactory = exports.isConditionsArrayFactory = exports.isConditionsRecordFactory = exports.isFieldConditionsFactory = exports.isStoredAttachedDocuments = exports.isStoredAttachedDocument = exports.isConditions = exports.isConditionsArray = exports.isConditionsRecord = exports.isFieldConditions = exports.isDateCondition = exports.isDateConditionUnit = exports.isDateConditionType = exports.isDateConditionSign = exports.DateConditionUnitVO = exports.DateConditionTypeVO = exports.DateConditionSignVO = exports.database = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("@skylib/functions/dist/guards"));
const helpers_1 = require("@skylib/functions/dist/helpers");
const uniqueId_1 = require("./uniqueId");
exports.database = (0, helpers_1.createFacade)("database", {});
exports.DateConditionSignVO = (0, helpers_1.createValidationObject)({
    "+": "+",
    "-": "-"
});
exports.DateConditionTypeVO = (0, helpers_1.createValidationObject)({
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
exports.DateConditionUnitVO = (0, helpers_1.createValidationObject)({
    day: "day",
    days: "days",
    hour: "hour",
    hours: "hours",
    minute: "minute",
    minutes: "minutes"
});
exports.isDateConditionSign = is.factory(is.enumeration, exports.DateConditionSignVO);
exports.isDateConditionType = is.factory(is.enumeration, exports.DateConditionTypeVO);
exports.isDateConditionUnit = is.factory(is.enumeration, exports.DateConditionUnitVO);
exports.isDateCondition = is.or.factory(is.string, is.tuple.factory(exports.isDateConditionType), is.tuple.factory(exports.isDateConditionType, exports.isDateConditionSign, is.number, exports.isDateConditionUnit));
exports.isFieldConditions = is.object.of.factory({}, {
    dateEq: exports.isDateCondition,
    dateGt: exports.isDateCondition,
    dateGte: exports.isDateCondition,
    dateLt: exports.isDateCondition,
    dateLte: exports.isDateCondition,
    dateNeq: exports.isDateCondition,
    eq: is.unknown,
    gt: is.numStr,
    gte: is.numStr,
    isSet: is.boolean,
    lt: is.numStr,
    lte: is.numStr,
    neq: is.unknown
});
exports.isConditionsRecord = is.factory(is.indexedObject.of, exports.isFieldConditions);
exports.isConditionsArray = is.factory(is.array.of, exports.isConditionsRecord);
exports.isConditions = is.or.factory(exports.isConditionsRecord, exports.isConditionsArray);
exports.isStoredAttachedDocument = is.object.of.factory({ _id: is.number, _rev: is.number }, {});
exports.isStoredAttachedDocuments = is.factory(is.array.of, exports.isStoredAttachedDocument);
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
function isFieldConditionsFactory(_guard) {
    return exports.isFieldConditions;
}
exports.isFieldConditionsFactory = isFieldConditionsFactory;
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
function isConditionsRecordFactory(_guard) {
    return exports.isConditionsRecord;
}
exports.isConditionsRecordFactory = isConditionsRecordFactory;
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
function isConditionsArrayFactory(_guard) {
    return exports.isConditionsArray;
}
exports.isConditionsArrayFactory = isConditionsArrayFactory;
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
function isConditionsFactory(_guard) {
    return exports.isConditions;
}
exports.isConditionsFactory = isConditionsFactory;
/**
 * Generates unique attached subscription ID.
 *
 * @returns Attached subscription ID.
 */
function uniqueAttachedSubscriptionId() {
    return `attached-subscription-id-${(0, uniqueId_1.uniqueId)()}`;
}
exports.uniqueAttachedSubscriptionId = uniqueAttachedSubscriptionId;
/**
 * Generates unique subscription ID.
 *
 * @returns Subscription ID.
 */
function uniqueSubscriptionId() {
    return `subscription-id-${(0, uniqueId_1.uniqueId)()}`;
}
exports.uniqueSubscriptionId = uniqueSubscriptionId;
//# sourceMappingURL=database.js.map