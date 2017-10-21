import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import {Link,browserHistory} from 'react-router';
import {Row,Grid,Col,Button} from 'react-bootstrap';

class Error extends React.Component {

    back(event){
        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            <h1>Sorry..页面没有找到！</h1>
                            <p> 似乎你所寻找的网页已移动或丢失了。</p>
                            <p> 或者也许你只是键入错误了一些东西。</p>
                            <p> 请不要担心，这没事。如果该资源对你很重要，请与管理员联系。</p>
                            <p> 火星不太安全，我可以免费送你回地球 </p>
                            <Button bsStyle="primary" onClick={(this.back).bind(this)}>返回首页</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Error;