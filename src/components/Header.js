import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Header.css';

class Header extends Component {

	render(){
		return(
			<header className="header">
				<div className="logoText" >
					<h1><a href="#home">coffee story</a></h1>
				</div>
				{ 
					this.props.device === "pc" &&
				<nav>
					<ul>
						<li><a href="#home">Home</a></li>
						<li><a href="#menu">Menu</a></li>
						<li><a href="#best">Photo</a></li>
						<li><a href="#location">Location</a></li>
					</ul>
				</nav>
				}
			</header>
		)
	}
}

function mapStateToProps(state){
    return {
        device: state.device
    }
}

export default connect(mapStateToProps)(Header);