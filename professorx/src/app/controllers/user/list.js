(function(){
	var user = require("../../models/user.js");
	exports.init = function(req, res){
		user.findAll(function(users){
			res.render('/user/list.ejs',{users:users});
		});
	}
})();