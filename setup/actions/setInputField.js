 var checkIfElementExists =  require('../checks/checkIfElementExists');

module.exports = function(method, value, element, done) {
    const command = (method === 'add') ? 'addValue' : 'setValue';

    checkIfElementExists(element, false, 1, function(){});

    if (!value) {
        browser[command](element, '');
    } else {
        browser[command](element, value);
    }

    done();
};
