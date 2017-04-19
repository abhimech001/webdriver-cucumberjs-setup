module.exports = function (args) {
  var tags = ['~@pending']; // Always ignore @Pending tags

  if (typeof args !== 'undefined') {
    tags = tags.concat(args.split(','));
  }

  return tags;
};
