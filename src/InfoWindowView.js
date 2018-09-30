import React, { Component } from 'react';
import {InfoWindow} from 'react-google-maps';


// InfoWindows on markers
class InfoWindowView extends Component {



    render() {

        return (
            <InfoWindow
                role="application"
                tabindex="0"
                defaultPosition={this.props.location}
                onCloseClick={this.props.closeClick}
            >
                <div className="thewindow">
                    <div>Attraction: {this.props.marker.name}</div>
                    {(this.props.rating) ?
                        <div className="4squareInfo">Rating: {this.props.rating}</div> :
                        <div className="4squareInfo">Loading rating...</div>
                    }

                </div>
            </InfoWindow>
        )
    }
}

export default InfoWindowView;