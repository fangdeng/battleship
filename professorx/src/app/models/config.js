(function(){
	var mongo = require('mongoskin');
		exports.db = mongo.db('localhost:27017/ptilonorhynchus');
})();