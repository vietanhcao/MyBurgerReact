import React, { Component, Fragment } from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/SideDrawer/SIdeDrawer';
const Layout = props => {
	return (
		<Fragment>
			<Toolbar />
      <SideDrawer  />
			<main className='content'>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
