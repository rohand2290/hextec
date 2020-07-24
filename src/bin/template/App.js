const HextecCreator = require("hextec").HextecCreator;
const Route = require("hextec").Route;
const RestResponse = require("hextec").Route;
const rootHandler = () => {
  return new RestResponse(JSON.stringify({ date: new Date() }));
};

const app = HextecCreator.createApp([new Route("/", rootHandler)]);

app.run(8080);
