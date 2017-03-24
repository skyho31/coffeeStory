import React, { Component } from 'react';
import '../styles/Menu.css';

class Menu extends Component {
	render(){
		return(
			<section id="menu" className="menuSection">
				<div className="wrapper">
					<div className="menuWrapper">
						<MenuTitle />
						<hr />
						<MenuDescription />
					</div>
				</div>
			</section>
		)
	}
}

class MenuTitle extends Component{
	render(){
		return(
			<div className="menuTitle">
				<h2>The Menus</h2>
				<h5>in coffee story</h5>
			</div>
		)
	}
}

class MenuDescription extends Component {
	render(){
		return(
			<div></div>
		)
	}
}


export default Menu;