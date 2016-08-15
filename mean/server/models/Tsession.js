//Imports
var mongoose = require('mongoose');

//TSESSION MODEL
module.exports = mongoose.model('Tsession', {
	//tutor info
	tutorID : {type : String},
	tutorEmail : {type : String},
	tutorEmailDates : {type: [Date]},
	tutorAccepted : {type: Boolean, default: false},

	//tutee info
	tuteeID : {type : String},
	//send Tutor and Tutee the email reminders
	tuteeEmail : {type : String},
	tuteeEmailDates : {type: [Date]},
	tuteeAccepted : {type: Boolean, default: true},
	
	//session info
	dateOfSession : {type: Date},
	courseName : {type: String},
	location: {type : String}
});
