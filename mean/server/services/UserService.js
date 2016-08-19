var User = require('./../models/user');
var config = require('./../config/data');
var hasher = require('./../validators/HashService');
var validater = require('./../validators/UserValidation');

//Fields of user we must go through when creating a user
var fields = ['name','bio','year','phone','email','password', 'preferredCampus','school','preferredTime'];

module.exports = {
	getList(req, res) {
	    //ONLY RETURN CERTAIN FIELDS

	    // use mongoose to get all users in the database
	    User.find(function(err, users) {

	        // if there is an error retrieving, send the error. 
	                        // nothing after res.send(err) will execute
	        if (err)
	            res.send(err);

	        res.json(users); // return all nerds in JSON format
	    });
	},

	create(req, res) {
	   var newUser = { 'isAdmin': false};
	   var form = req.body;
	   var errors = {};
	   //Error Checking
	   for (var i in validater) {
	   		if (! validater[i](newUser,errors,fields[i])){
	   			res.json({'errorFields':errors});
	   		}
	   }
	   if(typeof form.isTutor == 'boolean' && typeof form.isTutee == 'boolean'){
	   		newUser.isTutee = form.isTutee;
	   		newUser.isTutor = form.isTutor;
	   }

	    // use mongoose to get all users in the database
	    User.create(newUser, function(err, ans) {

	        // if there is an error retrieving, send the error. 
	                        // nothing after res.send(err) will execute
	        if (err)
	            res.send(err);

	        res.json(ans); // return all nerds in JSON format
	    });
	}
}