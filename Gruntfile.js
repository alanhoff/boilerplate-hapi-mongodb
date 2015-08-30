// Este contém apenas o bootstrap para o ES6 via Babel
require('babel/register')({
  modules: 'system'
});
module.exports = require('./grunt');
