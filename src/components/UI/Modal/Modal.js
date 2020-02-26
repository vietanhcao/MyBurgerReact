import React from 'react'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show}  modalClosed={props.modalClosed} />
      <div className='modal'
        style={{
          transform: props.show ? 'translateY(0)' : 'translateX(-100vh)',
          opacity: props.show ? '1': '0'
        }}
      >
        { props.children }
      </div>
    </>
  )
}

export default Modal; 