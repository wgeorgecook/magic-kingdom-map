

const tokens = {
    clientID: "I2XVEDDAX1EILNB2YJ105QP3QGJDSSP4BRX3TMX2YF4S1MBW",
    clientSecret: "WMJMPMLWRU4UNA1SBTLQ0KGRFTHZS44PTT5LMPPW5NSVILQX",
};

let searchResults;

export const getDetails = (location, marker) => {
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${location.lat},${location.lng}&name=${marker.name}&client_id=${tokens.clientID}&client_secret=${tokens.clientSecret}&v=20180927&intent=match`)
        .then( (response) => response.json() )
        .then( (jsonResponse) => (searchResults = jsonResponse) )
        .catch( (err) => console.log(err) )
}

