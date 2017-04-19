var page = require('./search.page');

module.exports = function () {
  this.Given(/^I am on the homepage$/, page.open);
};