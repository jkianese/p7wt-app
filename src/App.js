import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import WTMap from './components/WTMap'

class App extends Component {
  
  render () {

    return (
      <div>
        {/*<h1 className="heading"> Pittsburgh, PA </h1>*/}
        <WTMap  />
      </div>
    );
  }
}
export default App