import React, {Component} from 'react';
import Img from 'react-image';
import {connect} from 'react-redux';
import './css/listOfContracts.css';
import $ from "jquery";
import index from "../reducer";

const urlOnDataLoad = "http://localhost:8000/main/contracts/";
const urlOnFind = "http://localhost:8000/main/contracts/like/";

class ListOfContract extends Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            offset: 0,
            limit: 10,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.addContracts();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    };

    handleScroll(event) {
        console.log('the scroll things', event);
    };

    getUserFavorite() {

    }

    addContracts() {
        $.ajax({
            url: (urlOnDataLoad + this.state.limit + '/' + this.state.offset),
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data);
                data.sort((contract1, contract2) => {
                    return contract2.reiting - contract1.reiting
                });
                console.log(data);
                data.forEach((contract) => {
                    this.props.onAddContracts(contract);
                });
                this.state.offset++;
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(urlOnDataLoad, status, err.toString());
            }
        });
    }

    findContracts() {
        this.props.onDeleteContracts();
        if (this.findInput.value === "" || this.findInput.value === null) {
            this.state.offset = 0;
            this.addContracts();
            return;
        }
        $.ajax({
            url: (urlOnFind + '10/' + this.findInput.value),
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (this.findInput.value === "" || this.findInput.value === null) {
                    return;
                }
                data.forEach((contract) => {
                    this.props.onAddContracts(contract);
                });
                this.state.offset++;
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(urlOnDataLoad, status, err.toString());
            }
        });
    }

    setLimit(event) {
        this.state.limit = event.target.value;
    }

    handleClick(){
        alert('lol');
        this.hiddenDiv.hidden = !this.hiddenDiv.hidden
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
                        <li key={contract.id.toString()} onClick={this.handleClick.bind(this)}>
                            <div class="player-item">
                                <div class="display-block padding-0">
                                    <span class="player-rating stream-col-50 text-center">{contract.reiting}</span>
                                    <span class="player-info">
                                        <Img class="player-image" src={contract.refImage}/>
                                        <Img class="player-club" src={contract.team.refClubs}/>
                                        <Img class="player-nation" src={contract.team.country.refNations}/>
                                        <span class="player-name">{contract.player.name}</span>
                                    </span>
                                    <span class="pull-right padding-l-r-14">
                                        <span class="player-stat stream-col-60">
                                            <span class="value">{contract.pac}</span>
                                            <span class="hover-label">PAC</span>
                                        </span>
                                        <span class="player-stat stream-col-60">
                                            <span class="value">{contract.sho}</span>
                                            <span class="hover-label">SHO</span>
                                        </span>
                                        <span class="player-stat stream-col-60">
                                            <span class="value">{contract.pas}</span>
                                            <span class="hover-label">PAS</span>
                                        </span>
                                        <span class="player-stat stream-col-60">
                                            <span class="value">{contract.dri}</span>
                                            <span class="hover-label">DRI</span>
                                        </span>
                                        <span class="player-stat stream-col-60">
                                            <span class="value">{contract.def}</span>
                                            <span class="hover-label">DEF</span>
                                        </span>
                                        <span class="player-stat stream-col-60">
                                            <span class="value">{contract.phy}</span>
                                            <span class="hover-label">PHY</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div hidden={true} ref={(hiddenDiv) => {this.hiddenDiv = hiddenDiv}}>
                                <h1>лол</h1>
                            </div>
                        </li>
                    )}
                </ul>
                <button onClick={this.addContracts.bind(this)}>More</button>
                <div onChange={this.setLimit.bind(this)}>
                    <input type="radio" value="10" name="gender"/> 10
                    <input type="radio" value="20" name="gender"/> 20
                    <input type="radio" value="30" name="gender"/> 30
                    <input type="radio" value="40" name="gender"/> 40
                    <input type="radio" value="50" name="gender"/> 50
                </div>
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
            dispatch({type: 'ADD_CONTRACTS', payload: contracts});
        },
        onDeleteContracts: () => {
            dispatch({type: 'DELETE_CONTRACTS'});
        }
    })
)(ListOfContract);