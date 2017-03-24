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
				<text>How Do I Love Thee?
 <br/>
Elizabeth Barrett Browning<br/>
 <br/>
How do I love thee? Let me count the ways.<br/>
I love thee to the depth and breadth and height<br/>
My soul can reach, when feeling out of sight<br/>
For the ends of Being and ideal Grace.<br/><br/>
 
I love thee to the level of everyday's<br/>
Most quiet need, by sun and candle-light.<br/>
I love thee freely, as men strive for Right;<br/>
I love thee purely, as they turn from Praise.<br/><br/>
 
I love thee with the passion put to use<br/>
In my old griefs, and with my childhood's faith.<br/>
I love thee with a love I seemed to lose<br/>
With my lost saints, - I love thee with the breath,<br/>
Smiles, tears, of all my life! - and, if God choose,<br/>
I shall but love thee better after death.<br/>
				</text>
			</div>
		)
	}
}

export default Story;