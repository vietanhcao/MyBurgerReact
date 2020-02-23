import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
  const tranformIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, index)=> {
        return <BurgerIngredient key={igKey + index} type={igKey}/>
      }) //[undefined,,]

    })
  return (
  <div className='burger'>
    
    <BurgerIngredient type='bread-top' />
      {tranformIngredient}
    <BurgerIngredient type='bread-bottom' />
  </div>)
}

export default Burger;