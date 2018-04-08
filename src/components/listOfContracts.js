import React, {Component} from 'react';
import Img from 'react-image';
import {connect} from 'react-redux';
import './css/listOfContracts.css';
import $ from "jquery";
import {Link} from 'react-router-dom'
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

    render() {
        console.log(this.props.store);
        return (
            <div className="ListOfContract">
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
                <ul class="list-group">
                    <li class="advansed-search padding-0">
                        <div class="row obscure padding-15">
                            <div class="col-md-10">
                                <input class="filter form-control" type="text" placeholder="Filter By Name" ref={(input) => {this.findInput = input}}
                                       onChange={this.findContracts.bind(this)}/>
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
                        </li>
                    )}
                    <li>
                        <button class="more-button" onClick={this.addContracts.bind(this)}>More</button>
                        <div>
                            Показывать по:
                        </div>
                        <div class="radios-as-buttons" onChange={this.setLimit.bind(this)}>
                            <div>
                                <input type="radio" value="10" name="gender" id="radio1"/>
                                <label for="radio1">10</label>
                            </div>
                            <div>
                                <input type="radio" value="20" name="gender" id="radio2"/>
                                <label for="radio2">20</label>
                            </div>
                            <div>
                                <input type="radio" value="30" name="gender" id="radio3"/>
                                <label for="radio3">30</label>
                            </div>
                            <div>
                                <input type="radio" value="40" name="gender" id="radio4"/>
                                <label for="radio4">40</label>
                            </div>
                            <div>
                                <input type="radio" value="50" name="gender" id="radio5"/>
                                <label for="radio5">50</label>
                            </div>
                        </div>
                    </li>
                </ul>
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
