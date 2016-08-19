//Hash service
var crypto =require('crypto');

module.exports = {
	
	makeHash(callback){
		var byteSize = 16;
	    return crypto.randomBytes(byteSize, (err, salt) => {
	      if(err) {
	        return callback(err);
	      } else {
	        return callback(null, salt.toString('base64'));
	      }
	    });

	},
	makeHashedPassword(password, hash){
		var defaultIterations = 10000;
    	var defaultKeyLength = 64;
    	var hashNew = new Buffer(hash, 'base64');
    	return crypto.pbkdf2Sync(password, hashNew, defaultIterations, defaultKeyLength).toString('base64');
    
	}
}