"use strict";
exports.__esModule = true;
var Route = /** @class */ (function () {
    function Route(url, handlerFunc) {
        this.url = url;
        this.handlerFunc = handlerFunc;
    }
    Route.prototype.getUrl = function () {
        return this.url;
    };
    Route.prototype.setUrl = function (url) {
        this.url = url;
    };
    Route.prototype.getHandlerFunc = function () {
        return this.handlerFunc;
    };
    Route.prototype.setHandlerFunc = function (handlerFunc) {
        this.handlerFunc = handlerFunc;
    };
    return Route;
}());
exports["default"] = Route;
