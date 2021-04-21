const ProductsController = require('../controllers/products.controller');

async function list(event) {
  const query = event.queryStringParameters || {};
  return ProductsController.list({ query });
}

module.exports = { list };
