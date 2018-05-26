var request = require('request');

var geocodeAddress = (address, callback) => {
  //Refer the API documentation to use it. First, try it from the browser and frame your request from the javascript accordingly.
  //Similarly decodeURIComponent.
  //Print error, response, body and see how it is.
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true //to get a json object
  }, (error, response, body) => {
    //Machine errors (connectivity) or errors coming from the server.
    //Try all failure scenarios with the APIs in the browser and handle them in code.
    if (error) {
//      console.log('Unable to connect to google server.');
      callback('Unable to connect to the server.')
    }
    else if (body.status === 'ZERO_RESULTS') {//Go to browser. Try giving an invalid input to the API and what JSON is returned and code accordingly.
  //    console.log('Unable to find the address.');
  // https://maps.googleapis.com/maps/api/geocode/json?address='
      callback('Unable to find the address.');
    }
    else if (body.status === 'OK') {
      //console.log(body);
      //console.log(JSON.stringify(body, undefined, 2));
      //console.log(JSON.stringify(response, undefined,2));
      callback(undefined, {
        address: body.results[0].formatted_address,
        lattitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
//      console.log(`Address: ${body.results[0].formatted_address}`);
//      console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
//      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });
}

module.exports = {
  geocodeAddress
}
