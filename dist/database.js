"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const unique_id_1 = require("./unique-id");
const functions_1 = require("@skylib/functions");
exports.database = (0, functions_1.createFacade)("database", {
    uniqueAttachedSubscriptionId: () => `attached-subscription-id-${(0, unique_id_1.uniqueId)()}`,
    uniqueSubscriptionId: () => `subscription-id-${(0, unique_id_1.uniqueId)()}`
});
//# sourceMappingURL=database.js.map