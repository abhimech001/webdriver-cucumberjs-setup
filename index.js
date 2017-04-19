var Launcher = require('webdriverio').Launcher;

var args = require('yargs').argv;

var wdio = new Launcher(__dirname + '/wdio.conf.js', args);

wdio.run()
  .then(onFulfilled, onRejected);

function onFulfilled(code) {
  process.exit(code);
}

function onRejected (error) {
  console.error('Launcher failed to start the test', error.stacktrace);
  process.exit(1);
}
