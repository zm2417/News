import React from 'react';

import {Grid,Row,Col,Thumbnail,Image,ButtonGroup,Button} from 'react-bootstrap';

import caiJing from './caiJing.jpg'; //后期改为视频
import bFang from './img-sp.png';  //播放图片
import './video.css';

class Video extends React.Component{
    render(){
        return(
            <div style={{marginTop:'50px'}} >
                <Grid>
                    <Row>
                        <Col xs={6} md={6} >
                            <div>
                            <Image src={caiJing} className="homeVideo"/>
                            <a href="#">
                                <span className="bFang"></span>
                            </a>
                            <div className="videoWenZi">
                                <h3>assaxacbahscajvchchc</h3>
                            </div>
                            </div>
                        </Col>
                        <Col xs={3} md={3}>
                            <h3 className="videoRightH3">评论最多</h3>
                            <hr/>
                            <ul>
                                <li>
                                    <a href="#">vel illum qui dolorem eum fugiat quo voluptas.</a>
                                </li>
                                <hr className="hengxian"/>
                                <li>
                                    <a href="#">Itaque earum rerum hic tenetur a sapiente delectus.</a>
                                </li>
                                <hr className="hengxian"/>
                                <li>
                                    <a href="#">Neque porro quisquam est, qui dolor sit amet.</a>
                                </li>
                                <hr className="hengxian"/>
                                <li>
                                    <a href="#">But I must explain to you how all this mistaken.</a>
                                </li>
                                <hr className="hengxian"/>
                                <li>
                                    <a href="#">......</a>
                                </li>
                                <hr className="hengxian"/>
                            </ul>
                        </Col>
                        <Col xs={3} md={3}>
                            <h3 className="videoRightH3">最新发布</h3>
                            <hr/>
                            <ul>
                                <li>
                                    <a href="#">vel illum qui dolorem eum fugiat quo voluptas.</a>
                                </li>
                                <hr className="hengxian"/>
                                <li>
                                    <a href="#">Itaque earum rerum hic tenetur a sapiente delectus.</a>
                                </li>
                                <hr className="hengxian"/>
                                <li>
                                    <a href="#">Neque porro quisquam est, qui dolor sit amet.</a>
                                </li>
                                <hr className="hengxian"/>
                                <li>
                                    <a href="#">But I must explain to you how all this mistaken.</a>
                                </li>
                                <hr className="hengxian"/>
                                <li>
                                    <a href="#">......</a>
                                </li>
                                <hr className="hengxian"/>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6} >

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Video;