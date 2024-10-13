const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.positionstack.com/v1/forward?access_key=7c72e525839f7d95c5f515c9e078d32d&query=" +
    encodeURIComponent(address) +
    "&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location service!", undefined);
    } else if (body.error || body.data.length < 1) {
      callback("No location  of interest found!", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
