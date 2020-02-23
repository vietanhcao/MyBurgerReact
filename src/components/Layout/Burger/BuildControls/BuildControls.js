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
      {controls.map((ctrl, index) => {
        return (
          <BuildControl 
            key={ctrl.label + index} 
            label={ctrl.label} 
            added={() => props.addIngredientHandler(ctrl.type)}
            />
        )
      })
      }
    </div>
  )
}

export default BuildControls