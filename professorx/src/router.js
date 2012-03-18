
/*
 * GET home page.
 */
module.exports = function(app){
	//��ҳ
	app.get('/', function (req, res) {
        res.render('homepage.ejs');
    });
	//��¼ҳ��
	app.get('/login', function (req, res) {
        res.render('/user/login.ejs');
    });
	//��¼�ύ
	app.post('/login', function (req, res) {
        require("./app/controllers/user/login.js").login(req, res);
    });
	//ע��ҳ��
	app.get('/register', function (req, res) {
        res.render('/user/register.ejs');
    });
	//ע���ύ
	app.post('/register', function (req, res) {
        require("./app/controllers/user/edit.js").register(req, res);
    });
	//����ҳ��
	app.get('/error', function (req, res) {
        res.render('/error.ejs');
    });
	//�ҵ���ҳ
	app.get('/myHome/:userName', function (req, res) {
        require("./app/controllers/user/myHome.js").init(req, res);
    });
	//�û��б�
	app.get('/userList', function(req, res){
		require("./app/controllers/user/list.js").init(req, res);
	});
}