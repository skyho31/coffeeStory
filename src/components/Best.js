import React, { Component } from 'react';
import '../styles/Best.css';
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpeg';
import img3 from '../img/img5.jpeg';
import img4 from '../img/img4.jpeg';


class Best extends Component {
	render(){
		return(
			<section id="best" className="bestSection">
				<div className="wrapper">
					<div className="menuTitle">
						<h2>Photo</h2>
						<h5>in coffee story</h5>
					</div>
					<hr/>
					<div className="photoContainer">
						<img className="storePhoto" src={img1} alt="쿠폰"/>
						<img className="storePhoto" src={img2} alt="내부"/>
						<img className="storePhoto" src={img3} alt="벽"/>
						<img className="storePhoto" src={img4} alt="사람"/>
					</div>
				</div>	
			</section>
		)
	}
}


export default Best;