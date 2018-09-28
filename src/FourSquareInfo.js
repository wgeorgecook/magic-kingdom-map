import React, { Component } from 'react';


class FourSquareInfo extends Component {

    state = {
        clientID: "I2XVEDDAX1EILNB2YJ105QP3QGJDSSP4BRX3TMX2YF4S1MBW",
        clientSecret: "WMJMPMLWRU4UNA1SBTLQ0KGRFTHZS44PTT5LMPPW5NSVILQX",
        currentSearch: false
    }

    thisSearch;

    getDetails(location, marker) {
        // console.log(this.props.marker)
        // console.log(`https://api.foursquare.com/v2/venues/search?ll=${location.lat},${location.lng}&name=${marker.name}&client_id=${this.state.clientID}&client_secret=${this.state.clientSecret}&v=20180927&intent=match`)
        fetch(`https://api.foursquare.com/v2/venues/search?ll=${location.lat},${location.lng}&name=${marker.name}&client_id=${this.state.clientID}&client_secret=${this.state.clientSecret}&v=20180927&intent=match`)
            .then( (response) => response.json() )
            .then( (jsonResponse) => (this.setState( {currentSearch: jsonResponse} )) )
            .then(this.props.onLoadDetails(this.state.currentSearch))
            // .then(console.log(this.state.currentSearch))
            .catch( (err) => console.log(err) )

    }

    render() {
        return (
            <div className="thewindow">
                <div onClick={() => this.getDetails(this.props.location, this.props.marker)}>{this.props.marker.name}</div>
                <div className="4squareInfo">{this.props.dataToDisplay}</div>
            </div>
        )
    }
}

export default FourSquareInfo