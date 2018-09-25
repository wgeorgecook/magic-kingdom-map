import React, { Component } from 'react';

import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class MapView extends Component {

    MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
        defaultZoom={this.props.defaultZoom}
        defaultCenter={this.props.defaultLocation}
        >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
  ))


    render() {

        return (
            <div id="map">
            <this.MyMapComponent
                isMarkerShown={false}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABZJIOmyU36I209r096vcD_WY39JMxRPQ"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: this.props.defaultHeight }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            </div>
        )
    }
}

export default MapView;