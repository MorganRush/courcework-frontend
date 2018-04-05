import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import  contracts from './contracts'

export default combineReducers({
    routing: routerReducer,
    contracts,
});