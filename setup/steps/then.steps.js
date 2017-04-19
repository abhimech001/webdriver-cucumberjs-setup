var page = require('../pages/base.page');

module.exports = function () {
  this.Then(/^I expect that the title is( not)* "([^"]*)?"$/, page.checkTitle);
  this.Then(/^I expect that the url is( not)* "([^"]*)?"$/, page.checkURL);
};