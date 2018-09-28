import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import InfoWindowView from './InfoWindowView.js';
import * as FourAPI from './FourSquareAPI.js'


class MapView extends Component {

    state = {
        isOpenIndex: null,
        rating: null
    }

    markers = this.props.markersLocation;

    loadData(position, marker, index){
        this.nullState()
        FourAPI.getID(position, marker)
            .then( (id) =>
                FourAPI.getDetails(id)
                .then( (rating) => this.setState( {rating} ) )
                // .then(console.log(this))
                )
        this.toggleBox(index)
    }


    toggleBox(index) {
        this.setState({isOpenIndex: index})
    }

    nullState = () => {
        this.setState({isOpenIndex: null})
        this.setState({rating: false})
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
                        onClick={() => this.loadData(position, this.props.markers[i], i)}
                    />
                    {(this.state.isOpenIndex === i) &&
                       <InfoWindowView
                            location={position}
                            marker={this.props.markers[i]}
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