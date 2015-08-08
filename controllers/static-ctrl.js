// Contralodor para a página inicial e distribuir o conteúdo estático
exports.register = function(server, options, next) {

  // Envia a nossa página iniciaç
  server.route({
    method: 'GET',
    path: '/',
    handler: {
      file: 'templates/index.html'
    }
  });

  // Envia nossos arquivos públicos
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    },
    config: {
      cache: {
        privacy: 'public',
        expiresIn: 86400000
      }
    }
  });

  next();
};

exports.register.attributes = {
  name: 'static-ctrl',
  version: '1.0.0'
};
