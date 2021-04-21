const HttpResponse = require('../lib/HttpResponse');
const ListProducts = require('../core/products/ListProducts');
const repository = require('../core/products/ProductsRepository');

const ProductsController = {
  async list({ query }) {
    const result = await new ListProducts({ repository }).list(query);
    const response = result.matchWith({
      Ok: ({ value }) => HttpResponse(200, value),
      Error: ({ value }) => HttpResponse(400, { error: value }),
    });
    return response;
  },
};

module.exports = ProductsController;
