// Schema principal para guardar a estrutura principal dos
// filmes que estarão disponíveis via API
var Joi = require('joi');
var helper = require('../lib/helper');

// Criamos um schema padrão que pode ser reutilizado
exports.schema = Joi.object({
  title: Joi.string().max(100),
  language: helper.validate.iso6391,
  release: Joi.date().iso(),
  description: Joi.string().max(500),
  media: Joi.object({
    background: helper.validate.uuidv4,
    poster: helper.validate.uuidv4
  })
});

// Ao criar um filme, apenas o título é necessário
exports.create = exports.schema.concat(Joi.object({
  title: Joi.required()
}));
