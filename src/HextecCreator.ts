import http from "http";
import url from "url";
import Route from "./Route";
import HTTPRequest from "./HTTPRequest";
import IResponse from "./IResponse";
import RestResponse from "./RestResponse";

class HextecCreator {
  static createApp = (routes: Array<Route>) => {
    return {
      getRoutes: () => {
        return routes;
      },
      run: (port: number) => {
        http
          .createServer(function (req, res) {
            console.log(routes);
            let data: any = [];
            let correctRoute: Route[];
            req
              .on("data", (chunk) => {
                data.push(chunk);
              })
              .on("end", () => {
                console.log(req.url);
                data = Buffer.concat(data).toString();
                correctRoute = routes.filter(
                  (route) =>
                    route.getUrl() ==
                    url.parse(req.url as string, true).pathname
                );
                if (typeof correctRoute[0] != "object") {
                  res.write("Route not found");
                  res.end();
                } else {
                  console.log(correctRoute);
                  let responseObj: IResponse = correctRoute[0].getHandlerFunc()(
                    new HTTPRequest(
                      req.method,
                      req.url,
                      url.parse(req.url as string, true).query,
                      data
                    )
                  );
                  res.write(responseObj.responseToString());
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
