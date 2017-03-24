import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Location.css';

class Location extends Component {

	render(){
		return(
			<section id="location" className="locationSection">
				<div className="locationWrapper">
					<div className="menuTitle">
						<h2>The Location</h2>
						<h5>in coffee story</h5>
					</div>
					{ 
						this.props.device === "pc" &&
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.8871899161836!2d127.49230681485233!3d37.34517934453264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35635a3eade37711%3A0x79c1c79cf68b5e8f!2z6rK96riw64-EIOyXrOyjvOq1sCDtnaXsspzrqbQg7J207Jes66GcIDYyMg!5e0!3m2!1sko!2skr!4v1489725541779" width="900" height="450" frameBorder="0" allowFullScreen></iframe>
					}
					{
						this.props.device === "mobile" && 
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.8871899161836!2d127.49230681485233!3d37.34517934453264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35635a3eade37711%3A0x79c1c79cf68b5e8f!2z6rK96riw64-EIOyXrOyjvOq1sCDtnaXsspzrqbQg7J207Jes66GcIDYyMg!5e0!3m2!1sko!2skr!4v1489725541779" width="auto" height="450" frameBorder="0" allowFullScreen></iframe>
					}
					
				</div>
			</section>
		)
	}
}

function mapStateToProps(state){
    return {
        device: state.device
    }
}


export default connect(mapStateToProps)(Location);