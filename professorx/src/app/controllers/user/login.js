(function(){
	var user = require("../../models/user.js");
    exports.login = function(req, res){
		var params = req.body,
		userName = params.userName,
		password = params.password;
		user.login(userName,password,function(isSuccess){
			if(isSuccess === true){
				res.redirect('/myHome/'+userName);
				return;
			}
			res.redirect('/error');
		});
	}
})();