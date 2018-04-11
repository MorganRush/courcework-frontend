import React, {Component} from 'react';
import Img from 'react-image';
import {connect} from 'react-redux';
import './css/listOfContracts.css';
import $ from "jquery";
import Head from './part/head';
import ScrollEvent from 'react-onscroll';

const urlOnDataLoad = "http://localhost:8000/main/contracts/";

class ListOfContract extends Component {
    constructor() {
        super();
        this.state = {
            offset: 0,
            limit: 10,
            urlOnFind: urlOnDataLoad + 'like/',
            urlOnDataLoad: urlOnDataLoad,
        };
        this.handleScrollCallback = this.handleScrollCallback.bind(this);
        this.findContracts = this.findContracts.bind(this);
    }

    componentDidMount() {
        if(this.props.params.teamId != undefined){
            this.state.urlOnDataLoad =  urlOnDataLoad + 'team/' + this.props.params.teamId + '/';
            this.state.urlOnFind = urlOnDataLoad + 'team/like/' + this.props.params.teamId + '/';
        }
        else if (this.props.params.countryId != undefined){
            console.log('lol');
            this.state.urlOnDataLoad =  urlOnDataLoad + 'country/' + this.props.params.countryId + '/';
            this.state.urlOnFind = urlOnDataLoad + 'country/like/' + this.props.params.countryId + '/';
        }
        this.addContracts();
    };

    handleScrollCallback() {
        const scroll_height = $(document).height();
        const scroll_position = $(window).height() + $(window).scrollTop();
        //console.log(scroll_height);
        //console.log(scroll_position);
        if (scroll_position === scroll_height) {
            if (this.findInput.value === "" || this.findInput.value === null) {
                this.addContracts();
            }
            else {
                this.findContracts();
            }
        }
    }

    getUserFavorite() {

    }

    inputChange() {
        this.state.offset = 0;
        this.props.onDeleteContracts();
        if (this.findInput.value === "" || this.findInput.value === null) {
            this.addContracts();
        }
        else {
            this.findContracts();
        }
    }

    addContracts() {
        $.ajax({
            url: (this.state.urlOnDataLoad + this.state.limit + '/' + this.state.offset),
            dataType: 'json',
            cache: false,
            success: function (data) {
                data.sort((contract1, contract2) => {
                    return contract2.reiting - contract1.reiting
                });
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
        $.ajax({
            url: (this.state.urlOnFind + this.state.limit + '/' + this.state.offset + '/' + this.findInput.value),
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
                console.error(this.state.urlOnFind, status, err.toString());
            }
        });
    }

    setLimit(event) {
        this.state.limit = event.target.value;
    }

    render() {
        return (
            <div className="ListOfContract">
                <ScrollEvent handleScrollCallback={this.handleScrollCallback}/>
                <Head/>
                {/*<div id="mobile-navbar" class="container hidden-lg hidden-md">*/}
                {/*<ul class="nav navbar-nav mobile-nav text-center">*/}
                {/*<li>*/}
                {/*<a href="/">Home</a>*/}
                {/*</li>*/}
                {/*<li><a href="/players">Players</a></li>*/}
                {/*<li><a href="/countries">Nations</a></li>*/}
                {/*<li><a href="/teams">Clubs</a></li>*/}
                {/*<li class="divider"></li>*/}
                {/*<li><a class="view-full" href="javascript:;">Switch to Desktop</a></li>*/}
                {/*<li><a href="">Login</a></li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                <div class="content-header">
                    <div class="content-header-left slash futhead">
                        <h1 class="player-list-header">
                            <small>FIFA 18 Database</small>

                            Top Players

                            <small>Best FUT 18 Players</small>
                        </h1>
                    </div>
                </div>
                <div class="content-table">
                    <ul class="list-group">
                        <li class="advansed-search padding-0">
                            <div class="row obscure padding-15">
                                <div class="col-md-10">
                                    <input class="filter form-control" type="text" placeholder="Filter By Name"
                                           ref={(input) => {
                                               this.findInput = input
                                           }}
                                           onChange={this.inputChange.bind(this)}/>
                                </div>
                            </div>
                        </li>
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
                            <li key={contract.id.toString()}>
                                <a class="player-item" href={'/player/' + contract.id}>
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
                                </a>
                            </li>
                        )}
                        <li>
                            <button class="more-button" onClick={this.addContracts.bind(this)}>More</button>
                        </li>
                    </ul>
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
