require('bootstrap.css');
require('./styles/main.css');

var React = require('react');
var App = require('./components/app');

React.render(<App />, document.getElementById('app-container'));