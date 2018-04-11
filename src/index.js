import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import ListOfContracts from './components/listOfContracts';
import ListOfTeam from './components/listOfTeam';
import ListOfCountries from './components/listOfCountries';
import Player from './components/player';
import Team from './components/team';
import ModalAuthentication from './components/part/modalAuthentication';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
            <Route path="players" component={ListOfContracts}/>
            <Route path="players/team/:teamId" component={ListOfContracts}/>
            <Route path="players/country/:countryId" component={ListOfContracts}/>
            <Route path="/player/:id" component={Player}/>
            <Route path="teams" component={ListOfTeam}/>
            <Route path="/team/:id" component={Team}/>
            <Route path="countries" component={ListOfCountries}/>
            <Route path="/page" component={ModalAuthentication}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
