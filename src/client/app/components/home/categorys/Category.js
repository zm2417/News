import React from 'react';
import {Grid, Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Thumbnail} from 'react-bootstrap';

import yuLe from './images/yuLe.jpg';
import caiJing from './images/caiJing.jpg';
import guiWai from './images/guiWai.jpg';
import guoNei from './images/guoNei.jpg';
import junShi from './images/junShi.jpg';
import keJi from './images/keJi.jpg';
import qiTa from './images/qiTa.jpg';
import tiYu from './images/tiYu.jpg';

import './Category.css';
import UrLi from './UrLi';

class Category extends React.Component {

    constructor() {
        super();
        this.state = {
            t: '',
        }
        this.changT.bind(this);
    }

    changT(t) {
        this.setState({'t': t});
    }

    render() {

        return (
            <div className="Grid1">
                <Grid>
                    <Row>
                        <Col xs={6} md={3}>
                            <Thumbnail src={yuLe} alt="242x200">
                                <UrLi/>
                                <p>
                                    <Button bsStyle="primary">更多娱乐新闻</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src={caiJing} alt="242x200">
                                <UrLi/>
                                <p>
                                    <Button bsStyle="primary">更多财经新闻</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src={guiWai} alt="242x200">
                                <UrLi/>
                                <p>
                                    <Button bsStyle="primary">更多国外新闻</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src={guoNei} alt="242x200">
                                <UrLi/>
                                <p>
                                    <Button bsStyle="primary">更多国内新闻</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            <Thumbnail src={junShi} alt="242x200">
                                <UrLi/>
                                <p>
                                    <Button bsStyle="primary">更多军事新闻</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src={keJi} alt="242x200">
                                <UrLi/>
                                <p>
                                    <Button bsStyle="primary">更多科技新闻</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src={tiYu} alt="242x200">
                                <UrLi/>
                                <p>
                                    <Button bsStyle="primary">更多体育新闻</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src={qiTa} alt="242x200">
                                <UrLi/>
                                <p>
                                    <Button bsStyle="primary">更多其他新闻</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Category;