var os = require('os');
var path = require('path');
var _ = require('lodash');

browser.addCommand("getScreencapPath", function (step) {
  var scenario = step.getScenario();
  var feature = scenario.getFeature();
  var browserName = browser.desiredCapabilities.browserName;

  var osName = formatPath([getOS(os.type()), os.release()]);
  var stepNumber = ("00" + browser.currentStep).slice(-2);
  var stepName = formatPath([stepNumber, step.getName()]);
  var featureName = formatPath(feature.getName());
  var scenarioName = formatPath(scenario.getName());

  return path.join(browser.options.screenshotPath, featureName, scenarioName, stepName, osName, browserName);
});


function formatPath(path) {

  if (_.isArray(path)) path = path.join(' ');

  return path
    .toLowerCase()
    .replace(/\//g, '')
    .replace(/"/g, '')
    .replace(/ /g, '-');
}

function getOS(type) {

  switch (type) {
    case 'Darwin':
      return 'OSX';
    case 'Windows_NT':
      return 'Windows';
  }

  return type;
}

