var mout = require('mout');
var crypto = require('crypto');
var fs = require('fs');

module.exports = function(grunt) {
  var hash = crypto.createHash('sha1')
    .update(new Date().getTime().toString())
    .digest('hex');

  var defaults = {
    hash: hash
  };

  var config = fs.readdirSync('./tasks')
    .filter(function(task) {
      return task.match(/-task\.js/i);
    })
    .map(function(task) {
      return require('./task/' + task);
    })
    .reduce(function(prev, curr) {
      return mout.object.merge(prev, curr);
    }, defaults);

  grunt.initConfig(config);
};
