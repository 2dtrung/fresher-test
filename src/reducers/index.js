import { combineReducers } from "redux";
import setVisibleConfig from './setVisibleConfig';
import setVisibleTQT from './setVisibleTQT';
import setConnect from './setConnect';
import getData from './getData';

export default combineReducers({
    setVisibleConfig,
    setVisibleTQT,
    setConnect,
    getData,
})