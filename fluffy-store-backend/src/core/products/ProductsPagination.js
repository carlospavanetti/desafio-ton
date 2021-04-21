const Joi = require('joi');
const Result = require('folktale/result');
const Config = require('../../config');

class ProductsPagination {
  static from(queryString) {
    try {
      const { value, error } = schema.validate(queryString, {
        abortEarly: false,
      });
      if (error) return Result.Error(error.details);

      return Result.Ok(new ProductsPagination(value));
    } catch (err) {
      return Result.Error(err);
    }
  }

  constructor({ after, limit }) {
    this.after = after;
    this.limit = limit;
  }
}

const schema = Joi.object({
  after: Joi.string().uuid({ version: 'uuidv4' }).allow(''),
  limit: Joi.number().integer().positive().default(Config.Products.DefaultLimit),
});

module.exports = ProductsPagination;
