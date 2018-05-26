//const request = require('request');

// 1301 lombard street
const axios = require('axios');
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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  console.log(response);
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var long = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/9c51307f7d7a432fe62532bbac995950/${lat},${long}`;

  return axios.get(weatherUrl); //Returns another promise.
  console.log(response.data);
}).then((response) => {
  var temp = response.data.currently.temperature;
  var apparentTemp = response.data.currently.apparentTemperature;

  console.log(`${temp}, ${apparentTemp}`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {

  } else {
    console.log(e.message); //Returns 'Unable to find address'
  }
  console.log(e);
});
