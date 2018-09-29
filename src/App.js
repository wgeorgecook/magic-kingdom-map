import React, { Component } from 'react';
import ListView from './ListView.js';
import MapView from './MapView.js';
import RideDetail from './RideDetail.js'
import * as FourAPI from './FourSquareAPI.js';
import './App.css';
import './blue-dot.png'

class App extends Component {
  data = require('./data.json');
  allMarkersData = this.data.rides.map( ride => ride )
  blueIcon = require('./blue-dot.png')

  state = {
    attractions: this.allMarkersData,
    clearInfoWindows: false,
    blueMarker: null,
    rideDetail: null
  }

  getFourInfo(marker) {
    FourAPI.getID(marker.location, marker).then(id => FourAPI.getDetails(id).then(attraction => attraction))
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
          getInfo={this.getFourInfo}
        />

        <ListView
          attractions={this.state.attractions}
          onNewMarkers={this.newMarkers}
          animate={this.animateMarker}
        />

        <RideDetail
          attractions={this.state.attractions}
          selected={this.state.blueMarker}
        />
      </div>
    );
  }
}

export default App;
