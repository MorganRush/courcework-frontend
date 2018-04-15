import React, {Component} from 'react';
import './css/App.css';
import {connect} from 'react-redux';
import Head from './part/head';
import $ from "jquery";

const urlOnUserName = "http://localhost:8000/main/user/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            login: '',
        };
        this.loadName = this.loadName.bind(this);
    }

    loadName() {
        $.ajax({
            url: (urlOnUserName),
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data);
                if (data.login != null){
                    this.state.isAuth = true;
                    this.state.login = data.login;
                }
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(urlOnUserName, status, err.toString());
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Head login = {this.state.login} isAuth={this.state.isAuth}/>
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
