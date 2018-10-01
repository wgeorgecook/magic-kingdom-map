import React, { Component } from 'react';
import LocationFilter from './LocationFilter.js';
import RideDetail from './RideDetail.js';
import * as FourAPI from './FourSquareAPI.js';


class ListView extends Component {

    rides = this.props.attractions

    state = {
        filter: "All"
    }

    newFilter = (filter) => {
        (filter !== "All") ? this.setState({filter}) : this.setState({filter: "All"});
        this.newMarkers(filter)
    }

    newMarkers = (category) => {
        let markers;
        if (category === "All") {
            markers = this.rides // pass all markers or filtered markers
        } else {
            markers = this.rides.filter( (ride) => ride.category.includes(category)).map( (ride) => ride)
        }

        this.props.onNewMarkers(markers)
    }

    loadData = (marker) => {
        FourAPI.getID(marker.location, marker)
        .then(id => FourAPI.getDetails(id)
        .then(attraction => this.setState(
            {
                rating: attraction.rating
            }
            ))
        )
    }


    render() {
        return (
            <div id="list-view">

                <div id='list-locations'>
                    { (this.state.filter !== "All") ?
                        this.rides.filter( (ride) => ride.category.includes(this.state.filter)).map((ride) =>
                            <button
                                key={ride.id}
                                className="list-item"
                                onClick={() => this.props.animate(ride)}
                            >
                                {ride.name}
                            </button>) :
                        this.rides.map((ride) =>
                            <button
                                key={ride.id}
                                className="list-item"
                                onClick={ () => this.props.animate(ride) }
                            >
                                {ride.name}
                            </button>)
                    }
                </div>

                <LocationFilter
                    role="listbox"
                    attractions={this.props.attractions}
                    onNewFilter={this.newFilter}
                />

                <RideDetail
                    attractions={this.props.attractions}
                    selectedID={this.props.blueMarker}
                    getInfo={this.loadData}
                    apiData={this.props.apiData}
                />

            </div>
        )
    }
}

export default ListView;