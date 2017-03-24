import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Footer.css';

class Footer extends Component {
	render(){
		return(
			<footer id="footer" className="footerSection">
				{
					this.props.device === "pc" &&
					<h5>COPYRIGHT© 2017, Seon-ho Kim</h5>
				}
				{
					this.props.device === "mobile" &&
					<h5>© 2017, Seon-ho Kim</h5>
				}
			</footer>
		)
	}
}

function mapStateToProps(state){
    return {
        device: state.device
    }
}

export default connect(mapStateToProps)(Footer);