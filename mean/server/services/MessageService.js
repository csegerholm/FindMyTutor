var Message = require('./../models/message');

module.exports = {
	
	getAllWithReceiver(req, res) {
	    var rID = req.params.rID;

	    // use mongoose to get all messages in the database with this receiver
	    Message.find( {receiverID: rID}, function(err, messages) {
	        // if there is an error retrieving, send the error. 
	        if (err){
	            res.send(err); //like a return nothing after res.send(err) will execute
	        }
	        res.json(messages); // return all messages in JSON format
	    });
	},

	getAllWithSender(req, res) {
		var sID = req.params.sID;

		// use mongoose to get all messages in the database with this sender
		Message.find( {senderID: sID}, function(err, messages) {
			if (err){
				res.send(err);
			}
			res.json(messages); // return all messages in JSON format
		});
	},

	create(req, res) {
		var newMessage = req.body;
		//Error Checking

		Message.create(newMessage, function(err, ans) {
			if (err){
				res.send(err);
			}
			res.json(ans); // return all nerds in JSON format
		});
	},

	remove(req, res) {
		var mID = req.params.mID;
		Message.remove( {_id: mID}, function(err, ans) {
			if (err){
				res.send(err);
			}
			res.json(ans); 
	    });
	}
}