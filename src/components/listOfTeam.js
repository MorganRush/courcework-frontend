import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import './css/listOfTeams.css';

class ListOfTeams extends Component{
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.store);
        return (
            <div className="ListOfTeams">
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
                            <ul class="nav navbar-nav navbar-right navbar-personal hidden-sm hidden-xs search-hide">
                                <li class="with-fade only-text">
                                    <a href="">Sign in</a>
                                </li>
                                <li class="with-fade only-text"><a class="text-gray">or</a></li>
                                <li class="with-fade only-text">
                                    <a href="">Sign up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
                <ul class="list-group">
                    <li>
                        <div class="team-item">
                            <span class="stream-col-80"></span>
                            <span class="stream-col-60">Name</span>
                        </div>
                    </li>
                    {this.props.store.teams.map((team) =>
                        <li>
                            <div class="team-item">
                                <a href="/" class="display-block padding-0">
                                    <Img class="team-image" src={team.refClubs}/>
                                    <span class="team-info">
                                        <span class="team-name">{ team.name }</span>
                                        <Img class="team-country-image" src={team.country.refNations}/>
                                        <span class="team-country">{team.country.name}</span>
                                    </span>
                                </a>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(ListOfTeams);
