import React from "react";
import "./register.css";
import "isomorphic-fetch";
import "es6-promise";
import {Link} from 'react-router';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            password1: "",
            password2: "",
            email: ""
        }
    }

    submitLogin() {
        var name = this.refs.name.value;
        var password = this.refs.password1.value;
        var password2 = this.refs.password2.value;
        var email = this.refs.email.value;
        if(password != password2){
            alert("mi ma bu yi zhi");
        }else if(name != ""&&password != ""&&email != ""){

            fetch('/register',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    'name':name,
                    'pwd':password,
                    'email':email
                })
            }).then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                console.log(jsonData);
            }).catch(function () {
                console.log("出错了");
            });
        }else {
            alert("bu neng wei kong");
        }
        /*if (name != "" && password != "") {注册
            //console.log(name + password);
            fetch('/login').then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                console.log(jsonData);
            }).catch(function () {
                console.log("出错了");
            });
        } else {
            //未输入字符处理
            console.log("is not entry");
        }*/
    }

    /*change(event) {
        this.setState({zhiZhu: !this.state.zhiZhu});
    }*/

    render() {
        return (
            <div className="Register_back">
                <div style={{"height":'120px'}}></div>
                <div className="demo">
                <div className="wrapper">
                    <h1>注册</h1>
                    <hr/>
                    <form className="login_form">
                        <p>
                            <label>用户名</label><br/>
                            <input ref="name" type="text" placeholder="username"/>
                        </p>
                        <p>
                            <label>邮箱</label>
                            <input ref="email" type="text" placeholder="email"></input>
                        </p>
                        <p>
                            <label>密码</label><br/>
                            <input ref="password1" type="password" placeholder="password"/>
                        </p>
                        <p>
                            <label>再次输入密码</label><br/>
                            <input ref="password2" type="password" placeholder="password"/>
                        </p>
                        <p className="toRegister">
                            <input type="button" value="login" onClick={(this.submitLogin).bind(this)}/>
                        </p>
                        <p className="toLogin">
                            已经注册

                            <Link to="/toLogin" >登录</Link>
                        </p>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Register;