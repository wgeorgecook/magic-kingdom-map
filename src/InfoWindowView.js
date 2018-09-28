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
                    <div className="4squareInfo">{this.props.dataToDisplay}</div>
                </div>
                { /*
                <FourSquareInfo
                    location={this.props.location}
                    marker={this.props.marker}
                    onLoadDetails={this.props.onLoadApi}
                    dataToDisplay={this.props.dataToDisplay}
                />
                */
               }
            </InfoWindow>
        )
    }
}

export default InfoWindowView;