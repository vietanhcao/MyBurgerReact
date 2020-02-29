import React from 'react'
import './DrawerTogger.css'

const DrawerTogger = (props) => {
  return (
    <div className='drawer-toggle' onClick={props.opened}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerTogger