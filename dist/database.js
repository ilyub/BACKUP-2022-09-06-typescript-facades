"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueSubscriptionId = exports.uniqueAttachedSubscriptionId = exports.database = void 0;
const helpers_1 = require("@skylib/functions/dist/helpers");
const uniqueId_1 = require("./uniqueId");
exports.database = (0, helpers_1.createFacade)("database", {});
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