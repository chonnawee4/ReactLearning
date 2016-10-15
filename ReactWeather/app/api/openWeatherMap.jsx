var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&APPID=b85dd0cb11ed84bb5547ed5bf7f8b043&units=imperial';

module.exports = {
   getTemp: function(location) {
      var encodeLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

      return axios.get(requestUrl).then(function (res) {
         if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
         } else {
            return res.data.main.temp;
         }
      }, function(res) {
         if (res.response) {
            throw new Error(res.response.data.message);
         } else {
            throw new Error(res.data.message);
         }
      });
   }
}
