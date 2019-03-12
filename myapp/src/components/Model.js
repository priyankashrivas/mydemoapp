import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {

    //creating the portal
    return ReactDOM.createPortal(
        <div 
            onClick ={props.onDismiss} 
            className ="ui dimmer modal visible active"
        >
            <div onClick ={(e) => e.stopPropagation()}className ="ui standard modal visible active ">
                <div className ="header">{props.title}</div>
                <div className ="content">{props.content}</div>
                <div className="actions">{props.action}</div>
             </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;

