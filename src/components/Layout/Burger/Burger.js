import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
  let tranformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, index)=> {
        return <BurgerIngredient key={igKey + index} type={igKey}/>
      }) //[undefined,,]

    })
    .reduce((arr,el) =>{
      // arr.push(...el)
      return arr.concat(el)
    },[])
  if(tranformIngredients.length === 0 ){
    tranformIngredients = <p>Please start adding ingredients!</p>
  }
    
  return (
  <div className='burger'>
    
    <BurgerIngredient type='bread-top' />
      {tranformIngredients}
    <BurgerIngredient type='bread-bottom' />
  </div>)
}

export default Burger;