const Result = require('folktale/result');

const Product = require('./Product');
const CreateProductForm = require('./CreateProductForm');

class CreateProduct {
  constructor({ repository }) {
    this.repository = repository;
  }

  async create(body) {
    const validatedForm = CreateProductForm.from(body);
    return validatedForm.chain(async (form) => {
      try {
        const product = new Product(form);
        await product.saveTo(this.repository);
        return Result.Ok(product.id);
      } catch (err) {
        return Result.Error(err);
      }
    });
  }
}

module.exports = CreateProduct;
