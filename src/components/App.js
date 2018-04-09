import React, {Component} from 'react';
import './css/App.css';
import {connect} from 'react-redux';
import Head from './part/head';
import RegistrationWindow from './part/registrationWindow';
import AuthorizationWindow from './part/authorizationWindow';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Head/>
                <div class="text-center"><h1>Welcome to PIPFUT!</h1></div>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({}),
)(App);
