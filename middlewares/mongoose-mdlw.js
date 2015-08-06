// Este middleware para o Hapi server para que o servidor
// espere a conexão com o banco de dados antes de iniciar os
// controladores, evitando que eles recebam requisições antes
// do banco estar devidamente conectado
var mongoose = require('mogoose');
var config = require('config');
var log = require('../lib/log');

exports.register = function(server, next) {
  mongoose.connect(config.get('mongoose.uri'));

  // Assim que o MongoDB connectar, continuamos a carregar
  // os demais middlewares
  mongoose.connection.once('connect', function() {
    log.info('Servidor MongoDB connectado');
    next();
  });
};

exports.register.attributes = {
  name: 'mongoose-mdlw',
  version: '1.0.0'
};
