
/*
 * GET home page.
 */
module.exports = function(app){
	//主页
	app.get('/', function (req, res) {
        res.render('homepage.ejs');
    });
	//登录页面
	app.get('/login', function (req, res) {
        res.render('/user/login.ejs');
    });
	//登录提交
	app.post('/login', function (req, res) {
        require("./app/controllers/user/login.js").login(req, res);
    });
	//注册页面
	app.get('/register', function (req, res) {
        res.render('/user/register.ejs');
    });
	//注册提交
	app.post('/register', function (req, res) {
        require("./app/controllers/user/edit.js").register(req, res);
    });
	//错误页面
	app.get('/error', function (req, res) {
        res.render('/error.ejs');
    });
	//我的主页
	app.get('/myHome/:userName', function (req, res) {
        require("./app/controllers/user/myHome.js").init(req, res);
    });
	//用户列表
	app.get('/userList', function(req, res){
		require("./app/controllers/user/list.js").init(req, res);
	});
}