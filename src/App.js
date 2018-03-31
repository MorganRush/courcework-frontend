import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Img from 'react-image'

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div className="App">
          <ul>
               {this.props.testStore.contracts.map((contract, ) =>
                   <a href="/">
                       <div>
                           { contract.player.name } <br/>
                           reiting: { contract.player.reiting } <br/>
                           <Img src={ contract.player.refImage }/> <br/>
                           pac: { contract.player.pac } <br/>
                           sho: { contract.player.sho } <br/>
                           pas: { contract.player.pas } <br/>
                           dri: { contract.player.dri } <br/>
                           def: { contract.player.def } <br/>
                           phy: { contract.player.phy } <br/>
                           <Img src={ contract.team.refClubs }/> <br/>
                           <Img src={ contract.team.country.refNations }/> <br/>
                       </div>
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
