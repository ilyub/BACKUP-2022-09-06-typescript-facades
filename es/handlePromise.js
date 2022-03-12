import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";
import { createFacade } from "@skylib/functions/es/helpers";
import { createValidationObject } from "@skylib/functions/es/types/core";
export const handlePromise = fn.run(() => {
    const TaskTypeVO = createValidationObject({
        createDb: "createDb",
        dbRequest: "dbRequest",
        destroyDb: "destroyDb",
        httpRequest: "httpRequest",
        navigation: "navigation"
    });
    const isTaskType = is.factory(is.enumeration, TaskTypeVO);
    const isTaskTypeU = is.or.factory(isTaskType, is.undefined);
    return createFacade("handlePromise", {
        TaskTypeVO,
        isTaskType,
        isTaskTypeU
    });
});
//# sourceMappingURL=handlePromise.js.map