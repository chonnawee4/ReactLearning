var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  //Set Default Parameter
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is form a component'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates) {
    // Re render
    this.setState(updates);
  },
  render: function () {
    // Receive Parameter
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
