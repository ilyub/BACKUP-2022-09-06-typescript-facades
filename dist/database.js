"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStoredAttachedDocuments = exports.isStoredAttachedDocument = exports.database = void 0;
const tslib_1 = require("tslib");
const is = (0, tslib_1.__importStar)(require("@skylib/functions/dist/guards"));
const helpers_1 = require("@skylib/functions/dist/helpers");
exports.database = (0, helpers_1.createFacade)("database", {});
exports.isStoredAttachedDocument = is.factory(is.object.of, { _id: is.number, _rev: is.number }, {});
exports.isStoredAttachedDocuments = is.factory(is.array.of, exports.isStoredAttachedDocument);
//# sourceMappingURL=database.js.map