var Tsession = require('./../models/tsession');

module.exports = {
	getAll(req, res) {
	    // use mongoose to get all users in the database
	    Tsession.find(function(err, tsessions) {

	        // if there is an error retrieving, send the error. 
	                        // nothing after res.send(err) will execute
	        if (err)
	            res.send(err);

	        res.json(tsessions); // return all nerds in JSON format
	    });
	}
}