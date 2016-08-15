// Imports
var mongoose = require('mongoose');

// COURSE MODEL
module.exports = mongoose.model('Course', {
	//name of course
	name : {type : String, required : true},
	//ie: course id of CS111 = 01:198:111
	courseID: {type : String, required : true},
	//list of tutors teaching this course
	listOfTutorIDs: {type : [String]}
});
