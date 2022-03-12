"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePromise = void 0;
const tslib_1 = require("tslib");
const fn = tslib_1.__importStar(require("@skylib/functions/dist/function"));
const is = tslib_1.__importStar(require("@skylib/functions/dist/guards"));
const helpers_1 = require("@skylib/functions/dist/helpers");
const core_1 = require("@skylib/functions/dist/types/core");
exports.handlePromise = fn.run(() => {
    const TaskTypeVO = (0, core_1.createValidationObject)({
        createDb: "createDb",
        dbRequest: "dbRequest",
        destroyDb: "destroyDb",
        httpRequest: "httpRequest",
        navigation: "navigation"
    });
    const isTaskType = is.factory(is.enumeration, TaskTypeVO);
    const isTaskTypeU = is.or.factory(isTaskType, is.undefined);
    return (0, helpers_1.createFacade)("handlePromise", {
        TaskTypeVO,
        isTaskType,
        isTaskTypeU
    });
});
//# sourceMappingURL=handlePromise.js.map