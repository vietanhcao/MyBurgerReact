import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css'
const SideDrawer = (props) => {
  return (
    <div className='side-drawer'>
      <Logo height="11%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default SideDrawer