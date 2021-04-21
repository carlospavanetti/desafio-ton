const Result = require('folktale/result');

const ProductsPagination = require('./ProductsPagination');

class ListProducts {
  constructor({ repository }) {
    this.repository = repository;
  }

  async list(queryString) {
    const validatedParams = ProductsPagination.from(queryString);
    return validatedParams.chain(async (pagination) => {
      try {
        const products = await this.repository.list(pagination);
        return Result.Ok(products);
      } catch (err) {
        return Result.Error(err);
      }
    });
  }
}

module.exports = ListProducts;
