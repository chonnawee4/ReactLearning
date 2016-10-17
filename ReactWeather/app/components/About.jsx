var React = require('react');

// Work only render
var About = (props) => {
   return (
      <div>
         <h1 className="text-center page-title">About</h1>
         <p>This is a weather application build on React.</p>
         <p>Here are some tools I used:</p>
         <ul>
            <li>
               <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework I used.
            </li>
            <li>
               <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map API for search weather by ciy name.
            </li>
         </ul>

      </div>
   );
};

module.exports = About;
