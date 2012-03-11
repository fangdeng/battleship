(function(){
	var crypto = require('crypto');
	exports.toMD5 = function(str){
		return crypto.createHash('md5').update(str).digest('hex');
	}
})();