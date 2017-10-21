var url = require('url');
var ccap = require('ccap')();
var session = require('express-session');

var bodyParser = require('body-parser');

function  fn(app,pa) {

    app.use(bodyParser.urlencoded({extended:false}));

    //首页底部的联系我们的提交表单
    app.post('/bottomSubmit',function (req,res) {
        res.json({type:'success'});
    });

    //首页搜索的点击事件
    app.post('/search',function (req,res) {
        //搜索的内容
        console.log(req.body.text.values.tidy.main);
        res.json({type:'success'});
    })

}

module.exports = fn;