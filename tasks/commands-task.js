// Task responsável por registrar os nossos comandos customizados
export default (grunt) => {

  // Para gerar o conteúdo de desenvolvimento
  grunt.registerTask('build-dev', [
    'clean', 'replace', 'concat'
  ]);


  // Conteúdo de produção
  grunt.registerTask('build', [
    'build-dev', 'cssmin', 'uglify'
  ]);
};
