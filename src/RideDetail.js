import React, { Component } from 'react';

class RideDetail extends Component {

    render() {
        return (
            this.props.attractions.filter( (ride) => ride.id === this.props.selected).map( ride =>
                <div key={ride.id} className="rideDetail">
                    <div className="rideName">Attraction: {ride.name}</div>
                    <div className="rideWait">Average Wait: {ride.averageWait}</div>
                    <div className="rideHeight">Minimum Height: {ride.minimumHeight}</div>
                </div>
                )
        )
    }
}

export default RideDetail