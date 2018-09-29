import React, { Component } from 'react';

class RideDetail extends Component {



    render() {
        return (
            (this.props.apiData) &&
            <div className="rideItems">
                <div>Name: {this.props.apiData.name}</div>
                {(this.props.apiData.description && <div>Description: {this.props.apiData.description}</div> )}
                <div>Rating: {this.props.apiData.rating}</div>
            </div>
        )
    }
}

export default RideDetail