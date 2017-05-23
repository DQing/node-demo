var server = require("./demo1");
var router = require("./demo3");

server.start(router.route);