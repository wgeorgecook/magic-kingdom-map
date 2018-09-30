import React, { Component } from 'react';

class RideDetail extends Component {



    render() {
        return (
            (this.props.apiData) ?
            <div className="rideItems">
                <img className="attributionImage" alt="powered by Foursquare" src="./powered-by-foursquare-blue.png" />
                <img
                    className="rideImg"
                    alt={`Snapshot of ${this.props.apiData.name} taken by Foursquare user ${this.props.apiData.photos.groups[1].items[0].user.firstName} ${this.props.apiData.photos.groups[1].items[0].user.lastName}`}
                    src={`${this.props.apiData.photos.groups[1].items[0].prefix}cap300${this.props.apiData.photos.groups[1].items[0].suffix}`}
                />
                <div className="rideName">Name: {this.props.apiData.name}</div>
                {(this.props.apiData.description && <div className="rideDesc">Description: {this.props.apiData.description}</div> )}
                <div className="rideRating">Rating: {this.props.apiData.rating}</div>
                <div className="attribution">See more about {this.props.apiData.name} on <a href={`http://foursquare.com/v/${this.props.apiData.id}?ref=I2XVEDDAX1EILNB2YJ105QP3QGJDSSP4BRX3TMX2YF4S1MBW`}>Foursquare!</a></div>
            </div> :
            <div className="noRide">Select a ride to see more!</div>
        )
    }
}

export default RideDetail