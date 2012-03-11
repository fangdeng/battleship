(function(){
	var user = require("../../models/user.js"),
	mongo = require('mongoskin');
	exports.init = function(req, res){
		var userName = req.params.userName;
		user.findMyTasks(userName,function(o,a){
			res.render('/user/myHome.ejs',{userName:o.trueName,taskList:a});
		});
	};
})();