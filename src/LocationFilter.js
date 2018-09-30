import React, { Component } from 'react';

class LocationFilter extends Component {


    selectNew = (e) => {
        this.props.onNewFilter(e.target.value)
    }


    render() {

        return (

            <select id='filter' onChange={this.selectNew}>
                <option value="All" tabIndex="1">All</option>
                <option value="Thrill" tabIndex="1">Thrill</option>
                <option value="Slow" tabIndex="1">Slow</option>
                <option value="Show" tabIndex="1">Show</option>
                <option value="Coaster" tabIndex="1">Coaster</option>
                <option value="Dark" tabIndex="1">Dark</option>
            </select>

        )
    }
}

export default LocationFilter;