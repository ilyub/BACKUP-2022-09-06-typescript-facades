"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSubscriptionId = exports.uniqueAttachedSubscriptionId = exports.isConditionsFactory = exports.isConditionsGroupsFactory = exports.isConditionsGroupFactory = exports.isFieldConditionsFactory = exports.isStoredAttachedDocuments = exports.isStoredAttachedDocument = exports.isConditions = exports.isConditionsGroups = exports.isConditionsGroup = exports.isFieldConditions = exports.database = void 0;
const tslib_1 = require("tslib");
const is = tslib_1.__importStar(require("@skylib/functions/dist/guards"));
const helpers_1 = require("@skylib/functions/dist/helpers");
const uniqueId_1 = require("./uniqueId");
exports.database = (0, helpers_1.createFacade)("database", {});
exports.isFieldConditions = is.factory(is.object.of, {}, {
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
exports.isConditionsGroup = is.factory(is.indexedObject.of, exports.isFieldConditions);
exports.isConditionsGroups = is.factory(is.array.of, exports.isConditionsGroup);
exports.isConditions = is.or.factory(exports.isConditionsGroup, exports.isConditionsGroups);
exports.isStoredAttachedDocument = is.factory(is.object.of, { _id: is.number, _rev: is.number }, {});
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
function isConditionsGroupFactory(_guard) {
    return exports.isConditionsGroup;
}
exports.isConditionsGroupFactory = isConditionsGroupFactory;
/**
 * Creates conditions guard.
 *
 * @param _guard - Guard.
 * @returns Conditions guard.
 */
function isConditionsGroupsFactory(_guard) {
    return exports.isConditionsGroups;
}
exports.isConditionsGroupsFactory = isConditionsGroupsFactory;
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