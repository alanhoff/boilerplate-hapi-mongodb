var mout = require('mout');

require('fs').readdirSync(__dirname)
  .filter(function(schema) {
    return schema.match('-model.js');
  })
  .map(function(schema) {
    return [schema.replace(/-model\.js/i, ''), require('./' + schema)];
  })
  .forEach(function(schema) {
    exports[mout.string.pascalCase(schema[0])] = schema[1];
  });
