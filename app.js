// Aqui é onde a magia acontece :-)
var server = require('../lib/server');
var config = require('config');
var inst = null;
var log = require('../lib/log');

log.info('Iniciando bootstrap do servidor HTTP');
server.start()
  .then(function(i) {
    inst = i;
    log.log('info', 'Servidor iniciado com sucesso na porta %s e na interface' +
      ' %s', config.hapi.connection.port, config.hapi.connection.host);
  });

// Vamos escutar se o sistema manda o servidor parar
process.on(config.server.signal, function() {
  log.log('info', 'O servidor recebeu o sinal %s, iniciando parada',
    config.server.signal);

  // Enviamos a instância criada para o método stop
  server.stop(inst)
    .then(function() {
      log.log('Servidor parou, finalizando processo.');
      process.exit();
    });
});
