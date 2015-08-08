// Este gruntfile é apenas um bootstrap para todas as tarefas dentro
// da pasta tasks
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
      return require('./tasks/' + task)(grunt);
    })
    .reduce(function(prev, curr) {
      return mout.object.merge(prev, curr);
    }, defaults);

  grunt.initConfig(config);
};
