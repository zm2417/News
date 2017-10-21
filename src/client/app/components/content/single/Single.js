import React from 'react';
import './single.css';

import {Grid, Col, Row, Image} from 'react-bootstrap';
import author from './author.jpg';

const Icon = require('uxcore-icon');

class Single extends React.Component {

    constructor() {
        super();
        this.state = {
            title: 'Responsive HTML5 Template',
            authorName: 'zm',
            date: '2017-4-3 10:23:24',
            text: ''
        }
    }

    render() {
        return (<div className="singleTop">
            <h1>{this.state.title}</h1>
            <div className="singleAuthor">
                <Image src={author} responsive/>
            </div>
            <span className="singleSpan">{this.state.authorName} / {this.state.date}</span>
            <hr className="singleHr"/>
            <div className="singleContent">
                <p className="singleP">
                    “人民对美好生活的向往，就是我们的奋斗目标。”——2012年11月15日，新当选的中共中央总书记习近平同中外记者见面，铮铮誓言响彻中华大地。1500余字演讲中，19次提到“人民”。</p>
            </div>
        </div>);
    }
}

export default Single;