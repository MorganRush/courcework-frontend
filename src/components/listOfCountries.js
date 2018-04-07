import React, { Component } from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import './css/listOfCountries.css';

class ListOfCountries extends Component{
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.store);
        return (
            <div className="ListOfCountries">
                <ul>
                    <li>
                        <div class="county-item">
                            <span class="stream-col-80"></span>
                            <span class="stream-col-60">Name</span>
                        </div>
                    </li>
                    {this.props.store.countries.map((country) =>
                        <li>
                            <div class="country-item">
                                <a href="/" class="display-block padding-0">
                                    <Img class="country-image" src={country.refNations}/>
                                    <span class="country-info">
                                        <span class="country-name">{ country.name }</span>
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
)(ListOfCountries);
