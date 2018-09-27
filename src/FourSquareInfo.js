import React, { Component } from 'react';


class FourSquareInfo extends Component {

    state = {
        clientID: "I2XVEDDAX1EILNB2YJ105QP3QGJDSSP4BRX3TMX2YF4S1MBW",
        clientSecret: "WMJMPMLWRU4UNA1SBTLQ0KGRFTHZS44PTT5LMPPW5NSVILQX"

    }

    getDetails(location) {
        console.log(this.props.marker)
        //console.log(`https://api.foursquare.com/v2/venues/search?ll=${location.lat},${location.lng}&client_id=${this.state.clientID}&client_secret=${this.state.clientSecret}&v=20180927`)
        fetch(`https://api.foursquare.com/v2/venues/search?ll=${location.lat},${location.lng}&client_id=${this.state.clientID}&client_secret=${this.state.clientSecret}&v=20180927`)
            .then( (response) => response.json() )
            .then( (jsonResponse) => console.log( jsonResponse ) )
            .catch( (err) => console.log(err) )
    }

    render() {
        return (
            <div onClick={() => this.getDetails(this.props.location)}>FourSquareInfo info!</div>
        )
    }
}

export default FourSquareInfo