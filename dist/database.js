"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const functions_1 = require("@skylib/functions");
const unique_id_1 = require("./unique-id");
exports.database = (0, functions_1.createFacade)("database", {
    uniqueAttachedSubscriptionId: () => `uasid-${(0, unique_id_1.uniqueId)()}`,
    uniqueSubscriptionId: () => `usid-${(0, unique_id_1.uniqueId)()}`
});
//# sourceMappingURL=database.js.map