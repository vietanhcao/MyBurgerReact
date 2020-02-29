import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }
  
	render() {
    console.log('Moldal')
		return (
			<>
				<Backdrop show={this.props.show} modalClosed={this.props.modalClosed} />
				<div
					className='modal'
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateX(-100vh)',
						opacity: this.props.show ? '1' : '0',
					}}
				>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default Modal;
