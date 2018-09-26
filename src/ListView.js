import React, { Component } from 'react';

class ListView extends Component {

    rides = this.props.attractions.rides

    render() {
        return (
            <ul id='list-view'>
                {this.rides.map((ride,i) =>
                    <li key={i}> {ride.name} </li>
                )}
            </ul>
        )
    }
}

export default ListView;