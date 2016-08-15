var Rating = require('./../models/rating');

module.exports = {
	getAll(req, res) {
	    // use mongoose to get all ratings in the database
	    Rating.find(function(err, ratings) {

	        // if there is an error retrieving, send the error. 
	                        // nothing after res.send(err) will execute
	        if (err)
	            res.send(err);

	        res.json(ratings); // return all nerds in JSON format
	    });
	}
}