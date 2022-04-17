"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const functions_1 = require("@skylib/functions");
const uniqueId_1 = require("./uniqueId");
exports.database = (0, functions_1.createFacade)("database", {
    uniqueAttachedSubscriptionId() {
        return `attached-subscription-id-${(0, uniqueId_1.uniqueId)()}`;
    },
    uniqueSubscriptionId() {
        return `subscription-id-${(0, uniqueId_1.uniqueId)()}`;
    }
});
//# sourceMappingURL=database.js.map