var page = require('../pages/base.page');

module.exports = function () {
  this.Given(/^I am testing the "([^"]*)?" component$/, page.componentUnderTest);
  this.Given(/^I open the (url|site) "([^"]*)?"$/, page.open);
};