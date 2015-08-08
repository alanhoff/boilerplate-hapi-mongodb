var fs = require('fs');
module.exports = [];

fs.readdirSync(__dirname)
  .filter(function(mdlw) {
    return mdlw.match(/-mdlw\.js/i);
  })
  .forEach(function(mdlw) {
    module.exports.push(require('./' + mdlw));
  });
