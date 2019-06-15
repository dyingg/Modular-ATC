const express = require("express");
const app = express();
const fs = require("fs");

const ROUTES_LOC = "./routes";

let routesHandlers = fs.readdirSync(ROUTES_LOC);

routesHandlers.forEach(route => {
  app.use("/" + route.split(".")[0], require(ROUTES_LOC + "/" + route));
});

app.listen(8080);
