import React, { Component } from 'react';
import LocationFilter from './LocationFilter.js';


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




    render() {
        return (
            <div id="list-view">

                <ul id='list-locations'>
                    { (this.state.filter !== "All") ?
                        this.rides.filter( (ride) => ride.category.includes(this.state.filter)).map((ride) =>
                            <li
                                key={ride.id}
                                className="list-item"
                                onClick={() => this.props.animate(ride.id)}
                            >
                                {ride.name}
                            </li>) :
                        this.rides.map((ride) =>
                            <li
                                key={ride.id}
                                className="list-item"
                                onClick={ () => this.props.animate(ride.id) }
                            >
                                {ride.name}
                            </li>)
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