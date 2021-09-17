import { combineReducers } from "redux";
import setVisibleConfig from './setVisibleConfig';
import setVisibleTQT from './setVisibleTQT'

export default combineReducers({
    setVisibleConfig,
    setVisibleTQT,
})