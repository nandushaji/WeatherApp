const request = require("request");

const geoCode = (loc, callback) => {
  loc === "" ? (loc = undefined) : (loc = loc);
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=pk.eyJ1IjoibmFuZHVzaGFqaSIsImEiOiJja2ZjOHVuYWIxNjI2MndvNWFoMGltaDRzIn0.jdVx8LrEUnJFf2S8zIW1sQ&limit=1`;
  request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to GeoCode API !", {});
    } else if (response.body.features.length == 0) {
      callback("Unable to Identify location provided!", {});
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};
module.exports = geoCode;
