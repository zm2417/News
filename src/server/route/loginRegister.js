var url = require('url');
var ccap = require('ccap')();

var bodyParser = require('body-parser');

var User = require('../models/User');

function fn(app, pa) {

    app.use(bodyParser.urlencoded({extended: false}))

    //登录请求
    app.post('/login', function (req, res) {
        //console.log('/login cookie ******'+req.cookie);

        var username = req.body.name;
        var password = req.body.password;
        var yzm = req.body.yzm;

        //console.log(yzm + '*******'+req.session.identify);
        //if (yzm == req.session.identify) {
        if(true){
            var user = findUser(username, password);

            if (user) {
                //req.session.regenerate(function () {
                    req.user = user;
                    req.session.userId = user.id;
                    req.session.save();


                //})
                //res.sendfile(pa+'/client/html/index.html');
                //res.redirect('http://127.0.0.1:3000/index');
                 //res.end();
                /*res.writeHead(302,{'Location':'/'});
                 res.end();*/
                res.json({type: 'success'});
            } else {
                res.json({type: 'no one'});
            }
        } else {
            res.json({type: 'yzm'})
        }
    });
    function findUser(username, password) {
        //查找用户信息，看是否可以登录
        var user = new User(0, username, password, '');
        return user;
    }

    //注销请求
    app.post('/signout', function (req, res) {
        req.clearCookie('connect.sid');
        req.user = null;
        req.session.regenerate(function () {
            res.redirect('/');
        })
    })

    //检查是否登录
    app.post('/checkIn',function (req,res) {
        var userId = req.session.userId;
        //console.log('userId '+userId);
        var user = findUserById(userId);
        if(user){
            req.user = user;
            res.json(user);
        }else {
            res.json({type:'err'});//查无此人
        }
    })
    function findUserById(userId) {
        var user = new User(0, 'zm', 'zhangmeng', '');
        return user;
    }

    //注册请求
    app.post('/register', function (req, res) {
        /*console.log( req.body.name);
         console.log(req.body.pwd);
         console.log(req.body.email);*/
        //console.log('/register *****'+req.sessionID);
        res.json({name: "zm", password: "zhangMeng"});
    });

    //发送验证码图片
    app.get('/identify', function (req, res) {
        //console.log('/identify **********'+req.sessionID);
        var ary = ccap.get();
        var txt = ary[0].toLowerCase();  //验证码的值
        var buf = ary[1];
        res.set('Content-Type', 'image/jpeg');
        res.end(buf);
        req.session.identify = txt;
        req.session.save();
    })

}

module.exports = fn;