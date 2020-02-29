import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerTogger from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => {
	return (
		<header className='toolbar'>
      <DrawerTogger  opened={props.opened}/>
			<Logo height='80%' />
			<nav className='desktop-only'>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default Toolbar;
