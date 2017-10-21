import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import './carousel.css';

class Carousels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <Carousel className="carousel1">
                    <Carousel.Item>
                        <img style={{width: '100%',height:'500px'}} alt="900x500" src="http://www.wallcoo.com/human/City_Night_Scene_02/wallpapers/1680x1050/City_Night_Scene_photography_L10_30.jpg"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width: '100%',height:'500px'}} alt="900x500" src=""/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width: '100%',height:'500px'}} alt="900x500" src="http://www.wallcoo.com/nature/beautiful_nature/wallpapers/1440x900/beautiful_nature_8433868.jpg"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
};

export default Carousels;