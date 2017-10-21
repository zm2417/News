import React from 'react';

import Topnav from './topnav/Topnav.js';  //导航
import Carousels from './carousel/Carousels';  //轮播图
import Categorys from './categorys/Categorys'; //各类新闻类型
import Video from './videos/Video';  //视频
import Bottomnav from './bottomnav/Bottomnav';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(<div >
            <Topnav/>
            <Carousels/>
            <Video/>
            <Categorys/>
            <Bottomnav/>
        </div>);
    }
}

export default App;