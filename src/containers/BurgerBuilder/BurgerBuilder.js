import React, { Component, Fragment } from 'react'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Layout/Burger/OrderSummary/OrderSummary';


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
    totalPrice: 4,
    purchaseable: false
  }

  updatePurchaseState = () => {
    const ingredients = {...this.state.ingredients}
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum , number) => {
        return sum + number
      }, 0)

    this.setState({ purchaseable: sum > 0 })

  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    this.setState(prevState => {
      return {
        ingredients : {...prevState.ingredients, [type]: updatedCount },
        totalPrice: prevState.totalPrice +  INGREDIENT_PRICES[type]}
    }, this.updatePurchaseState)
    
  }
  /**TODO: remove */
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0 ){
      return
    }
    const updatedCount = oldCount - 1;
    this.setState(prevState => {
      return {
        ingredients : {...prevState.ingredients, [type]: updatedCount },
        totalPrice: prevState.totalPrice -  INGREDIENT_PRICES[type]}
    },this.updatePurchaseState)
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (const key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Modal >
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          addIngredientHandler={this.addIngredientHandler} 
          removeIngredientHandler={this.removeIngredientHandler} 
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          />
      </Fragment>
    )
  }
}
