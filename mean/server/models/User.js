//Imports -> grab mongoose, course, rating, and tsession models
//Mongoose model allows for user to have get,create,delete,update functions
var mongoose = require('mongoose');
var days = require('./days');
var course = require('./course');
var config = require('./../config/data');
//List of possible schools user can be enrolled in (None means undeclared)
var schools = config.schools;
//['None','SAS','SOE','SEBS','RBS'];
//List of RU campuses 
var campuses = config.campuses;
//['None', 'Busch', 'Cook-Douglass','College Ave','Livingston','Camden', 'Newark'];


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
	preferredTime : {type : [days] },

	//Tutor Info
	isTutor : {type: Boolean, default : false},
	classesToTutor : {type: [course], default : []},
	//rating -> array of rating ids (held in a seperate db)
	ratings : {type : [String], default : []},
	hourlyRate : {type : Number, default : 0},

	//Tutee Info
	isTutee: {type : Boolean, default : true},
	classesToTutee : {type : [course], default : []},
	willingToPay : {type : Boolean, default : false},

	//Calendar Info -> array of tsession ids (held in a seperate db)
	tsessions: {type: [String], default : []},

	//Inbox -> array of message ids (held in a seperate db)
	messages : {type: [String], default : []}
});
