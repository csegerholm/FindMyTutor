// Imports
var mongoose = require('mongoose');

//Index matches times in the days object
var times = ['morning','afternoon', 'evening', 'night'];
var defaultTimes = [false,false,false, false];


// Days MODEL
module.exports = mongoose.model('Days', {
	sunday:  {type: [Boolean], default: defaultTimes},
	monday:  {type: [Boolean], default: defaultTimes},
	tuesday:  {type: [Boolean], default: defaultTimes},
	wednesday:  {type: [Boolean], default: defaultTimes},
	thursday:  {type: [Boolean], default: defaultTimes},
	friday:  {type: [Boolean], default: defaultTimes},
	saturday:  {type: [Boolean], default: defaultTimes}
});
