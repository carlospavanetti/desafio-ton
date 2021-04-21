const Joi = require('joi');

const Config = {
  Tables: {
    Products: process.env.PRODUCTS_TABLE_NAME,
    Users: process.env.USERS_TABLE_NAME,
  },
  Buckets: {
    Images: process.env.IMAGES_BUCKET_NAME,
    SignedUrls: {
      ExpirationSeconds: 600,
    },
  },
  Products: {
    DefaultLimit: 8,
  },
  Jwt: {
    Key: process.env.JWT_KEY,
    Algorithm: 'HS256',
    ExpirationSeconds: 1800,
  },
};

const ConfigSchema = Joi.object({
  Tables: Joi.object({
    Products: Joi.string().required(),
    Users: Joi.string().required(),
  }),
  Buckets: Joi.object({
    Images: Joi.string().required(),
    SignedUrls: Joi.object({
      ExpirationSeconds: Joi.number().positive().required(),
    }),
  }),
  Products: Joi.object({
    DefaultLimit: Joi.number().min(1).required(),
  }),
  Jwt: {
    Key: Joi.string().required(),
    Algorithm: Joi.string().required(),
    ExpirationSeconds: Joi.number().positive().required(),
  },
});

Joi.assert(Config, ConfigSchema);

module.exports = Config;
