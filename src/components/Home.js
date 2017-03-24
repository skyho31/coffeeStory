import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {

	render(){
		return(
			<section id="home" className="homeSection">
				<div className="homeWrapper">
					<object className="homeImg" type="image/svg+xml" data={require('../img/banner.svg')}/>
				</div>
				<span className="downArrow"></span>
				<span className="downArrow"></span>
			</section>
		)
	}
}

export default Home;