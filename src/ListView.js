import React, { Component } from 'react';
import LocationFilter from './LocationFilter.js';

class ListView extends Component {

    rides = this.props.attractions.rides

    state = {
        filter: "All"
    }

    newFilter = (filter) => {
        (filter !== "All") ? this.setState({filter}) : this.setState({filter: "All"})
    }

    render() {
        return (
            <div id="list-view">

                <ul id='list-locations'>
                    { (this.state.filter !== "All") ?
                        this.rides.filter( (ride) => ride.category === this.state.filter).map((ride,i) =>
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