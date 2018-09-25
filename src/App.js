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
        <MapView
          defaultLocation={{lat:28.385233 , lng: -81.563873}}
        />
        {/*
        <MapView
          defaultLocation={{lat:28.385233 , lng: -81.563873}}
          defaultZoom={8}
        />
      */}

        <MarkerView />
      </div>
    );
  }
}

export default App;
