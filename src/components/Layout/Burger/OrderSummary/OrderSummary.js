
import React from 'react'

const OrderSummary = (props) => {
  const ingreditentSummary  =  Object.keys(props.ingredients)
    .map((igKey, index) => {
    return  <li key={igKey + index}>{igKey.replace(/^[a-zA-Z]/g, igKey[0].toUpperCase())}: {props.ingredients[igKey]}</li>
    })

  return (
     <>
       <h3>Your order</h3>
       <p>A delicious burger with the following ingredients: </p>
       <ul> 
          {ingreditentSummary }
       </ul>
       <p>Continue to Checkout?</p>
     </> 
  )
}

export default OrderSummary 