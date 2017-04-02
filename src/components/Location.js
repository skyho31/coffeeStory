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
						{
							this.props.device === "pc" &&
							<div>
								<a href="http://map.naver.com/local/siteview.nhn?code=38518890"><button className="naver mapButton" style={{borderRadius:'40px 0 0 40px'}}>네이버 지도에서 보기</button></a>
								<a href="http://place.map.daum.net/1850298270"><button className="daum mapButton" style={{borderRadius:'0 40px 40px 0'}}>다음 지도에서 보기</button></a>
							</div>
						}
						{
							this.props.device === "mobile" &&
							<div>
								<a href="http://map.naver.com/local/siteview.nhn?code=38518890"><button className="naver mapButton">네이버 지도에서 보기</button></a>
								<a href="http://place.map.daum.net/1850298270"><button className="daum mapButton">다음 지도에서 보기</button></a>
							</div>
						}
						</div>

					{ 
						this.props.device === "pc" &&
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.9996672941985!2d127.49357658893649!3d37.34510590139683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35635a3eadf96e05%3A0xb1d3a61a195307c4!2z7Luk7ZS87Iqk7Yag66as!5e0!3m2!1sko!2skr!4v1491120582953" width="900" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
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