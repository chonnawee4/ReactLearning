var React = require('react');

var WeatherMessage = ({location, temp}) => {
   return (
      <h3 className="text-center">It's is {temp} in {location}.</h3>
   );
};

module.exports = WeatherMessage;
