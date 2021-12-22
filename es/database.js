import * as is from "@skylib/functions/es/guards";
import { createFacade } from "@skylib/functions/es/helpers";
export const database = createFacade("database", {});
export const isStoredAttachedDocument = is.factory(is.object.of, { _id: is.number, _rev: is.number }, {});
export const isStoredAttachedDocuments = is.factory(is.array.of, isStoredAttachedDocument);
//# sourceMappingURL=database.js.map