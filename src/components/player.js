import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import './css/listOfCountries.css';

class Player extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log(this.props.params.id);
    }

    render() {
        return (
            <div>
                <h1>лол</h1>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state.player
    }),
    dispatch => ({})
)(Player);
