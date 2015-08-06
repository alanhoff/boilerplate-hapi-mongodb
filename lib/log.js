var winston = require('winston');
var config = require('config');

var logger = new(winston.Logger)({
  transports: [
    new winston.transports.Console(config.get('winston'))
  ]
});

module.exports = logger;
