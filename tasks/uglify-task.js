// Transforma nosso bundle javascript em um arquivo minificado
export default (grunt) => {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  return {
    uglify: {
      js: {
        files: [{
          expand: true,
          cwd: 'public/js',
          dest: 'public/js',
          src: '**/*.js'
        }]
      }
    }
  };
};
