"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pug_1 = __importDefault(require("pug"));
var PugRenderer = /** @class */ (function () {
    function PugRenderer() {
        this.render = function (fileName, context) {
            var functionRenderer = pug_1["default"].compileFile(fileName);
            return functionRenderer(context);
        };
    }
    return PugRenderer;
}());
exports["default"] = PugRenderer;
