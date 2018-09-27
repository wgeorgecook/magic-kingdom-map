import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import InfoWindowView from './InfoWindowView.js';


class MapView extends Component {

    state = {
        isOpenIndex: null
    }

    markers = this.props.markers;

    toggleBox(index){
        this.setState({isOpenIndex: index})
    }

    clearState = () => {
        this.setState({isOpenIndex: null})
        console.log(this.state.isOpenIndex)
    }

    MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={this.props.defaultZoom}
            defaultCenter={this.props.defaultLocation}
            >
            {props.isMarkerShown && this.props.markers.map( (position, i) =>
                <div key={i} className="markers-and-infobox">
                    <Marker
                        position={position}
                        onClick={() => this.toggleBox(i)}
                    />
                    {(this.state.isOpenIndex === i) &&
                       <InfoWindowView
                            location={position}
                            onCloseClick={this.clearState}
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