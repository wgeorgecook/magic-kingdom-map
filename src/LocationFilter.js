import React, { Component } from 'react';

class LocationFilter extends Component {


    selectNew = (e) => {
        this.props.onNewFilter(e.target.value)
    }


    render() {

        return (

            <select id='filter' onChange={this.selectNew}>
                <option value="All" tabindex="1">All</option>
                <option value="Thrill" tabindex="1">Thrill</option>
                <option value="Slow" tabindex="1">Slow</option>
                <option value="Show" tabindex="1">Show</option>
                <option value="Coaster" tabindex="1">Coaster</option>
                <option value="Dark" tabindex="1">Dark</option>
            </select>

        )
    }
}

export default LocationFilter;