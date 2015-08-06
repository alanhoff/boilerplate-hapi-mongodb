var Hapi = require('hapi');
var config = require('config');
var bluebird = require('bluebird');
var middlewares = require('../middlewares');
var controllers = require('../controllers');

// Chamamos esta função para iniciar um servidor
// e retorna uma promise que será completada quando
// o servidor iniciar
exports.start = bluebird.method(function() {
  var defered = bluebird.defer();
  var server = new Hapi.Server();
  server.connection(config.get('hapi.connection'));

  // Registramos todos os middlewares e controladores
  server.register(middlewares.concat(controllers), function(err) {
    if (err)
      return defered.reject(err);

    server.start(function(err) {
      if (err)
        return defered.reject(err);

      // Ao terminar o carregamento retornamos a instância
      // que acabamos de criar
      defered.resolve(server);
    });
  });

  return defered.promise;
});

// Função responsável por parar uma instância que
// já está rodando
exports.stop = bluebird.method(function(server) {
  var defered = bluebird.defer();

  // A função defered callback é apenas um sugar para que não
  // seja necessário declarar uma função, retornar .reject se der
  // errado ou .resolve se der certo. Ela faz isso já
  server.stop(defered.callback);

  return defered.promise;
});
