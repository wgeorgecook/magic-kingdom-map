import React, { Component } from 'react';
import ListView from './ListView.js';
import MapView from './MapView.js';
import RideDetail from './RideDetail.js'
import './App.css';
import './blue-dot.png'

class App extends Component {
  data = require('./data.json');
  allMarkersData = this.data.rides.map( ride => ride )
  blueIcon = require('./blue-dot.png')

  state = {
    attractions: this.allMarkersData,
    clearInfoWindows: false,
    blueMarker: null
  }

  newMarkers = (attractions) => {
    this.setState(
        {attractions: attractions})
  }


  animateMarker = (id) => {
    this.setState({blueMarker: id})
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome to the Magic Kingdom!</h1>

        <MapView
          defaultLocation={{lat:28.419529, lng:-81.581192}}
          defaultZoom={16}
          defaultHeight={'250px'}
          defaultMarkers={{lat:28.417664 , lng: -81.581215}}
          markers={this.state.attractions}
          blueIcon={this.blueIcon}
          blueMarker={this.state.blueMarker}
        />

        <ListView
          attractions={this.state.attractions}
          onNewMarkers={this.newMarkers}
          animate={this.animateMarker}
        />

        <RideDetail />
      </div>
    );
  }
}

export default App;
