// Remove as pastas que são criadas durante a build
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');

  return {
    clean: ['public', 'templates']
  };
};
