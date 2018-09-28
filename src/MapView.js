import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import InfoWindowView from './InfoWindowView.js';


class MapView extends Component {

    state = {
        isOpenIndex: null,
        loadedData: null
    }

    markers = this.props.markersLocation;

    toggleBox(index){
        this.setState({isOpenIndex: index})
    }

    nullState = () => {
        this.setState({isOpenIndex: null})
    }

    showData = (data) => {
        this.setState({loadedData: data})
        console.log(this.state.loadedData)
    }

    MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={this.props.defaultZoom}
            defaultCenter={this.props.defaultLocation}
            >
            {props.isMarkerShown && this.props.markersLocation.map( (position, i) =>
                <div key={i} className="markers-and-infobox">
                    <Marker
                        position={position}
                        onClick={() => this.toggleBox(i)}
                    />
                    {(this.state.isOpenIndex === i) &&
                       <InfoWindowView
                            location={position}
                            marker={this.props.markers[i]}
                            closeClick={this.nullState}
                            // onLoadApi={this.showData}
                            // dataToDisplay={this.state.loadedData}
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