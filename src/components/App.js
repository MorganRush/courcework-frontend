import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
          лол
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
