import React, { Component } from 'react';
import ListView from './ListView.js';
import MapView from './MapView.js';
import './App.css';

class App extends Component {
  data = require('./data.json');
  allMarkersLocation = this.data.rides.map( (ride) => ride.location )
  allMarkersData = this.data.rides.map( ride => ride )

  state = {
    attractions: this.allMarkersData,
    markersLocation: this.allMarkersLocation
  }

  newMarkersLocations = (markerArray) => {
    // console.log(markerArray)
    this.setState({markersLocation: markerArray})
    //setTimeout(() => {console.log(this.state.markersLocation)}, 1000)
  }

  newMarkers = (attractions) => {
    this.setState({attractions})
    setTimeout(() => {console.log(this.state.attractions)}, 1000)
  }


  render() {
    return (
      <div className="App">
        <ListView
          attractions={this.state.attractions}
          onNewMarkersLocations={this.newMarkersLocations}
          onNewMarkers={this.newMarkers}
        />

        <MapView
          defaultLocation={{lat:28.417664 , lng: -81.581215}}
          defaultZoom={15}
          defaultHeight={'400px'}
          defaultMarkers={{lat:28.417664 , lng: -81.581215}}
          markersLocation={this.state.markersLocation}
          markers={this.state.attractions}
        />
      </div>
    );
  }
}

export default App;
