//Imports -> grab mongoose, course, rating, and tsession models
//Mongoose model allows for user to have get,create,delete,update functions
var mongoose = require('mongoose');
var days = require('./days');
var course = require('./course');
var rating = require('./rating');
var tsession = require('./tsession');

//List of possible schools user can be enrolled in (None means undeclared)
var schools = ['None','SAS','SOE','SEBS','RBS'];
//List of RU campuses 
var campuses = ['None', 'Busch', 'Cook-Douglass','College Ave','Livingston','Camden', 'Newark'];


//USER MODEL
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
	//Authorization purposes ->empty when not logged in, changes every log on
	sessionKey:  {type: String, default: ''},

	//user info
	isAdmin : {type: Boolean, default: false},
	name : {type : String, required : true},
	bio : {type: String, default : ''},
	hashedpassword : {type: String},
	//aka salt
	hash : {type: String},

	//school info
	school : {type: String, enum: schools},
	year : {type : String},

	//contact info
	phone : {type : String},
	email : {type : String, unique : true, required : true},

	//preferences
	preferredCampus : {type : String, enum : campuses},
	preferredTime : {type : [days]},

	//Tutor Info
	isTutor : {type: Boolean},
	classesToTutor : {type: [course]},
	ratings : {type : [rating]},
	hourlyRate : {type : Number},

	//Tutee Info
	isTutee: {type : Boolean},
	classesToTutee : {type : [course]},
	willingToPay : {type : Boolean},

	//Calendar Info
	tsessions: {type: [tsession]},

	//Inbox -> array of message ids (held in a seperate db)
	messages : {type: [String]}
});
