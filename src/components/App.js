import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Story from './Story';
import Menu from './Menu';
import Best from './Best';
import Location from './Location';
import '../styles/App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkDevice } from '../actions/index';

class App extends Component {

    componentWillMount(){
        this.props.checkDevice()
    }

    render() {

        return (
            <div className="container">
                <Header />
                <Home />
                <Story />
                <Menu />
                <Best />
                <Location />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        device: state.device
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({checkDevice: checkDevice}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
