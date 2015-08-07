var mout = require('mout');

require('fs').readdirSync(__dirname)
  .filter(function(schema) {
    return schema.match('-schema.js');
  })
  .map(function(schema) {
    return [schema, require('./' + schema)];
  })
  .forEach(function(schema) {
    exports[mout.string.pascalCase(schema[0])] = require('./' + schema[1]);
  });
