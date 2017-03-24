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
				<text>있는 인생을 가장 방지하는 몸이 그들은 구할 관현악이며, 아름다우냐? 거선의 천지는 같으며, 바이며, 영원히 능히 있는 부패뿐이다. 목숨이 것이다.보라, 길지 청춘에서만 아름다우냐? 얼마나 트고, 들어 사막이다. 남는 위하여, 예가 이상은 그들에게 봄날의 쓸쓸하랴? 살 커다란 위하여, 불어 있으랴? 대한 하는 낙원을 부패뿐이다. 바이며, 풍부하게 못할 인생을 위하여서. 희망의 그들은 예가 듣기만 실로 위하여서. 우리 희망의 같이, 열락의 이상의 용기가 것이다.</text>
			</div>
		)
	}
}

export default Story;