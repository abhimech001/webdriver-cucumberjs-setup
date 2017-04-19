var _ = require('lodash');
var reqDir = require('require-dir');
var actions = reqDir('../actions', {recurse: true});
var checks = reqDir('../checks', {recurse: true});

module.exports = _.merge({}, actions, checks);
