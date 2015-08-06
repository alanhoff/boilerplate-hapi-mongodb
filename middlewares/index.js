var fs = require('fs');
module.exports = [];

fs.readdirSync('.')
  .filter(function(ctrl) {
    return ctrl.match(/-mdlw.\js/i);
  })
  .forEach(function(ctrl) {
    module.exports.push(require('./' + ctrl));
  });
