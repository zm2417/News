import React from 'react';
import './Comment.css';
import {Media, Image,Button,FormControl} from 'react-bootstrap';
import head from './2.jpg';
import CommentDialog from './CommentDialog';
import CommentReportDialog from './CommentReportDialog';

class CommentContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayBtn: 'none',
            replay: props.replay,    //有否回复
            headName:'Heading',
            time:'2013 10 3 12:23:12',
            content:'报道称，美国曾经在1984年退出过教科文组织，当时的里根政府认为，该组织经营不善，且持反美立场。直到2002年，布什政府才宣布美国重返联合国教科文组织。',
            dzShu:144,
            replayInput:'none',  //回复框的显示
            replayContent:'',    //回复内容
            isClick:false,       //是否已经点击过
            btnColor:'#7a8599',  //点击后的颜色改变
            lgShow:false,        //Modal
            isCai:true,          //踩的点击事件
        }
    }

    commentOnMouseOver() {
        this.setState({displayBtn: 'inline-block'});
    }

    commentOnMouseOut() {
        this.setState({displayBtn: 'none'});
    }

    btnOnClick(type,e){
        if(type == 'hf'){                         //点击回复按钮
            if(this.state.replayInput == 'none'){
                this.setState({replayInput:'block'});
            }else {
                this.setState({replayInput:'none'});
            }
        }else if(type == 'qxpl'){                  //取消评论
            this.setState({replayInput:'none'});
        }else if(type == 'pl'){                    //点击评论
            console.log(this.state.replayContent);
            //to do fetch
        }else if(type == 'dz'){                    //点赞
            if(this.state.isClick){
                this.setState({
                    btnColor:'#7a8599',
                    isClick:!this.state.isClick,
                    dzShu:(this.state.dzShu-1)});  //取消点赞
            }else {
                this.setState({
                    btnColor:'#0b6ab8',
                    isClick:!this.state.isClick,
                    dzShu:(this.state.dzShu+1)});  //点赞
            }
            //to do fetch
        }else if(type == 'ckhf'){                  //查看回复
            this.setState({lgShow:true});
        }else if(type == 'cai'){                   //点击踩的按钮
            this.setState({isCai:!this.state.isCai});
            //to do fetch
        }
    }

    changeContent(e){
        this.setState({replayContent:e.target.value});
    }

    render() {
        let hf = '回复 '+this.state.headName;
        let lgClose = ()=> this.setState({lgShow:false});
        return (
            <Media.ListItem>
                <Media.Left>
                    <Image width={64} height={64} src={head} circle/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading>
                        {this.state.headName}
                    <span className="commentHead-time">{this.state.time}</span>
                    </Media.Heading>
                    <p>{this.state.content}</p>
                    <div
                        onMouseOut={(this.commentOnMouseOut).bind(this)}
                        onMouseOver={(this.commentOnMouseOver).bind(this)}>
                        <button className="comment-dianzanBtn"
                                style={{marginRight: '10px',color:this.state.btnColor}} onClick={(this.btnOnClick).bind(this,'dz')}>
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
                        <button className="comment-dianzanBtn"
                                style={{display: this.state.replay}}
                                onClick={(this.btnOnClick).bind(this,'ckhf')}>
                            <svg
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                className="Icon1 Icon1--comments Icon1--left" width="13" height="16" aria-hidden="true"
                                style={{height: '16px', width: '13px'}}><title></title>
                                <g>
                                    <g>
                                        <path
                                            d="M9 0C3.394 0 0 4.13 0 8c0 1.654.522 3.763 2.014 5.566.314.292.518.82.454 1.17-.165 1.488-.842 1.905-.842 1.905-.328.332.105.67.588.582 1.112-.2 2.07-.58 3.526-1.122.4-.202.464-.147.78-.078C11.524 17.764 18 14 18 8c0-3.665-3.43-8-9-8z"></path>
                                        <path
                                            d="M19.14 9.628c.758.988.86 2.01.86 3.15 0 1.195-.62 3.11-1.368 3.938-.21.23-.354.467-.308.722.12 1.073.614 1.5.614 1.5.237.24-.188.563-.537.5-.802-.145-1.494-.42-2.545-.81-.29-.146-.336-.106-.563-.057-2.043.712-4.398.476-6.083-.926 5.964-.524 8.726-3.03 9.93-8.016z"></path>
                                    </g>
                                </g>
                            </svg>
                            查看回复
                        </button>
                        <button
                            className="comment-dianzanBtn-right"
                            style={{display: this.state.displayBtn}}
                            onClick={(this.btnOnClick).bind(this,'hf')}>
                            <svg viewBox="0 0 22 16" className="Icon1 Icon1--like Icon1--left" width="13" height="16"
                                 aria-hidden="true" style={{height: '16px', width: '13px'}}><title></title>
                                <g>
                                    <path
                                        d="M21.96 13.22c-1.687-3.552-5.13-8.062-11.637-8.65-.54-.053-1.376-.436-1.376-1.56V.677c0-.52-.635-.915-1.116-.52L.47 6.67C.18 6.947 0 7.334 0 7.763c0 .376.14.722.37.987 0 0 6.99 6.818 7.442 7.114.453.295 1.136.124 1.135-.5V13c.027-.814.703-1.466 1.532-1.466 1.185-.14 7.596-.077 10.33 2.396 0 0 .395.257.535.257.892 0 .614-.967.614-.967z"></path>
                                </g>
                            </svg>
                            回复
                        </button>
                        <button className="comment-dianzanBtn-right"
                                style={{display: this.state.displayBtn}}
                                onClick={(this.btnOnClick).bind(this,'cai')}>
                            <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"
                                 className="Icon1 Icon1--like Icon1--left" width="13" height="16" aria-hidden="true"
                                 style={{height: '16px', width: '13px',transform:'rotate(180deg)'}}><title></title>
                                <g>
                                    <path d="M.718 7.024c-.718 0-.718.63-.718.63l.996 9.693c0 .703.718.65.718.65h1.45c.916 0 .847-.65.847-.65V7.793c-.09-.88-.853-.79-.846-.79l-2.446.02zm11.727-.05S13.2 5.396 13.6 2.89C13.765.03 11.55-.6 10.565.53c-1.014 1.232 0 2.056-4.45 5.83C5.336 6.965 5 8.01 5 8.997v6.998c-.016 1.104.49 2 1.99 2h7.586c2.097 0 2.86-1.416 2.86-1.416s2.178-5.402 2.346-5.91c1.047-3.516-1.95-3.704-1.95-3.704l-5.387.007z"></path>
                                </g>
                            </svg>
                            {this.state.isCai?'踩':'取消踩'}
                        </button>
                        <CommentReportDialog display={this.state.displayBtn}/>
                    </div>
                    <div style={{display:this.state.replayInput}}>
                        <FormControl ref="pl"
                            type="text" placeholder={hf}
                            className="comment-replayInput"
                            value={this.state.replayContent}
                            onChange={(this.changeContent).bind(this)}/>
                        <Button style={{float:'right'}} bsStyle="primary"
                                onClick={(this.btnOnClick).bind(this,'pl')}>
                            评论</Button>
                        <Button style={{float:'right',marginRight:'10px'}}
                                onClick={(this.btnOnClick).bind(this,'qxpl')}>
                            取消</Button>
                    </div>
                </Media.Body>
                <CommentDialog show={this.state.lgShow} onHide={lgClose}/>
            </Media.ListItem>
        );
    }
}

export default CommentContent;