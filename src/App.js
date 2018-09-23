import React, { Component } from 'react';
import ListView from './ListView.js';
import LocationFilter from './LocationFilter.js';
import MapView from './MapView.js';
import MarkerView from './MarkerView.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListView />
        <LocationFilter />
        <MapView />
        <MarkerView />
      </div>
    );
  }
}

export default App;
