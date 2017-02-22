var friendData = require("../data/friend");

module.exports = function(app) {
	// show json data
	app.get("api/friends", function(req, res){
		res.json(friend);
	});

	// post data from a form
	app.post("/api/friends", function(req, res){
		if (friend.length < 5) {
			friend.push(req.body);
		}
		else {
			console.log('nothing added');
		}
	});
};