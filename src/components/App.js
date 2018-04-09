import React, {Component} from 'react';
import './css/App.css';
import {connect} from 'react-redux';
import Head from './part/head';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Head/>
                <div class="homepage col-lg-12 text-center ">
                    <div class="walkway-oblique oblique welcome">Welcome to PIPFUT!</div>
                    <div>
                        <a class="walkway-oblique oblique home-ref" href="/players">Players</a>
                        <a class="walkway-oblique oblique home-ref" href="/countries">Nations</a>
                        <a class="walkway-oblique oblique home-ref" href="/teams">Clubs</a>
                    </div>
                    <iframe class="text-center" src="https://player.twitch.tv/?channel=paxarena" frameborder="0"
                            allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                </div>
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
