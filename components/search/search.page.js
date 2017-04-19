var Page = require('../../setup/pages/base.page');

module.exports = Object.create(Page, {
  open: {
    value: function ( done) {
      Page.open.call(this, 'site', '/', done);
    }
  }
});

