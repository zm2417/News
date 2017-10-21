import React from 'react';
import {Image,FormControl,Button} from 'react-bootstrap'
import head from './2.jpg';
import './DialogContent.css';

class CommentDialogContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '崔欣',
            time: '2001 2 3 12:23:23',
            content: '都是常规操作',
            dzShu: 848,
            isClick:false,       //是否已经点击过
            btnColor:'#7a8599',  //点击后的颜色改变
            displayBtn:'none',   //三个按钮隐藏与否
            isCai:true,
            replayInput:'none',
            text:'',             //评论内容
        }
    }

    commentOnMouseOver() {
        this.setState({displayBtn: 'inline-block'});
    }

    commentOnMouseOut() {
        this.setState({displayBtn: 'none'});
    }

    btnOnClick(type,e){
        if(type == 'hf'){          //点击回复按钮
            if(this.state.replayInput == 'none'){
                this.setState({replayInput:'block'});
            }else {
                this.setState({replayInput:'none'});
            }
        }else if(type == 'qxpl'){  //取消评论
            this.setState({replayInput:'none'});
        }else if(type == 'pl'){    //点击评论
            console.log(this.state.replayContent);
            //to do fetch
        }else if(type == 'dz'){    //点赞
            if(this.state.isClick){
                this.setState({
                    btnColor:'#7a8599',
                    isClick:!this.state.isClick,
                    dzShu:(this.state.dzShu-1)}); //取消点赞
            }else {
                this.setState({
                    btnColor:'#0b6ab8',
                    isClick:!this.state.isClick,
                    dzShu:(this.state.dzShu+1)}); //点赞
            }
            //to do fetch
        }else if(type == 'cai'){   //点踩按钮
            this.setState({isCai:!this.state.isCai});
            //to do fetch
        }
    }

    changeContent(e){
        this.setState({text:e.target.value});
    }

    render() {
        let hf = '回复'+this.state.name;

        return (
            <div onMouseOut={(this.commentOnMouseOut).bind(this)}
                 onMouseOver={(this.commentOnMouseOver).bind(this)}>
                <div className="DialogContent-Item">
                    <span>
                        <div className="DialogContent-headImage">
                            <Image src={head} rounded responsive/>
                        </div>
                    </span>
                    <span className="DialogContent-name">
                        {this.state.name}
                    </span>
                    <span className="DialogContent-time">
                        {this.state.time}
                    </span>
                </div>
                <div className="DialogContent-text">{this.state.content}</div>
                <div className="DialogContent-btn">
                    <button className="DialogContent-dz"
                            style={{marginRight: '10px',color:this.state.btnColor}}
                            onClick={(this.btnOnClick).bind(this,'dz')}>
                        <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"
                             className="Icon1 Icon1--like Icon1--left" width="13" height="16" aria-hidden="true"
                             style={{height: '16px', width: '13px',fill:this.state.btnColor}}>
                            <title></title>
                            <g>
                                <path
                                    d="M.718 7.024c-.718 0-.718.63-.718.63l.996 9.693c0 .703.718.65.718.65h1.45c.916 0 .847-.65.847-.65V7.793c-.09-.88-.853-.79-.846-.79l-2.446.02zm11.727-.05S13.2 5.396 13.6 2.89C13.765.03 11.55-.6 10.565.53c-1.014 1.232 0 2.056-4.45 5.83C5.336 6.965 5 8.01 5 8.997v6.998c-.016 1.104.49 2 1.99 2h7.586c2.097 0 2.86-1.416 2.86-1.416s2.178-5.402 2.346-5.91c1.047-3.516-1.95-3.704-1.95-3.704l-5.387.007z"></path>
                            </g>
                        </svg>
                        {this.state.dzShu}
                    </button>
                    <button className="DialogContent-btn"
                            style={{display: this.state.displayBtn}}
                            onClick={(this.btnOnClick).bind(this,'hf')}>
                        <svg viewBox="0 0 22 16" className="Icon1 Icon1--like Icon1--left" width="13" height="16"
                             aria-hidden="true" style={{height: '16px', width: '13px'}}><title></title>
                            <g>
                                <path
                                    d="M21.96 13.22c-1.687-3.552-5.13-8.062-11.637-8.65-.54-.053-1.376-.436-1.376-1.56V.677c0-.52-.635-.915-1.116-.52L.47 6.67C.18 6.947 0 7.334 0 7.763c0 .376.14.722.37.987 0 0 6.99 6.818 7.442 7.114.453.295 1.136.124 1.135-.5V13c.027-.814.703-1.466 1.532-1.466 1.185-.14 7.596-.077 10.33 2.396 0 0 .395.257.535.257.892 0 .614-.967.614-.967z"></path>
                            </g>
                        </svg>
                        评论
                    </button>
                    <button className="DialogContent-btn"
                            style={{display: this.state.displayBtn}}
                            onClick={(this.btnOnClick).bind(this,'cai')}>
                        <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"
                             className="Icon1 Icon1--like Icon1--left" width="13" height="16" aria-hidden="true"
                             style={{height: '16px', width: '13px',transform:'rotate(180deg)'}}><title></title>
                            <g>
                                <path
                                    d="M.718 7.024c-.718 0-.718.63-.718.63l.996 9.693c0 .703.718.65.718.65h1.45c.916 0 .847-.65.847-.65V7.793c-.09-.88-.853-.79-.846-.79l-2.446.02zm11.727-.05S13.2 5.396 13.6 2.89C13.765.03 11.55-.6 10.565.53c-1.014 1.232 0 2.056-4.45 5.83C5.336 6.965 5 8.01 5 8.997v6.998c-.016 1.104.49 2 1.99 2h7.586c2.097 0 2.86-1.416 2.86-1.416s2.178-5.402 2.346-5.91c1.047-3.516-1.95-3.704-1.95-3.704l-5.387.007z"></path>
                            </g>
                        </svg>
                        {this.state.isCai?'踩':'取消踩'}
                    </button>
                    <button className="DialogContent-btn"
                            style={{display: this.state.displayBtn}}>
                        <svg viewBox="0 0 18 20" className="Icon1 Icon1--like Icon1--left" width="13" height="16"
                             aria-hidden="true" style={{height: '16px', width: '13px'}}><title></title>
                            <g>
                                <path
                                    d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path>
                            </g>
                        </svg>
                        举报
                    </button>
                </div>
                <div style={{display:this.state.replayInput}}>
                    <FormControl ref="pl"
                                 type="text" placeholder={hf}
                                 className="comment-replayInput"
                                 value={this.state.replayContent}
                                 onChange={(this.changeContent).bind(this)}/>
                    <div style={{}}>
                    <Button style={{marginRight:'10px'}}
                            onClick={(this.btnOnClick).bind(this,'qxpl')}>
                        取消</Button>
                    <Button style={{}} bsStyle="primary"
                            onClick={(this.btnOnClick).bind(this,'pl')}>
                        评论</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentDialogContent;