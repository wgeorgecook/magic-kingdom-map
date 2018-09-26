import React, { Component } from 'react';

class LocationFilter extends Component {


    selectNew = (e) => {
        this.props.onNewFilter(e.target.value)
    }


    render() {

        return (

            <select id='filter' onChange={this.selectNew}>
                <option value="All">All</option>
                <option value="Thrill">Thrill</option>
                <option value="Slow">Slow</option>
            </select>

        )
    }
}

export default LocationFilter;