import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import WTMap from './components/WTMap'

class App extends Component {
  
  render () {
    return (
      <main>
        <div id="map">
          <WTMap />         
        </div>
      </main>  
    )
  }
}
export default App