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
          defaultLocation={{lat:28.417664 , lng: -81.581215}}
          defaultZoom={15}
          defaultHeight={'400px'}
        />
        <MarkerView />
      </div>
    );
  }
}

export default App;
