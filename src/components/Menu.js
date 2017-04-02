import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Menu.css';

const coffeeList = [
	'에스프레소', '아메리카노', '카푸치노', '카페라떼', '카페모카', '카라멜마끼아또', '바닐라빈라떼', '초코라떼', '녹차라떼',
	'고구마라떼', '블루베리라떼', '그린티민트초코칩라떼'
]

const smoothieList = [
	'플레인요거트프라페', '바닐라빈프라페', '그린티민트초코칩프라페', '녹차프라페', '초코프라페', '쿠키앤크림프라페',
	'키위스무디', '딸기스무디', '딸기요거트스무디', '베리믹스스무디', '애플망고스무디'
]

const teaList = [
	'얼그레이', '페퍼민트', '자스민', '레몬차', '자몽차', '모과차', '유자차', '대추차', '생강차', '레몬아이스티', 
	'복숭아아이스티', '석류아이스티'
]

const adeList = [
	'레모네이드', '자몽에이드', '오렌지에이드'
]

const juiceList = [
	'골드메달애플쥬스', '오렌지쥬스', '자몽쥬스', '생과일쥬스'
]

const sideMenu = [
	'크림치즈프레즐', '허니버터브레드', '허니버터볼', '팥빙수(계절메뉴)' 
]

class Menu extends Component {
	render(){
		return(
			<section id="menu" className="menuSection">
				<div className="wrapper">
					<div className="menuWrapper">
						<MenuTitle />
						<hr />
						<div className="menuDescription">
							<MenuDescription title="COFFEE & LATTE" list={coffeeList} device={this.props.device}/>
							<MenuDescription title="SMOOTHIE & FRAPPE" list={smoothieList} device={this.props.device}/>
							<MenuDescription title="TEA" list={teaList} device={this.props.device}/>
							<MenuDescription title="ADE" list={adeList} device={this.props.device}/>
							<MenuDescription title="JUICE" list={juiceList} device={this.props.device}/>
							<MenuDescription title="SIDEMENU" list={sideMenu} device={this.props.device}/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

class MenuTitle extends Component{
	render(){
		return(
			<div className="menuTitle">
				<h2>The Menus</h2>
				<h5>in coffee story</h5>
			</div>
		)
	}
}

class MenuDescription extends Component {

	constructor(props){
		super(props);
		this.state = {
			isOpened:false
		}
	}

	_renderMenu(array){
		return array.map((data,index) => 
			<li className="menuListName" key={index}>{data}</li>
		)
	}

	_toggleMenu(){
		return this.state.isOpened ? this.setState({isOpened:false}) : this.setState({isOpened:true})
	}

	render(){
		if(this.props.device === "pc"){
			return(
				<ul>
					<li className="menuListTitle">{this.props.title}</li>
					{this._renderMenu(this.props.list)}
				</ul>
			)
		} else if (this.props.device === "mobile"){
			return(
				<ul style={{paddingTop:'0px', paddingBottom:'0px'}}>
					<li className="menuListTitle" onClick={() => this._toggleMenu()}>{this.props.title}</li>
					{this.state.isOpened && this._renderMenu(this.props.list)}
				</ul>
			)
		}	
	}
}

function mapStateToProps(state){
	return {
		device:state.device
	}
}

export default connect(mapStateToProps)(Menu);