

const tokens = {
    clientID: "I2XVEDDAX1EILNB2YJ105QP3QGJDSSP4BRX3TMX2YF4S1MBW",
    clientSecret: "WMJMPMLWRU4UNA1SBTLQ0KGRFTHZS44PTT5LMPPW5NSVILQX",
};


export const getID = (location, marker) =>
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${location.lat},${location.lng}&name=${marker.name}&client_id=${tokens.clientID}&client_secret=${tokens.clientSecret}&v=20180927&intent=match`)
        .then( (response) => response.json() )
        .then( (jsonResponse) => (jsonResponse.response.venues[0].id) )
        .catch( (err) => console.log(err) )

export const getDetails = (id) =>
    fetch(`https://api.foursquare.com/v2/venues/${id}?&client_id=${tokens.clientID}&client_secret=${tokens.clientSecret}&v=20180927`)
        .then( (response) => response.json() )
        .then( (jsonResponse) => (jsonResponse.response.venue.rating))
        .catch( (err) => "Cannont find rating")