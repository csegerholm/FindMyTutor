//Imports
var mongoose = require('mongoose');

//MESSAGE MODEL
module.exports = mongoose.model('Message', {
	
	//sender
	senderID : {type : String},

	//reciever
	receiverID : {type : String},
	didRead : {type : Boolean, default : false},
	
	//session info -> can be null if not a request
	sessionID: {type : String},

	//Message info -> delete it after accepting if its a request
	dateSent : {type: Date},
	subject : {type:String},
	info : {type: String}


});
