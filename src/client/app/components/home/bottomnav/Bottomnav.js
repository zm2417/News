import React from 'react';
import "isomorphic-fetch";
import "es6-promise";
import {browserHistory} from 'react-router';

import {Grid,Row,Col,Form,FormControl,FormGroup,Button} from 'react-bootstrap';

import './Bottomnav.css';


class Bottomnav extends React.Component{

    constructor(){
        super();
        this.state = {
            name : '',
            email : '',
            text : ''
        }
    }

    handleSubmit() {
        var name = this.state.name
        var email = this.state.email;
        var text = this.state.text;
        fetch('/bottomSubmit',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                'name': name,
                'email': email,
                'text': text
            })
        }).then((response)=>{
            return response.json();
        }).then((jsonData)=> {
            if(jsonData.type == 'success'){
                alert('提交成功');
            }
        }).catch((e)=>{
            browserHistory.push('/error');
        });
    }

    handleChange(p,e){
        if(p == 'name'){
            this.setState({name:e.target.value});
        }else if(p == 'email') {
            this.setState({email:e.target.value});
        }else if(p == 'text'){
            this.setState({text:e.target.value});
        }
    }

    render(){

        return(<div className="bottom">
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <hr/><h4 className="bottomH4">新闻来源</h4>
                        <ul>
                            <li className="img"><a href="http://news.sina.com.cn/">新浪新闻
                                新浪网新闻中心是新浪网最重要的频道之一,24小时滚动报道国内、国际及社会新闻。每日编发新闻数以万计。</a></li>
                            <li className="img"><a href="http://news.sohu.com/">搜狐新闻<style>
                                {".required {font-family:Simsun} .demo-basic-form {width: 532px}"}
                            </style>
                                上搜狐新闻、知天下大事。24小时图文、视频滚动报道国内、国际、社会新闻。</a></li>
                            <li className="img"><a href="http://news.qq.com/">腾讯新闻
                                腾讯新闻,事实派。新闻中心,包含有时政新闻、国内新闻、国际新闻、社会新闻、时事评论、新闻图片、新闻专题、新闻论坛、军事、历史、的专业时事报道门户网站</a></li>
                            <li className="img"><a href="http://news.163.com/">网易新闻
                                新闻,新闻中心,包含有时政新闻,国内新闻,国际新闻,社会新闻,时事评论,新闻图片,新闻专题,新闻论坛,军事,历史,的专业时事报道门户网站</a></li>
                            <li className="img"><a href="http://news.baidu.com/">百度新闻
                                百度新闻是包含海量资讯的新闻服务平台,真实反映每时每刻的新闻热点。您可以搜索新闻事件、热点话题、人物动态、产品资讯等,快速了解它们的最新进展。</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4}>
                        <hr/><h4 className="bottomH4">联系我们</h4>
                        <Form horizontal>
                            <FormGroup controlId="name">
                                <FormControl type="text" placeholder='name' className="form" value={this.state.name} onChange={(this.handleChange).bind(this,'name')}/>
                            </FormGroup>
                            <FormGroup controlId="email">
                                <FormControl type="email" placeholder='email' className="form" value={this.state.email} onChange={(this.handleChange).bind(this,'email')}/>
                            </FormGroup>
                            <FormGroup controlId="text">
                                <FormControl componentClass="textarea" placeholder='textarea' className="form" value={this.state.text} onChange={(this.handleChange).bind(this,'text')}/>
                            </FormGroup>
                            <Button bsStyle="success" className="bTJ" onClick={this.handleSubmit.bind(this)}>提交</Button>
                        </Form>
                    </Col>
                    <Col xs={6} md={4}>
                        <hr/><h4 className="bottomH4">关于我们</h4>
                        <p className="bottomP">本网站是中文新闻门户网站。依托强大采编网络,每天24小时面向广大网民和网络媒体,快速及时向用户传递新闻。它为用户推荐有价值的、个性化的信息，提供连接人与信息的新型服务网站</p>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
}

export default Bottomnav;