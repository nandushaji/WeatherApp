const router = require("express").Router();
const geoCode = require("./GeoCode");
const getWeather = require("./Weather");
const weather = require("../weatherapp/weather");
router.get("/", (req, res) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  geoCode(req.query.location, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error: error });
    }
    getWeather(latitude, longitude, location, (error, weather) => {
      if (error) {
        return res.send({ error: error });
      }
      res.send(weather);
    });
  });
});
module.exports = router;
