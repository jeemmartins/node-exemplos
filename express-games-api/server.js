const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(bodyParser.json());

const routes = fs.readdirSync(path.join(__dirname, "routes"));

for (const route of routes) {
  app.use(require(path.join(__dirname, "routes", route)));
}

app.listen(8080);
