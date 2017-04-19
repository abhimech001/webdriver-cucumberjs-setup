module.exports = function (type, page, done) {
  var url = (type === 'url') ? page : browser.options.baseUrl + page;
  browser.url(url);
  return done()
};



