// Configuração do Winston, a biblioteca responsável por realizar
// todo o logging da nossa aplicação. Podemos adicionar mais transportes
// caso for necessário
var winston = require('winston');
var config = require('config');

var logger = new(winston.Logger)({
  transports: [
    new winston.transports.Console(config.get('winston'))
  ]
});

module.exports = logger;
