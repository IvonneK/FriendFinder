console.log("apiRoutes.js");
var friend = require("../data/friend");

console.log(friend);

module.exports = function(app) {
	console.log('apiRoutes // show json data')

	// get data from file
	console.log('apiRoutes.js just before app.get')
	app.get("/api/friend", function(req, res){
		console.log('apiRoutes.js in app.get')
		res.json(friend);
	});

	// post data from a survey form
	console.log('apiRoutes.js just before post')
	app.post("/api/friend", function(req, res){
		console.log('apiRoutes.js just before push'); 
		friend.push(req.body);

		console.log('apiRoutes.js after push');
		res.json(true);		

		console.log('apiRoutes.js res.json');
	});
};