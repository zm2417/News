import React from 'react';

import Topnav from '../home/topnav/Topnav';
import Single from './single/Single';
import Comment from './comment/Comment';
import {Grid,Row,Col} from 'react-bootstrap';

class Content extends React.Component{
    render(){
        return(<div>
            <Topnav/>
            <Grid >
                <Row>
                    <Col xs={12} md={8} >
                        <Single/>
                        <Comment/>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
}

export default Content;