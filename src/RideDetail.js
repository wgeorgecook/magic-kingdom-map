import React, { Component } from 'react';

class RideDetail extends Component {



    render() {
        return (
            (this.props.apiData) &&
            <div className="rideItems">
                <img
                    alt={`${this.props.apiData.name}`}
                    src={`${this.props.apiData.photos.groups[1].items[1].prefix}cap300${this.props.apiData.photos.groups[1].items[1].suffix}`}
                />
                <div>Name: {this.props.apiData.name}</div>
                {(this.props.apiData.description && <div>Description: {this.props.apiData.description}</div> )}
                <div>Rating: {this.props.apiData.rating}</div>
            </div>
        )
    }
}

export default RideDetail