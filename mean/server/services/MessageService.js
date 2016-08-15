var Message = require('./../models/message');

module.exports = {
	getAll(req, res) {
	    // use mongoose to get all users in the database
	    Message.find(function(err, users) {

	        // if there is an error retrieving, send the error. 
	                        // nothing after res.send(err) will execute
	        if (err)
	            res.send(err);

	        res.json(users); // return all nerds in JSON format
	    });
	},

	create(req, res) {
	   var newMessage = req.body;
	   //Error Checking

	   //Make password
	   //newUser.hash =
	   //newUser.hashedPassword = 

	    // use mongoose to get all users in the database
	    Message.create(newMessage, function(err, ans) {

	        // if there is an error retrieving, send the error. 
	                        // nothing after res.send(err) will execute
	        if (err)
	            res.send(err);

	        res.json(ans); // return all nerds in JSON format
	    });
	}
}