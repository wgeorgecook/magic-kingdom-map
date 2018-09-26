import React, { Component } from 'react';
import InfoBox from 'react-google-maps'


// InfoWindows on markers
class MarkerView extends Component {
    render() {
        return (
            <InfoBox
                defaultPosition={this.props.location}
                defaultVisible={false}
            />
        )
    }
}

export default MarkerView;