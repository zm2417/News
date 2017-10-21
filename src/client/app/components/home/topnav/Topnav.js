import React from "react";
import "isomorphic-fetch";
import "./Topnav.css";
import "es6-promise";
import {Link,browserHistory} from 'react-router';

var Menu = require('uxcore-menu');
var Icon = require('uxcore-icon');
var SubMenu = Menu.SubMenu;
var MenuItem = Menu.Item;
window.Menu = Menu;

let classnames = require('classnames');
let assign = require('object-assign');
let Form = require('uxcore-form');
let {
    Constants,
    FormRowTitle,
    FormRow,
    SearchFormField
} = Form;

class Topnav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            name: ''
        };

    }

    componentWillMount(){

    }

    componentDidMount(){

        fetch('/checkIn', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        }).then((response)=> {
            return response.json();
        }).then((jsonData)=> {
            //返回数据处理
            /*console.log(jsonData);
            console.log(jsonData.type);
            console.log(jsonData.name);*/
            if(jsonData.type){
                this.setState({
                    name:''
                });
            }else {
                this.setState({
                    name:jsonData.name
                });
            }
        }).catch((e)=> {
            console.log("出错了"+e);
        });

       /* if (document.cookie != "") {
            var arrCookie = document.cookie.split(";");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if ("username" == arr[0]) {
                    var usernameCookie = arr[1];
                } else {
                    var pwdCookie = arr[1];
                }
            }
            this.setState({
                name: usernameCookie
            });

        } else {
            return false;
        }*/
    }

    //导航栏的点击事件
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });

        if(this.state.current =='dl'){
            browserHistory.push('/tologin');
        }

    }

    getCookie() {
        alert('start get');
        //判断cookie中是否有name与pwd;
        if (document.cookie != "") {
            var arrCookie = document.cookie.split(";");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if ("username" == arr[0]) {
                    var usernameCookie = arr[1];
                } else {
                    var pwdCookie = arr[1];
                }
            }
            this.setState({
                name: usernameCookie
            });
            return true;
        } else {
            return false;
        }
    }

    render() {

        let me = this;
        let searchOptions = {
            jsxname: "search",
            dataType: "jsonp",
            placeholder: "搜索",
            //jsxfetchUrl: "http://suggest.taobao.com/sug",
            advancedOptions: [
                {
                    value: '1',
                    text: '选项一'
                },
                {
                    value: '2',
                    text: '选项二'
                }
            ],
            advancedConfig: {
                placeholder: '高级选项'
            },
            classOptions: [
                {
                    value: '1',
                    text: '类别一'
                },
                {
                    value: '2',
                    text: '类别二'
                }
            ],
            classConfig: {
                placeholder: '类别'
            },
            afterFetch: (obj) => {
                let data = {};
                obj.result.forEach((item, index) => {
                    data[item[1]] = item[0];
                });
                return data;
            },
            onIconClick: (e) => {
                //搜索的点击事件
                fetch('/search',{
                    method:'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials:'include',
                    body: JSON.stringify({
                        'text': me.refs.form.getValues()
                    })
                }).then((res)=>{
                    return res.json();
                }).then((data)=>{
                    console.log(data);
                }).catch((e)=>{
                    browserHistory.push('/error');
                });
            }
        };
        let tidyVer = assign({}, searchOptions, {
            jsxname: 'tidy',
            tidy: true,
            advancedOptions: [],
            classOptions: []

        });


        if (this.state.name) {
            return (
                <div >
                    <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">首页</Menu.Item>
                        <Menu.Item key="lb">类别</Menu.Item>
                        <Menu.Item key="tj">推荐</Menu.Item>
                        <Menu.Item key="dy">订阅</Menu.Item>
                        <SubMenu title={<span> <i className="head"></i>{this.state.name}</span>}>
                            <Menu.Item key="MyHomepage">我的主页</Menu.Item>
                            <Menu.Item key="exit">退出</Menu.Item>
                        </SubMenu>

                    </Menu>
                    <Form ref="form" className="search">
                        <SearchFormField {...tidyVer} className="zm"/>
                    </Form>
                </div>
            );
        } else {
            return (
                <div >
                    <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">首页</Menu.Item>
                        <Menu.Item key="lb">类别</Menu.Item>
                        <Menu.Item key="tj">推荐</Menu.Item>
                        <Menu.Item key="dy">订阅</Menu.Item>
                        <Menu.Item key="dl">登录/注册</Menu.Item>
                    </Menu>
                    <Form ref="form" className="search">
                        <SearchFormField {...tidyVer} className="zm"/>
                    </Form>
                </div>
            );
        }
    }
}

export default Topnav;