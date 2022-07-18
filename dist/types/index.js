"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeUnit = exports.RelativeDate = exports.PromiseType = exports.HttpMethod = exports.HttpHeader = void 0;
var HttpHeader;
(function (HttpHeader) {
    HttpHeader["accept"] = "Accept";
    HttpHeader["acceptLanguage"] = "Accept-Language";
    HttpHeader["authorization"] = "Authorization";
    HttpHeader["contentType"] = "Content-Type";
})(HttpHeader = exports.HttpHeader || (exports.HttpHeader = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["delete"] = "delete";
    HttpMethod["get"] = "get";
    HttpMethod["post"] = "post";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var PromiseType;
(function (PromiseType) {
    PromiseType["createDb"] = "createDb";
    PromiseType["dbRequest"] = "dbRequest";
    PromiseType["destroyDb"] = "destroyDb";
    PromiseType["httpRequest"] = "httpRequest";
    PromiseType["navigation"] = "navigation";
})(PromiseType = exports.PromiseType || (exports.PromiseType = {}));
var RelativeDate;
(function (RelativeDate) {
    RelativeDate["endOfDay"] = "endOfDay";
    RelativeDate["endOfHour"] = "endOfHour";
    RelativeDate["endOfMonth"] = "endOfMonth";
    RelativeDate["endOfWeek"] = "endOfWeek";
    RelativeDate["now"] = "now";
    RelativeDate["startOfDay"] = "startOfDay";
    RelativeDate["startOfHour"] = "startOfHour";
    RelativeDate["startOfMonth"] = "startOfMonth";
    RelativeDate["startOfWeek"] = "startOfWeek";
})(RelativeDate = exports.RelativeDate || (exports.RelativeDate = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["day"] = "day";
    TimeUnit["days"] = "days";
    TimeUnit["hour"] = "hour";
    TimeUnit["hours"] = "hours";
    TimeUnit["minute"] = "minute";
    TimeUnit["minutes"] = "minutes";
    TimeUnit["month"] = "month";
    TimeUnit["months"] = "months";
    TimeUnit["week"] = "week";
    TimeUnit["weeks"] = "weeks";
    TimeUnit["year"] = "year";
    TimeUnit["years"] = "years";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
//# sourceMappingURL=index.js.map