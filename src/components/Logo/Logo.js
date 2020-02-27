import React from  'react'
import './Logo.css'
import BurgerLogo from '../../assets/images/28.1 burger-logo.png.png'

const Logo = (props) => {
  return (
    <div className='logo'>
      <img src={BurgerLogo} alt='myBurger'/>
    </div>
  )
}

export default Logo