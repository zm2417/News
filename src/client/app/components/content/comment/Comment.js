import React from 'react';

import {ListGroup,ListGroupItem,Media, Image, Button, ButtonToolbar, DropdownButton, MenuItem, Pagination,FormControl} from 'react-bootstrap';

import './Comment.css';

import CommentContent from './CommentContent';

const Icon = require('uxcore-icon');

let ButtonUx = require('uxcore-button');
let Popover = require('uxcore-popover');

class Comment extends React.Component {

    constructor() {
        super();
        this.state = {
            like: '453',      //点击喜欢的数量
            notLike: '34',    //点击不喜欢
            comment: '400',   //评论数量
            sortType: '时间', //排序的类型：时间/智能
            activePage: 1,    //分页的当前的页数
            displayPlBtn:'none', //评论输入框点击时，评论的button的隐藏与否
        }
    }

    //评论的分页的点击事件
    handleSelect(evenKey) {
        this.setState({activePage: evenKey});
    }

    //。。。的下拉菜单的点击事件
    alertClick(p,e){
        if(p==1){
            alert('1');
        }else {
            alert('2');
        }
    }

    //评论按钮的隐藏事件
    handleShow(){
        this.setState({displayPlBtn:'inline-block'});
    }

    render() {
        let overlay = <div style={{fontSize: '14px'}}>
            <ListGroup>
                <ListGroupItem className="comment-ListGroupItem" onClick={(this.alertClick).bind(this,1)}>不感兴趣</ListGroupItem>
                <ListGroupItem className="comment-ListGroupItem" onClick={(this.alertClick).bind(this,2)}>举报</ListGroupItem>
            </ListGroup>
        </div>;

        return (<div className="comment">
            <ButtonToolbar >
                <Button className="commentB">喜欢 | {this.state.like}</Button>
                <Button className="commentB">不喜欢 | {this.state.notLike} </Button>
                <button className="commentB">
                    <Icon name="qiuzhu" className="commentIcon"/>{this.state.comment}条评论
                </button>
                <button className="commentB">
                    <Icon name="pingjia" className="commentIcon"/>收藏
                </button>

                <Popover overlay={overlay} placement="bottom" trigger="click">
                    <button className="commentB">. . .</button>
                </Popover>
            </ButtonToolbar>
            <Media.List className="commentList">
                <div className="commentTopbar">
                    <h2 className="commentTop-title">{this.state.comment}条评论</h2>
                    <button className="commentTop-button">切换为{this.state.sortType}排序</button>
                    <hr className="commentTop-Hr"/>
                </div>
                <CommentContent replay="none"/>
                <CommentContent replay="inline-block"/>
                <hr className="commentTop-Hr"/>
                <div className="test">
                    <Pagination className="comment-pagination" prev next first last ellipsis boundaryLinks items={20}
                                maxButtons={5} activePage={this.state.activePage}
                                onSelect={(this.handleSelect).bind(this)}/>
                </div>
                <hr className="commentTop-Hr"/>
                <div>
                    <FormControl style={{width:'89%',display: 'inline-block'}} type="text" placeholder="写下你的评论" onClick={(this.handleShow).bind(this)}/>
                    <Button ref="plBtn" className='comment-Btn' style={{display: this.state.displayPlBtn}}  bsStyle="primary">评论</Button>
                </div>
            </Media.List>

        </div>);
    }
}

export default Comment;