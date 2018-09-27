import React, { Component } from 'react';
import {InfoWindow} from 'react-google-maps';
import FourSquareInfo from './FourSquareInfo.js'

// InfoWindows on markers
class InfoWindowView extends Component {
    render() {
        return (
            <InfoWindow
                defaultPosition={this.props.location}
                onCloseClick={this.props.closeClick}
            >
                <FourSquareInfo
                    location={this.props.location}
                />
            </InfoWindow>
        )
    }
}

export default InfoWindowView;