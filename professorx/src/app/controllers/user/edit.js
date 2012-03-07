(function(){
	var user = require("../../models/user.js");
    exports.register = function(req, res){
		user.add(req.body,function(isSuccess,id){
			if(isSuccess){
				res.redirect('/myHome/'+id);
			}
			else{
				res.redirect('/error');
			}
		});
	}
})();