// Imports
var mongoose = require('mongoose');

//Structure for having no comments 
var nocomments = [false, false, false];
//Index matches index of comments[]
var listOfComments = ['No Show','Rude','Has Thick Accent'];

//RATING MODEL: gets generated for each session -> deleted if not filled out within a month
module.exports = mongoose.model('Rating', {
	//Tutor = person being rated
	tutorID : {type : String},

	//Tutee = person filling out rating
	tuteeID : {type : String},
	//send Tutee the email with the rating id
	tuteeEmail : {type : String},

	//Session info 
	dateOfSession : {type: Date},
	courseName : {type : String, required : true},
	courseID : {type : String, required : true},

	//Rating info
	filledOut : {type: Boolean, default: false},
	stars : {type : Number, required : true, default : 5},
	comments : {type : [Boolean], required : true, default : nocomments}
});
