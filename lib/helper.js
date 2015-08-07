// Vários códigos pequenos e úteis que gostaríamos de
// reaproveitar em nosso código
var Joi = require('joi');
var languages = require('language-list')();

// Funcionalidades para ajudar na validação
exports.validate = {
  uuidv4: Joi.string().regex(exports.regex.uuidv4),
  iso6391: Joi.only(languages.getLanguageCodes()),
  isJoi: Joi.object().keys({
    isJoi: Joi.equal(true)
  })
};

// Regex complexas
exports.regex = {
  uuidv4: /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/
};

// Códigos diversos para o mongoose
exports.mongoose = {
  plugins: {

    // Adiciona data de criação e modificação automaticamente
    autodate: function(schema) {
      schema.add({
        created: Date,
        updated: Date
      });

      schema.pre('save', function(next) {
        // Se a data de criação não existir, significa que
        // estamos lidando com uma atualização, então não devemos
        // substituir esta key
        this.created = this.created || new Date();
        this.updated = new Date();
        next();
      });

      // Caso utilizarmos o model.update
      schema.pre('update', function() {
        this.update({}, {
          $set: {
            updated: new Date()
          }
        });
      });
    },

    // Vamos utilizar os schemas que criamos para a validação dos
    // modelos do mongoose, para deixar o banco um pouco mais consistente
    valdiate: function(schema, options) {
      Joi.assert(options, Joi.object({
        create: exports.validate.isJoi,
        update: exports.validate.isJoi
      }));

      schema.pre('save', function(){
        var validation = {};

        if(options.create && this.isNew)
          validation = Joi.validate(this, options.create);
        else if(options.update && !this.isNew)
          validation = Joi.validate(this, options.update);

        if(validation.error){

        }
      });
    }
  }
};
