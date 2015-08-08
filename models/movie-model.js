var mongoose = require('mongoose');
var helper = require('../lib/helper');
var schemas = require('../schemas');

// Criamos o schema de acordo com nossas necessidades
var movie = new mongoose.Schema({
  title: String,
  language: String,
  release: Date,
  description: String,
  media: {
    background: String,
    poster: String
  }
});

// Adiciona o plugin de datas
movie.plugin(helper.mongoose.plugins.autodate);

// PPlugin de validação
movie.plugin(helper.mongoose.plugins.validate, {
  create: schemas.Movie.create
});

// Exportamos o model
module.exports = mongoose.model('Movie', movie);
