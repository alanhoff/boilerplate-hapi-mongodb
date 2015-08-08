// Transforma nosso bundle javascript em um arquivo minificado
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  return {
    cssmin: {
      css: {
        files: [{
          expand: true,
          cwd: 'public/css',
          dest: 'public/css',
          src: '**/*.css'
        }]
      }
    }
  };
};
