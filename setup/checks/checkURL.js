module.exports = function (falseCase, expectedUrl, done) {
  const currentUrl = browser.url().value;

  if (falseCase) {
    currentUrl.should.not.equal(expectedUrl, 'expected url not to be "' + currentUrl + '"');
  } else {
    currentUrl.should.equal(expectedUrl, 'expected url to be "' + expectedUrl + '" but found ' + '"' + currentUrl + '"');
  }

  done();
};
