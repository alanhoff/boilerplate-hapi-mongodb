// Task responsável por registrar os nossos comandos customizados
module.exports = function(grunt) {

  // Para gerar o conteúdo de desenvolvimento
  grunt.registerTask('build-dev', [
    'clean', 'replace', 'concat'
  ]);


  // Conteúdo de produção
  grunt.registerTask('build', [
    'build-dev', 'cssmin', 'uglify'
  ]);
};
