(function(){
	var db = require('./config').db,
		task = db.collection('task');
    exports.findTop10 = function(userName,callback){
		task.find({userName:userName},{limit:10}).toArray(function(err,items){
			callback(items);
		});
	};
	exports.findByIds = function(ids,callback,user){
	console.info(ids);
		task.find({_id:{$in:ids}}).toArray(function(err,items){
			if(err){
				return callback(err);
			}
			console.info(items);
			callback(user,items);
		});
	};
})();