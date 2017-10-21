var url = require('url');
var ccap = require('ccap')();
var session = require('express-session');

var bodyParser = require('body-parser');

function  fn(app,pa) {

    app.use(bodyParser.urlencoded({extended:false}));

    app.get('/index',function (req,res) {
        //console.log('/index ******'+req.sessionID);
        res.sendfile(pa+'/client/html/index.html');
    });

}

module.exports = fn;