// Remove as pastas que são criadas durante a build
export default (grunt) => {
  grunt.loadNpmTasks('grunt-contrib-clean');
  return {
    clean: ['public', 'templates']
  };
};
