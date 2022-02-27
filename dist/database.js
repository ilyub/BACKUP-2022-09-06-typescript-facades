"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSubscriptionId = exports.uniqueAttachedSubscriptionId = exports.isStoredAttachedDocuments = exports.isStoredAttachedDocument = exports.isConditions = exports.isCondition = exports.database = void 0;
const tslib_1 = require("tslib");
const is = (0, tslib_1.__importStar)(require("@skylib/functions/dist/guards"));
const helpers_1 = require("@skylib/functions/dist/helpers");
const uniqueId_1 = require("./uniqueId");
exports.database = (0, helpers_1.createFacade)("database", {});
exports.isCondition = is.factory(is.object.of, {}, {
    dgt: is.number,
    dlt: is.number,
    eq: is.unknown,
    gt: is.numStr,
    gte: is.numStr,
    lt: is.numStr,
    lte: is.numStr,
    neq: is.unknown
});
exports.isConditions = is.factory(is.indexedObject.of, exports.isCondition);
exports.isStoredAttachedDocument = is.factory(is.object.of, { _id: is.number, _rev: is.number }, {});
exports.isStoredAttachedDocuments = is.factory(is.array.of, exports.isStoredAttachedDocument);
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