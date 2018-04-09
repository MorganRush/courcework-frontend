import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import './css/listOfCountries.css';
import Head from './part/head';

class Team extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log(this.props.params.id);
    }

    render() {
        return (
            <div>
                <Head/>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state.player
    }),
    dispatch => ({})
)(Team);
