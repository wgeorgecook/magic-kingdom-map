import React, { Component } from 'react';

class LocationFilter extends Component {

    rides = this.props.attractions.rides

    selectNew(e){
        console.log(e.target.value); // Name of the new attraction
    }

    render() {

        return (

            <select id='filter' onChange={this.selectNew}>
                {this.rides.map((ride,i) =>
                    <option
                        key={i}
                        value={ride.name}
                    > {ride.name} </option>
                )}
            </select>

        )
    }
}

export default LocationFilter;