//const request = require('request');

// 1301 lombard street
const yargs = require('yargs');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

const geocode = require('./geocode/geocode'); //or geocode.js
const weather = require('./weather/weather');

// console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  console.log(results);
  if (errorMessage) {
    console.log('ERROR MESSAGE');
  } else {
    console.log(JSON.stringify(results, undefined, 2));
    // 2 is the number of spaces for pretty printing.
    // undefined - replacer function to alter the behaviour of the stringification. (Selectiong/filtering the properties of value object to be included in the JSON string. )
    console.log(results.address);

    weather.getWeather(results.lattitude,results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
          console.log(JSON.stringify(weatherResults, undefined, 2));
          console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});


//weather.getWeather(42.3601,-71.0589, (errorMessage, weatherResults) => {
//  if (errorMessage) {
//    console.log(errorMessage);
//  } else {
//    console.log(JSON.stringify(weatherResults, undefined, 2));
//  }
//});
//console.log(argv);

//Refer the API documentation to use it. First, try it from the browser and frame your request from the javascript accordingly.
//Similarly decodeURIComponent.
//Print error, response, body and see how it is.
//request({
//  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`,
//  json: true //to get a json object
//}, (error, response, body) => {
  //Machine errors (connectivity) or errors coming from the server.
  //Try all failure scenarios with the APIs in the browser and handle them in code.
//  if (error) {
//    console.log('Unable to connect to google server.');
//  }
//  else if (body.status === 'ZERO_RESULTS') {//Go to browser. Try giving an invalid input to the API and what JSON is returned and code accordingly.
//    console.log('Unable to find the address.');
//  }
//  else if (body.status === 'OK') {
    //console.log(body);
    //console.log(JSON.stringify(body, undefined, 2));
    //console.log(JSON.stringify(response, undefined,2));
//    console.log(`Address: ${body.results[0].formatted_address}`);
//    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
//    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//  }
//});


//Dark Sky API Key: 9c51307f7d7a432fe62532bbac995950

// request({
//  url: 'https://api.darksky.net/forecast/9c51307f7d7a432fe62532bbac995950/42.3601,-71.0589',
//  json: true
//}, (error, response, body) => {
//  if (error) {
//    console.log('ERROR');
//  } else if (response.statusCode === 400) {
      //console.log('Unable to fetch weather.');
//  } else if (response.statusCode === 200) {
//    console.log(body.currently.temperature);
//  }
//});
