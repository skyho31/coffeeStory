import { combineReducers } from 'redux';
import CheckDevice from './checkDevice';

const allReducers = combineReducers({
	device: CheckDevice
});

export default allReducers;
