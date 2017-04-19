module.exports = function (selector, done) {
  browser.options.componentSelector = selector;
  done()
};

