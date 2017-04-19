module.exports = function (element, falseCase, exactly, done) {
  const nrOfElements = browser.elements(element).value;

  if (falseCase === true) {
    nrOfElements.should.have.lengthOf(0, 'Element with selector "' + element + '" should not exist on the page');
  } else if (exactly) {
    nrOfElements.should.have.lengthOf(exactly, 'Element with selector "' + element + '" should exist exactly ' + exactly + ' time(s)');
  } else {
    nrOfElements.should.have.length.of.at.least(1, 'Element with selector "' + element + '" should exist on the page');
  }
  done();
};
