import React, { Component } from 'react';
import ListView from './ListView.js';
import MapView from './MapView.js';
import './App.css';
import './blue-dot.png'

class App extends Component {
  data = require('./data.json');
  allMarkersLocation = this.data.rides.map( (ride) => ride.location )
  allMarkersData = this.data.rides.map( ride => ride )

  state = {
    attractions: this.allMarkersData,
    markersLocation: this.allMarkersLocation,
    clearInfoWindows: false
  }

  newMarkersLocations = (markerArray) => {
    this.setState({markersLocation: markerArray})
  }

  newMarkers = (attractions) => {
    this.setState(
        {attractions: attractions,
         clearInfoWindows: true})
    this.showMarkers()
  }

  showMarkers() {
    this.setState({clearInfoWindows: false})
  }

  animateMarker = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome to the Magic Kingdom!</h1>
        <ListView
          attractions={this.state.attractions}
          onNewMarkersLocations={this.newMarkersLocations}
          onNewMarkers={this.newMarkers}
          animate={this.animateMarker}
        />

        <MapView
          defaultLocation={{lat:28.418744, lng:-81.581203}}
          defaultZoom={16}
          defaultHeight={'400px'}
          defaultMarkers={{lat:28.417664 , lng: -81.581215}}
          markersLocation={this.state.markersLocation}
          markers={this.state.attractions}
          clearMarkers={this.state.clearInfoWindows}
        />
      </div>
    );
  }
}

export default App;
