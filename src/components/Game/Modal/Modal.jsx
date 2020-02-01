import React from 'react';
import './_modal.scss'
const Modal = ({ info, close }) => {
    return (
        <div id='modal' className="modal">
            <div className="modal__card">
                <h2>{info.result}</h2>
                <p>{info.text}</p>
                <button onClick={close}>{info.suggest}</button>
            </div>
        </div>
    )
}

export default Modal