import React, { Component, Fragment } from 'react'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
}
export default class BurgerBuilder extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   }
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    this.setState(prevState => {
      return {
        ingredients : {...prevState.ingredients, [type]: updatedCount },
        totalPrice: prevState.totalPrice +  INGREDIENT_PRICES[type]}
    })
  }
  /**TODO: remove */
  removeIngredientHandler = (type) => {

  }
  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          addIngredientHandler={this.addIngredientHandler} />
      </Fragment>
    )
  }
}
