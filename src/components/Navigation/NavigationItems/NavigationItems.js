import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
  return (
    <ul className='navigation-items'>
        <NavigationItem link='/' active > Burger Builder</NavigationItem>
        <NavigationItem link='/' > Checkout </NavigationItem>
    </ul>
  )
}



export default NavigationItems