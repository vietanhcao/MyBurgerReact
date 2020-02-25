import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => {
  return (
    <div className='build-controls'>
      <p>Current price: <strong>{props.price.toFixed(2)}</strong> $</p>
      {controls.map((ctrl, index) => {
        return (
          <BuildControl 
            isDisabled={props.disabled[ctrl.type]}
            key={ctrl.label + index} 
            label={ctrl.label} 
            added={() => props.addIngredientHandler(ctrl.type)}
            removed={() => props.removeIngredientHandler(ctrl.type)}
            />
        )
      })
      }
    </div>
  )
}

export default BuildControls