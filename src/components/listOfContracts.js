import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import './css/listOfContracts.css';
import $ from "jquery";
import contracts from "../reducer/component/contracts";

const urlOnDataLoad = "http://localhost:8000/main/contracts/";
const urlOnFind = "http://localhost:8000/main/contracts/like/";

class ListOfContract extends Component{
    constructor() {
        super();
        this.state = {
            offset: 0,
            limit: 10,
        };
    }

    componentDidMount(){
        this.addContracts();
    }

    addContracts(){
        $.ajax({
            url: (urlOnDataLoad + this.state.limit + '/' + this.state.offset),
            dataType: 'json',
            cache: false,
            success: function(data) {
                data.forEach((contract) => {
                    this.props.onAddContracts(contract);
                });
                this.state.offset++;
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(urlOnDataLoad, status, err.toString());
            }.bind(this)
        });
    }

    findContracts(){
        this.props.onDeleteContracts();
        if (this.findInput.value === "" || this.findInput.value === null){
            this.state.offset = 0;
            this.addContracts();
            return;
        }
        $.ajax({
            url: (urlOnFind + this.state.limit + '/' + this.findInput.value),
            dataType: 'json',
            cache: false,
            success: function(data) {
                data.forEach((contract) => {
                    this.props.onAddContracts(contract);
                });
                this.state.offset++;
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(urlOnDataLoad, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        console.log(this.props.store);
        return (
            <div className="ListOfContract">
                <label>find</label>
                <input type="text" ref={(input) => {this.findInput = input}}
                       onChange={this.findContracts.bind(this)}/>
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
                    {this.props.contracts.map((contract) =>
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
                <button onClick={this.addContracts.bind(this)}>More</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        contracts: state.contracts
    }),
    dispatch => ({
        onAddContracts: (contracts) => {
            dispatch({ type: 'ADD_CONTRACTS', payload: contracts });
        },
        onDeleteContracts: () => {
            dispatch({ type: 'DELETE_CONTRACTS' });
        }
    })
)(ListOfContract);