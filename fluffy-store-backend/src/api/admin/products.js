const AdminProductsController = require('../../controllers/admin/products.controller');
const HttpResponse = require('../../lib/HttpResponse');

async function create(event) {
  try {
    const body = JSON.parse(event.body);
    return AdminProductsController.create({ body });
  } catch (err) {
    return HttpResponse(400, [{ message: 'Invalid JSON data' }]);
  }
}

module.exports = { create };
