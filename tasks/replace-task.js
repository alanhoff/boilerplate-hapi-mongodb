// Remove as pastas que são criadas durante a build
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-replace');

  return {
    replace: {
      templates: {
        options: {
          patterns: [{
            match: 'hash',
            replacement: '<%= hash %>'
          }]
        },
        files: [{
          expand: true,
          cwd: 'frontend/templates',
          src: '**/*',
          dest: 'templates/'
        }]
      }
    }
  };
};
