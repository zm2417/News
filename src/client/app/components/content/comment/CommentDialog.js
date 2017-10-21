import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import CommentDialogContent from './CommentDialogContent';

class CommentDialog extends React.Component{
    render(){
        return(<Modal {...this.props}  aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">查看对话</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CommentDialogContent/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>);
    }
}

export default CommentDialog;