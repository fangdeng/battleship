(function(){
	var util = require('../../util'),
		db = require('./config').db,
		user = db.collection('user'),
		task = require("./task.js");
    exports.add = function(o,callback){
		user.find({userName:o.userName}).toArray(function(err,items){
			if(items.length === 0){
				user.insert({userName : o.userName ,password:util.toMD5(o.password),trueName:o.trueName},function(err,records){
					console.log(records);
					callback(true,o.userName);
				});
				return;
			}
			callback(false);
		});
	};
	exports.login = function(userName,password,callback){
		user.findOne({userName:userName,password:util.toMD5(password)},function(err,doc){
			if(err){
				return callback(err);
			}
			console.info(doc);
			if(doc){
				callback(true);
			}
			else{
				callback(false);
			}
		});
	};
	exports.findAll = function(callback){
		user.find().toArray(function(err,users){
			if(err){
				return callback(err);
			}
			callback(users);
		});
	};
	exports.findMyTasks = function(userName,callback){
		var taskIds;
		user.findOne({userName:userName},function(err,doc){
			if(err){
				return callback(err);
			}
			if(doc){
				console.info(doc);
				taskIds = doc.references;
				console.info(taskIds);
				if(taskIds && taskIds.length){
					task.findByIds(taskIds, callback,doc);
				}
				else{
					callback(doc,[]);
				}
			}
			else{
				callback(null);
			}
		});
	};
})();