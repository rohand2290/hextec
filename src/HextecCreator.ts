import http from "http";
import url from "url";
import Route from "./Route";
import HTTPRequest from "./HTTPRequest";

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
              let body = "";
              let parsedBody: object = {};
              req.on("data", (chunk) => (body += chunk.toString()));
              req.on("end", () => (parsedBody = JSON.parse(body)));
              res.write(
                correctRoute
                  .getHandlerFunc()(
                    new HTTPRequest(
                      req.method,
                      req.url,
                      url.parse(req.url as string, true).query,
                      parsedBody
                    )
                  )
                  .getResponse()
              );
              res.end();
            }
          })
          .listen(port);
      },
    };
  };
}

export default HextecCreator;
