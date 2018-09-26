import React, { Component } from 'react';
import LocationFilter from './LocationFilter.js';

class ListView extends Component {

    rides = this.props.attractions.rides

    state = {
        filter: "All"
    }

    newFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        return (
            <div id="list-view">

                <ul id='list-locations'>
                    {this.rides.filter( (ride) => ride.category === this.state.filter).map((ride,i) =>
                        <li key={i}> {ride.name} </li>
                    )}
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