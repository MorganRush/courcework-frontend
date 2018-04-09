import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import './css/listOfTeams.css';
import Head from './part/head';

class ListOfTeams extends Component{
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.store);
        return (
            <div className="ListOfTeams">
                <Head/>
                <ul class="list-group">
                    <li>
                        <div class="team-item">
                            <span class="stream-col-80"></span>
                            <span class="stream-col-60">Name</span>
                        </div>
                    </li>
                    {this.props.teams.map((team) =>
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
        teams: state.teams
    }),
    dispatch => ({})
)(ListOfTeams);
