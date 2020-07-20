import http from "http";
import Route from "./Route";

class HextecCreator {
  static createApp = (routes: Array<Route>) => {
    return {
      getRoutes: () => {
        return routes;
      },
      run: (port: number) => {
        http
          .createServer(function (req, res) {
            var correctRoute;
            for (var route of routes) {
              if (route.getUrl() === req.url) {
                correctRoute = route;
                break;
              } else {
                correctRoute = "Route not found";
              }
            }

            if (typeof correctRoute != "object") {
              res.write("Route not found");
              res.end();
            } else {
              res.write(correctRoute.getHandlerFunc()().getResponse());
              res.end();
            }
          })
          .listen(port);
      },
    };
  };
}

export default HextecCreator;
