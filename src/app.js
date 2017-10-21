var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var app = express();


//设置session的redis缓存
var options = {
    "host":"127.0.0.1",
    "post":"6379",
    "ttl":60*60*24*30,
    "db":0
};
app.use(cookieParser());
app.use(session({
    secret:'12345',
    cookie:{maxAge:60*1000*30},
    resave:true,
    saveUninitialized:true,
    store:new RedisStore(options),
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//静态资源
app.use(express.static(path.join(__dirname+'/client')));

app.listen(3000);

var route = require('./server/route/routes')(app,__dirname);
var route1 = require('./server/route/loginRegister')(app,__dirname);
var home = require('./server/route/home')(app,__dirname);

//broweshistroy
app.get('*',function (req,res) {
    res.sendfile(__dirname+'/client/html/index.html');
});