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
            let data: any = [];
            let correctRoute: any;
            req
              .on("data", (chunk) => {
                data.push(chunk);
                for (var route of routes) {
                  if (
                    route.getUrl() ===
                    url.parse(req.url as string, true).pathname
                  ) {
                    correctRoute = route;
                    break;
                  } else {
                    correctRoute = "Route not found";
                  }
                }
              })
              .on("end", () => {
                data = Buffer.concat(data).toString();
                if (typeof correctRoute != "object") {
                  res.write("Route not found");
                  res.end();
                } else {
                  res.write(
                    correctRoute
                      .getHandlerFunc()(
                        new HTTPRequest(
                          req.method,
                          req.url,
                          url.parse(req.url as string, true).query,
                          JSON.parse(data)
                        )
                      )
                      .getResponse()
                  );
                  res.end();
                }
              });
          })
          .listen(port);
      },
    };
  };
}

export default HextecCreator;
