import React, { Component, Fragment } from 'react'
import './Layout.css'
const  Layout = (props) => {
    return (
     <Fragment>
        <div>
          Toolbar,
          SideDrawer,
          Backdrop
        </div>
        <main className='content'>{props.children}</main>
     </Fragment>
    )
}

export default Layout