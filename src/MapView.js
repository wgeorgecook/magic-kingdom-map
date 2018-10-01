import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import InfoWindowView from './InfoWindowView.js';
import * as FourAPI from './FourSquareAPI.js'


class MapView extends Component {

    state = {
        isOpenIndex: null,
        rating: null,
    }

    markers = this.props.markers;

    gm_authFailure(){
        window.alert("Could not authenticate to Google Maps")
    }


    loadData(marker){

        this.nullState()

        FourAPI.getID(marker.location, marker)
            .then(id => FourAPI.getDetails(id)
            .then(attraction => this.setState(
                {
                    rating: attraction.rating
                }
                ))
            )

        this.toggleBox(marker.id)
    }


    toggleBox(index) {
        this.setState({isOpenIndex: index})
    }

    nullState = () => {
        this.setState(
            {
                isOpenIndex: null,
                rating: false,
                blueMarker: null
            }
        )
    }

    componentDidMount(){
        window.gm_authFailure = this.gm_authFailure;
    }


    MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={this.props.defaultZoom}
            defaultCenter={this.props.defaultLocation}
            onError={(error) => window.alert(`Google maps could not be loaded. Please try again: ${error}`)}
            >
            {props.isMarkerShown && this.props.markers.map( (marker, i) =>
                <div key={i} className="markers-and-infobox">
                    <Marker
                        containerProps={{tabIndex: 0}}
                        position={marker.location}
                        onClick={() => this.loadData(marker)}
                        icon={(this.props.blueMarker === marker.id) ? this.props.blueIcon : undefined}
                    />
                    {(this.state.isOpenIndex === marker.id) && (this.props.clearMarkers !== true) &&
                       <InfoWindowView
                            location={marker.location}
                            marker={marker}
                            closeClick={this.nullState}
                            rating={this.state.rating}
                        />
                    }

                </div>
            )}
        </GoogleMap>
  ))


    render() {

        return (
            <div id="map">
            <this.MyMapComponent
                isMarkerShown={true}
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