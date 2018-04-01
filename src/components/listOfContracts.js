import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import './css/listOfContracts.css';

class ListOfContract extends Component{
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.store);
        return (
            <div className="ListOfContract">
                <ul>
                    <li>
                        <div class="player-item">
                            <span class="stream-col-40">RAT</span>
                            <span class="stream-col-80"></span>
                            <span class="stream-col-60">Name</span>
                            <span class="pull-right padding-l-r-14">
                      <span class="stream-col-60">PAC</span>
                      <span class="stream-col-60">SHO</span>
                      <span class="stream-col-60">PAS</span>
                      <span class="stream-col-60">DRI</span>
                      <span class="stream-col-60">DEF</span>
                      <span class="stream-col-60">PHY</span>
                      </span>
                        </div>
                    </li>
                    {this.props.store.contracts.map((contract) =>
                        <li>
                            <div class="player-item">
                                <a href="/" class="display-block padding-0">
                                    <span class="player-rating stream-col-50 text-center">{ contract.player.reiting }</span>
                                    <span class="player-info">
                           <Img class="player-image" src={ contract.player.refImage }/>
                           <Img class="player-club" src={ contract.team.refClubs }/>
                           <Img class="player-nation" src={ contract.team.country.refNations }/>
                           <span class="player-name">{ contract.player.name }</span>
                       </span>
                                    <span class="pull-right padding-l-r-14">
                       <span class="player-stat stream-col-60">
                           <span class="value">{ contract.player.pac }</span>
                           <span class="hover-label">PAC</span>
                       </span>
                       <span class="player-stat stream-col-60">
                           <span class="value">{ contract.player.sho }</span>
                           <span class="hover-label">SHO</span>
                       </span>
                       <span class="player-stat stream-col-60">
                           <span class="value">{ contract.player.pas }</span>
                           <span class="hover-label">PAS</span>
                       </span>
                       <span class="player-stat stream-col-60">
                           <span class="value">{ contract.player.dri }</span>
                           <span class="hover-label">DRI</span>
                       </span>
                       <span class="player-stat stream-col-60">
                           <span class="value">{ contract.player.def }</span>
                           <span class="hover-label">DEF</span>
                       </span>
                       <span class="player-stat stream-col-60">
                           <span class="value">{ contract.player.phy }</span>
                           <span class="hover-label">PHY</span>
                       </span>
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
)(ListOfContract);