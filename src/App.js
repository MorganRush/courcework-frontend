import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div className="App">
          <ul>
               {this.props.testStore.players.map((player) =>
                   <a href="/">
                       <li>
                           {player}
                       </li>
                   </a>
              )}
          </ul>
      </div>
    );
  }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(App);
