import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ListOfContracts from './components/listOfContracts';

class App extends Component {
  render() {
    console.log(this.props.store);
    return (
      <div className="App">
          <ListOfContracts/>
      </div>
    );
  }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({}),
)(App);
