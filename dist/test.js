"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = __importDefault(require("./index"));
var Route_1 = __importDefault(require("./Route"));
var RestResponse_1 = __importDefault(require("./RestResponse"));
var HTMLResponse_1 = __importDefault(require("./HTMLResponse"));
var PugRenderer_1 = __importDefault(require("./PugRenderer"));
var rootHandler = function (request) {
    return new RestResponse_1["default"]("something");
};
var homeHandler = function (request) {
    return new RestResponse_1["default"]("somethingElse");
};
var jsonHandler = function (request) {
    return new RestResponse_1["default"](JSON.stringify({ name: "name", password: "password" }));
};
var pugHandler = function (request) {
    var renderer = new PugRenderer_1["default"]();
    return new HTMLResponse_1["default"](renderer.render(__dirname + "/index.pug", { name: "de" }));
};
var app = index_1["default"]([
    new Route_1["default"]("/json", jsonHandler),
    new Route_1["default"]("/", rootHandler),
    new Route_1["default"]("/home", homeHandler),
    new Route_1["default"]("/pugRender", pugHandler),
]);
app.run(8080);
