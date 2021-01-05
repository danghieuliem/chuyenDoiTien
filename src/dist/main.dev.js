"use strict";

var express = require("express");

var path = require("path");

var router = require("./Routes");

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"](path.join(__dirname, "web")));
app.use("/api", router);
app.listen(port, function () {
  console.log("http://localhost:" + port);
});