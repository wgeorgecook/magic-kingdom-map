import React, { Component } from 'react';
import {InfoWindow} from 'react-google-maps';
// import FourSquareInfo from './FourSquareInfo.js'

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
                    <div className="4squareInfo">{this.props.dataToDisplay.response.venues[0].id}</div>
                </div>
            </InfoWindow>
        )
    }
}

export default InfoWindowView;