import React from "react";
import "./login.css";
import "isomorphic-fetch";
import "es6-promise";
import {Link,hashHistory,browserHistory} from 'react-router';

class Login extends React.Component {

    constructor() {
        super();

        //判断cookie中是否有name与pwd;
        if (document.cookie != "") {
            var arrCookie = document.cookie.split(";");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if ("username" == arr[0]) {
                    var usernameCookie = arr[1];
                } else if('password' == arr[0]){
                    var pwdCookie = arr[1];
                }else if('yzmText' == arr[0]){
                    var yzmCookie = arr[1];
                }
            }
            this.state = {
                name: usernameCookie,
                password: pwdCookie,
                zhiZhu: false,
                yzm:yzmCookie,
                imgurl:'./identify'
            }
        } else {
            this.state = {
                name: "",
                password: "",
                zhiZhu: false,
                yzm:yzmCookie,
                imgurl:'./identify'
            }
        }
    }

    //点击登录按钮
    submitLogin() {
       var arrCookie = document.cookie.split(";");
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            if('connect.sid' == arr[0]){
                var yzmCookie = arr[1];
                alert(yzmCookie);
            }
        }
        var name = this.refs.name.value;
        var password = this.refs.password.value;
        var yanzhenma = this.refs.yanzhenma.value;
        var zhiZhu = this.state.zhiZhu;
        if (name != "" && password != "") {

            //cookie中存放密码与用户
            if (zhiZhu) {
                document.cookie = "username=" + name;
                document.cookie = "password=" + password;
            }
            //if(yanzhenma == yzmCookie){
                fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials:'include',
                    body: JSON.stringify({
                        'name': name,
                        'pwd': password,
                        'yzm':yanzhenma
                    })
                }).then(function (response) {
                    return response.json();
                }).then(function (jsonData) {
                    //返回数据处理
                    if(jsonData.type == 'success'){
                        //window.location.href='/';
                        //hashHistory.push('/');
                        browserHistory.push('/');
                    }else if(jsonData.type == 'no one'){
                        alert('no one');
                    }else if(jsonData.type == 'yzm'){
                        alert('yzm');
                    }
                    //return false;
                }).catch(function () {
                    console.log("出错了");
                });
            /*}else {
             alert('验证码错误');
            }*/
        } else {
            //未输入字符处理
            console.log("is not entry");
        }
        return false;
    }

    change(p, event) {
        if (p == "name") {
            this.setState({name: event.target.value});
        } else if (p == "pwd") {
            this.setState({password: event.target.value});
        } else {
            this.setState({zhiZhu: !this.state.zhiZhu});
        }
    }

    //改变验证码的值，identify与identify2来区分当次与前一次的区别。
    changeImg(event){

       this.setState({imgurl:'./identify?nocache='+new Date().getTime()});

    }

    render() {
        return (
            <div className="login_back">
                <div style={{"height": '130px'}}></div>
                <div className="demo">
                    <div className="wrapper">
                        <h1>登录</h1>
                        <hr/>
                        <form className="login_form">
                            <p>
                                <label>用户名</label><br/>
                                <input ref="name" value={this.state.name} type="text"
                                       placeholder="username or email"
                                       onChange={(this.change).bind(this, "name")}/>
                            </p>
                            <p>
                                <label>密码</label><br/>
                                <input ref="password" value={this.state.password} type="password"
                                       placeholder="password"
                                       onChange={(this.change).bind(this, "pwd")}/>
                            </p>
                            <p>
                                <label>验证码</label>
                                <input type="text" ref='yanzhenma'/>
                                <img src={this.state.imgurl} className="yanzhenma"></img><a href="javascript:void(0)" onClick={(this.changeImg).bind(this)}>看不清，换一批</a>
                            </p>
                            <p className="zhiZhu">
                                <input ref="zhiZhu" type="checkbox" value={this.state.zhiZhu}
                                       onChange={(this.change).bind(this, "zhiZhu")}/>
                                <label>记住密码</label>
                            </p>
                            <p className="toLogin">
                                <input type="button" value="login" onClick={(this.submitLogin).bind(this)}/>
                            </p>
                            <br/>
                            <p className="toRegister">
                                还没有密码
                                <Link to="/toRegister">注册</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;