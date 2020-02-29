import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	
	
	render() {
		const ingreditentSummary = Object.keys(this.props.ingredients).map(
			(igKey, index) => {
				return (
					<li key={igKey + index}>
						{igKey.replace(/^[a-zA-Z]/g, igKey[0].toUpperCase())}:{' '}
						{this.props.ingredients[igKey]}
					</li>
				);
			}
		);
		console.log('render order')
		return (
			<>
				<h3>Your order</h3>
				<p>A delicious burger with the following ingredients: </p>
				<ul>{ingreditentSummary}</ul>
				<p>Continue to Checkout?</p>
				<p>
					<strong>Total Price: {this.props.price.toFixed(2)} $</strong>
				</p>
				<Button btnType='danger' onClick={this.props.modalClosed}>
					CANCEL
				</Button>
				<Button btnType='success' onClick={this.props.purchaseContinueHandler}>
					CONTINUE
				</Button>
			</>
		);
	}
}

export default OrderSummary;
