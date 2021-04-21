const { v4: uuidv4 } = require('uuid');

class Product {
  constructor({ id, name, description, image, price, quantity, active }) {
    this.id = id || uuidv4();
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.active = active;
  }

  saveTo(repository) {
    return repository.put({ ...this });
  }
}

module.exports = Product;
