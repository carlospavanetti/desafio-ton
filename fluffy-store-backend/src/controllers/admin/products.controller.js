const CreateProduct = require('../../core/products/CreateProduct');
const HttpResponse = require('../../lib/HttpResponse');
const repository = require('../../core/products/products.repository');

const AdminProductsController = {
  async create({ body }) {
    const result = await new CreateProduct({ repository }).create(body);
    const response = result.matchWith({
      Ok: ({ value }) => HttpResponse(204, { message: 'Created', id: value }),
      Error: ({ value }) => HttpResponse(500, { message: 'Failed', error: value }),
    });
    return response;
  },
};

module.exports = AdminProductsController;
