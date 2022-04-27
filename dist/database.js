"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const unique_id_1 = require("./unique-id");
const functions_1 = require("@skylib/functions");
exports.database = (0, functions_1.createFacade)("database", {
    uniqueAttachedSubscriptionId() {
        return `attached-subscription-id-${(0, unique_id_1.uniqueId)()}`;
    },
    uniqueSubscriptionId() {
        return `subscription-id-${(0, unique_id_1.uniqueId)()}`;
    }
});
//# sourceMappingURL=database.js.map