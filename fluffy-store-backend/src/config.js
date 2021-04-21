const Joi = require('joi');

const Config = {
  Tables: {
    Products: process.env.PRODUCTS_TABLE_NAME,
  },
  Products: {
    DefaultLimit: 8,
  },
};

const ConfigSchema = Joi.object({
  Tables: Joi.object({
    Products: Joi.string().required(),
  }),
  Products: Joi.object({
    DefaultLimit: Joi.number().min(1).required(),
  }),
});

Joi.assert(Config, ConfigSchema);

module.exports = Config;
