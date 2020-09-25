const request = require("request");

const getWeather = (latitude, longitude, location, callback) => {
  const weatherUrl = `http://api.weatherstack.com/current?access_key=8f162ec35c0ded232b0d92a4394ed300&query=${longitude},${latitude}&units=m`;
  request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to Weather API!", {});
    } else if (response.body.error) {
      callback("Unable to access Weather!", {});
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
        location: location,
      });
    }
  });
};
module.exports = getWeather;
