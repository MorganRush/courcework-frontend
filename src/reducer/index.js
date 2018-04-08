import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import  contracts from './contracts';
import teams from './teams';
import countries from './countries';
import playersOfTeam from './playersOfTeam';
import player from './player';

export default combineReducers({
    routing: routerReducer,
    contracts,
    teams,
    countries,
    playersOfTeam,
    player,
});