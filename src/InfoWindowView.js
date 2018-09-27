import React, { Component } from 'react';
import {InfoWindow} from 'react-google-maps';


// InfoWindows on markers
class InfoWindowView extends Component {
    render() {
        return (
            <InfoWindow defaultPosition={this.props.location}>
                <div>Hi</div>
            </InfoWindow>
        )
    }
}

export default InfoWindowView;