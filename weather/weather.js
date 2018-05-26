const request = require('request');


//Dark Sky API Key: 9c51307f7d7a432fe62532bbac995950
var getWeather = (lat, long, callback) => {
 request({
  url: `https://api.darksky.net/forecast/9c51307f7d7a432fe62532bbac995950/${lat},${long}`,
  json: true
  }, (error, response, body) => {
    if (error) {
    //  console.log('ERROR');
      callback('ERROR');
    } else if (response.statusCode === 400) {
    //    console.log('Unable to fetch weather.');
      callback('ERROR');
    } else if (response.statusCode === 200) {
    //    console.log(body.currently.temperature);
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}


module.exports.getWeather = getWeather;
