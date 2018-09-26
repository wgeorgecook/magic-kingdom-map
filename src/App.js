import React, { Component } from 'react';
import ListView from './ListView.js';
import MapView from './MapView.js';
import './App.css';

class App extends Component {
  data = require('./data.json');
  allMarkers = this.data.rides.map( (ride) => ride.location )

  state = {
    updated: false,
    attractions: [],
    markers: this.allMarkers
  }

  newMarkers = (markerArray) => {
    console.log(markerArray)
    this.setState({markers: markerArray})
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
          markers={this.state.markers}
        />
      </div>
    );
  }
}

export default App;
