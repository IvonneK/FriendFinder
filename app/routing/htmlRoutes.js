console.log("htmlRoutes.js");
var path = require("path");


module.exports = function(app) {

	app.get("/", function(req, res){
		// res.sendFile(path.join(_dirname, "../public/home.html"));
		// console.log(path.join(_dirname, "../public/home.html"));
		// console.log(path(_dirname+"home.html"))
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"))

	});

	// default route if no route found
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"))
	});
};
