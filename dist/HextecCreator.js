"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var HextecCreator = /** @class */ (function () {
    function HextecCreator() {
    }
    HextecCreator.createApp = function (routes) {
        return {
            getRoutes: function () {
                return routes;
            },
            run: function (port) {
                http_1["default"]
                    .createServer(function (req, res) {
                    var correctRoute;
                    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
                        var route = routes_1[_i];
                        if (route.getUrl() === req.url) {
                            correctRoute = route;
                            break;
                        }
                        else {
                            correctRoute = "Route not found";
                        }
                    }
                    if (typeof correctRoute != "object") {
                        res.write("Route not found");
                        res.end();
                    }
                    else {
                        res.write(correctRoute.getHandlerFunc()().getResponse());
                        res.end();
                    }
                })
                    .listen(port);
            }
        };
    };
    return HextecCreator;
}());
exports["default"] = HextecCreator;
