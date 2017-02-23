// Ivonne.Komis
// FriendFinder app 

console.log("server.js");

// setup server side and listening port
var express = require("express");
var bodyParser = require("body-parser");

// setup express server
var app = express();

var PORT = process.env.PORT || 8080;

// body parser make our server interpret data sent
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// show server different routes to respond to user when they visit a url added .js otherwise wouldn't work

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// start server (listener)
app.listen(PORT, function() {
	console.log("[server.js] app is listening to port " + PORT );
});
