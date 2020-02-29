import React, { Component, Fragment } from 'react';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toobar';
import SideDrawer from '../../components/Navigation/SideDrawer/SIdeDrawer';
class Layout extends Component {
	state = {
		showSideDrawer: true
	};
	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false})
	};
	sideDrawerOpendHandler = () => {
		this.setState({showSideDrawer: true})
	};
	render() {
		return (
			<Fragment>
				<Toolbar opened={this.sideDrawerOpendHandler} />
				<SideDrawer  show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
				<main className='content'>{this.props.children}</main>
			</Fragment>
		);
	}
}

export default Layout;
