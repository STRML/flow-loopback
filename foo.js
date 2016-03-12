// @flow

var User = require('./app').User;

// Extends User with more methods
require('./bar');

var ralph = User.new('Ralph'); // defined in app, should be no error'
var errors = User.nonexistent('Ralph'); // doesn't exist, error
var deleted:boolean = ralph.delete(); // defined in bar, error
