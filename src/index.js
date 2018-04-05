import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import listOfContracts from './components/listOfContracts';
import listOfTeam from './components/listOfTeam';
import listOfCountries from './components/listOfCountries';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
            <Route path="/players" component={listOfContracts}/>
            <Route path="/teams" component={listOfTeam}/>
            <Route path="/countries" component={listOfCountries}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
