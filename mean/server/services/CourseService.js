var Course = require('./../models/course');

module.exports = {
	getAll(req, res) {
	    // use mongoose to get all Course in the database
	    Course.find(function(err, courses) {

	        // if there is an error retrieving, send the error. 
	                        // nothing after res.send(err) will execute
	        if (err)
	            res.send(err);

	        res.json(courses); // return all nerds in JSON format
	    });
	}
}