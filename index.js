var express = require("express");
var app = express();

require("./server/config/express")(app);
require("./server/config/routes")(app);

