import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
const SideDrawer = (props) => {
  return (
    <>
      <Backdrop show={props.show} modalClosed={props.closed} />
      <div className={['side-drawer', props.show ? 'open': 'close'].join(' ') }>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default SideDrawer