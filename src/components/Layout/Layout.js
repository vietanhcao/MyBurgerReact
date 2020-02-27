import React, { Component, Fragment } from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toobar';
const Layout = props => {
	return (
		<Fragment>
			<Toolbar />
			<main className='content'>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
