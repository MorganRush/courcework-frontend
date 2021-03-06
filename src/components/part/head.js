import React, { Component } from 'react';
import '../css/App.css';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: props.isAuth,
            login: props.login,
        };
    }

    render() {
        return (
            <div className="App">
                <head>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                </head>
                <nav class="navbar navbar-futhead navbar-fixed-top app-navbar">
                    <div class="container">
                        <div class="navbar-header">
                            <a href="javascript:;" class="navbar-toggle mobile-navbar-toggle">
                                <i class="material-icons font-32 white">menu</i>
                            </a>
                        </div>
                        <div class="navbar-collapse collapse" id="navbar-collapse-main">
                            <ul class="nav navbar-nav hidden-sm hidden-xs">
                                <li class="dropdown dropdown-hover with-fade only-text search-hide">
                                    {/*<Link class="dropdown-toggle disabled" data-toggle="dropdown" to="/players">Players</Link>*/}
                                    <a class="dropdown-toggle disabled" data-toggle="dropdown" href="/">Home</a>
                                </li>
                                <li class="dropdown dropdown-hover with-fade only-text search-hide">
                                    {/*<Link class="dropdown-toggle disabled" data-toggle="dropdown" to="/players">Players</Link>*/}
                                    <a class="dropdown-toggle disabled" data-toggle="dropdown" href="/players">Players</a>
                                </li>
                                <li class="dropdown dropdown-hover with-fade only-text search-hide">
                                    {/*<Link class="dropdown-toggle disabled" data-toggle="dropdown" to="/players">Players</Link>*/}
                                    <a class="dropdown-toggle disabled" data-toggle="dropdown" href="/countries">Nations</a>
                                </li>
                                <li class="dropdown dropdown-hover with-fade only-text search-hide">
                                    {/*<Link class="dropdown-toggle disabled" data-toggle="dropdown" to="/players">Players</Link>*/}
                                    <a class="dropdown-toggle disabled" data-toggle="dropdown" href="/teams">Clubs</a>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right navbar-personal hidden-sm hidden-xs search-hide" hidden={this.state.isAuth}>
                                <li class="with-fade only-text">
                                    <a href="">Sign in</a>
                                </li>
                                <li class="with-fade only-text"><a class="text-gray">or</a></li>
                                <li class="with-fade only-text">
                                    <a href="">Sign up</a>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right navbar-personal hidden-sm hidden-xs search-hide" hidden={!this.state.isAuth}>
                                <li class="with-fade only-text">
                                    <a href="">Favorites</a>
                                </li>
                                <li class="with-fade only-text">
                                    <div>{this.state.login}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
            </div>
        );
    }
}

export default(Head)
