import React, { Component } from 'react';
import LocationFilter from './LocationFilter.js';

class ListView extends Component {

    rides = this.props.attractions.rides

    state = {
        filter: "All"
    }

    newFilter = (filter) => {
        (filter !== "All") ? this.setState({filter}) : this.setState({filter: "All"});
        this.newMarkers(filter)
    }

    newMarkers = (category) => {
        let markers;
        (category === "All") ?
            markers = this.rides.map( (ride) => ride.location ) : // pass all markers or filtered markers
            markers = this.rides.filter( (ride) => ride.category.includes(category)).map( (ride) => ride.location )
        this.props.onNewMarkers(markers)
    }

    render() {
        return (
            <div id="list-view">

                <ul id='list-locations'>
                    { (this.state.filter !== "All") ?
                        this.rides.filter( (ride) => ride.category.includes(this.state.filter)).map((ride,i) =>
                            <li key={i}> {ride.name} </li>) :
                        this.rides.map((ride,i) =>
                            <li key={i}> {ride.name} </li>)
                    }
                </ul>

                <LocationFilter
                    attractions={this.props.attractions}
                    onNewFilter={this.newFilter}
                />

            </div>
        )
    }
}

export default ListView;