var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Jen';

ReactDOM.render(
  //1.Piece of JSX, 2.App Element
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
