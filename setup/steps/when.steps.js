var page = require('../pages/base.page');

module.exports = function () {
  this.When(/^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/, page.setInputField);
  this.When(/^I submit the form "([^"]*)?"$/, page.submitForm);
};