import React, { Component } from 'react';
import '../styles/Story.css';

class Story extends Component {
	render(){
		return(
			<section id="story" className="storySection">
				<div className="storyContainer">
					<StoryImg />
				</div>
			</section>
		)
	}
}

class StoryImg extends Component{
	render(){
		return(
			<div className="storySection">
				<object className="cup" type="image/svg+xml" data={require('../img/cup3.svg')}/>
				<h5>Welcome, Stranger</h5>
			</div>
		)
	}
}

/*
class StoryDescription extends Component{
	render(){
		return(
			<div className="storySection">
			</div>
		)
	}
}
*/

export default Story;