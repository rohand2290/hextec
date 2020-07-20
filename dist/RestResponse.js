"use strict";
exports.__esModule = true;
var RestResponse = /** @class */ (function () {
    function RestResponse(response) {
        var _this = this;
        this.getResponse = function () {
            return _this.response;
        };
        this.response = response;
    }
    return RestResponse;
}());
exports["default"] = RestResponse;
