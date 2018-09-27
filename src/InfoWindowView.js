import React, { Component } from 'react';
import {InfoWindow} from 'react-google-maps';
import YelpInfo from './YelpInfo.js'

// InfoWindows on markers
class InfoWindowView extends Component {
    render() {
        return (
            <InfoWindow
                defaultPosition={this.props.location}
                onCloseClick={this.props.closeClick}
            >
                <YelpInfo />
            </InfoWindow>
        )
    }
}

export default InfoWindowView;