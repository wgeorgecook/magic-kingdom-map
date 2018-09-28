import React, { Component } from 'react';
import {InfoWindow} from 'react-google-maps';


// InfoWindows on markers
class InfoWindowView extends Component {



    render() {

        return (
            <InfoWindow
                defaultPosition={this.props.location}
                onCloseClick={this.props.closeClick}
            >
                <div className="thewindow">
                    <div>{this.props.marker.name}</div>
                    <div className="4squareInfo">{this.props.rating}</div>
                </div>
            </InfoWindow>
        )
    }
}

export default InfoWindowView;