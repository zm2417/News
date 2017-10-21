import React from 'react';

import Dialog from 'uxcore-dialog';
import Button from 'uxcore-button';

import {Checkbox} from 'react-bootstrap';

import './ReportDialog.css';

class CommentReportDialog extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loading:false,
            visible:false,
        }
    }

    showModal(){
        this.setState({visible:true});
        console.log(this.state.display);
    }

    handleOk(){
        this.setState({loading:true});
        //to do fetch
    }

    handleCancel(){
        this.setState({visible:false});
    }

    render(){
        return(<div style={{display:'inline-block'}}>
            <button className="comment-dianzanBtn-right"
                    style={{display: this.props.display}}
                    onClick={(this.showModal).bind(this)}>
                <svg viewBox="0 0 18 20" className="Icon1 Icon1--like Icon1--left" width="13" height="16"
                     aria-hidden="true" style={{height: '16px', width: '13px'}}><title></title>
                    <g>
                        <path
                            d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path>
                    </g>
                </svg>
                举报
            </button>
            <Dialog ref="modal" wrapClassName="vertical-center-dailog" visible={this.state.visible}
            title="举报" onOk={(this.handleOk).bind(this)} onCancel={(this.handleCancel).bind(this)}
            footer={[<Button key="submit" onClick={(this.handleOk).bind(this) }>举报</Button>]}>

                <button className="ReportDialog-Item">
                    <span className="ReportDialog-ItemValue">侵犯我的权益</span>
                    <svg width="11" height="11" viewBox="0 0 6 10"
                         className="Icon Icon--arrowRight" aria-hidden="true" style={{height: '11px', width: '11px'}}>
                        <title></title><g>
                        <path d="M.218 9.78c.29.294.76.294 1.052 0l4.512-4.25c.29-.293.29-.768 0-1.062L1.27.22C.98-.073.51-.073.218.22c-.29.295-.29.77 0 1.064L4 5 .218 8.716c-.29.294-.29.77 0 1.063z" fill-rule="evenodd"></path>
                    </g>
                    </svg>
                </button>
                <button className="ReportDialog-Item">
                    <span className="ReportDialog-ItemValue">对知乎社区有害的内容</span>
                    <svg width="11" height="11" viewBox="0 0 6 10"
                         className="Icon Icon--arrowRight" aria-hidden="true" style={{height: '11px', width: '11px'}}>
                        <title></title><g>
                        <path d="M.218 9.78c.29.294.76.294 1.052 0l4.512-4.25c.29-.293.29-.768 0-1.062L1.27.22C.98-.073.51-.073.218.22c-.29.295-.29.77 0 1.064L4 5 .218 8.716c-.29.294-.29.77 0 1.063z" fill-rule="evenodd"></path>
                    </g>
                    </svg>
                </button>
                <label className="ReportDialog-Item">
                    <div className="ReportDialog-ItemValue">辱骂，歧视，挑衅等（不友善）</div>
                    <input type="checkbox" style={{height:0,width:0,opacity:0}}/>
                    <svg width="16" height="16" viewBox="0 0 20 20" className="ReportDialog-itemCheckIcon" aria-hidden="true" style={{height: '16px', width: '16px'}}><title></title><g><path d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm-2.762-5.37c-.244-.246-3.085-3.32-3.085-3.32-.326-.433-.24-1.05.188-1.377.432-.328 1.044-.242 1.37.19l2.31 2.418 6.22-6.076c.286-.46.887-.603 1.346-.315.456.286.597.892.31 1.353 0 0-6.8 6.814-7.05 7.054-.252.24-.498.444-.827.443-.33 0-.54-.124-.782-.37z" fill-rule="evenodd"></path></g>
                    </svg>
                </label>
            </Dialog>
        </div>);
    }
}

export default CommentReportDialog;