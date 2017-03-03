console.log("apiRoutes.js");
var friends = require("../data/friends");

console.log(friends);

module.exports = function(app) {
	console.log('apiRoutes // show json data')

	// get data from file
	console.log('apiRoutes.js just before app.get')
	app.get("/api/friends", function(req, res){
		console.log('apiRoutes.js in app.get')
		res.json(friends);
	});

	// post data from a survey form
	console.log('apiRoutes.js just before post')
	app.post("/api/friends", function(req, res){
		console.log('apiRoutes.js just before push'); 
		friends.push(req.body);

		console.log('apiRoutes.js after push');
		res.json(true);		

		console.log('apiRoutes.js make res.json true');
	});
};