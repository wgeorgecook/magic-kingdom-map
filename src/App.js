import React, { Component } from 'react';
import ListView from './ListView.js';
import MapView from './MapView.js';
import './App.css';

class App extends Component {
  data = require('./data.json');
  allMarkersLocation = this.data.rides.map( (ride) => ride.location )
  allMarkersData = this.data.rides.map( ride => ride )

  state = {
    updated: false,
    attractions: [],
    markersLocation: this.allMarkersLocation
  }

  newMarkers = (markerArray) => {
    console.log(markerArray)
    this.setState({markersLocation: markerArray})
  }

  render() {
    return (
      <div className="App">
        <ListView
          attractions={this.data}
          onNewMarkers={this.newMarkers}
        />

        <MapView
          defaultLocation={{lat:28.417664 , lng: -81.581215}}
          defaultZoom={15}
          defaultHeight={'400px'}
          defaultMarkers={{lat:28.417664 , lng: -81.581215}}
          markersLocation={this.state.markersLocation}
          markers={this.allMarkersData}
        />
      </div>
    );
  }
}

export default App;
