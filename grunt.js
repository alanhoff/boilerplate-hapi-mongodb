// Este gruntfile é apenas um bootstrap para todas as tarefas dentro
// da pasta tasks
import mout from 'mout';
import crypto from 'crypto';
import tasks from './tasks';

export default (grunt) => {

  // Cria um hash com a hora atual
  let hash = crypto.createHash('sha1')
    .update(new Date().getTime().toString())
    .digest('hex');

  // Variveis padrões para serem usadas dentro das tasks
  let defaults = {
    hash: hash
  };

  // Importamos todas as tasks e fazemos um merge das configurações
  let config = tasks
    .reduce((prev, curr) => {
      return mout.object.merge(prev, curr);
    }, defaults);

  grunt.initConfig(config);
};
