import React, { Component } from 'react';
import '../styles/Story.css';

class Story extends Component {
	render(){
		return(
			<section id="story" className="storySection">
				<div className="storyContainer">
					<StoryImg />
					<hr />
					<StoryDescription />
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

class StoryDescription extends Component{
	render(){
		return(
			<div className="storySection">
				<text>
					어서 오시게, 낯선 이여<br/>
					여주의 커피스토리에 당도한 것을 환영하오<br/><br/>
					이곳은 이천과 여주 길목에 있는 조용하고 편안한 카페, 커피스토리<br/>
					그대들의 피곤한 여행길에 커피향이 함께 하길...
				</text>
			</div>
		)
	}
}

export default Story;