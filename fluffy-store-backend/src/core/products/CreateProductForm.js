const Joi = require('joi');
const Result = require('folktale/result');

class CreateProductForm {
  static from(data) {
    try {
      const { value, error } = schema.validate(data, { abortEarly: false });
      if (error) return Result.Error(error.details);

      return Result.Ok(new CreateProductForm(value));
    } catch (err) {
      return Result.Error(err);
    }
  }

  constructor({ name, description, image, price, quantity, active }) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.active = active;
  }
}

const schema = Joi.object({
  name: Joi.string().min(4).max(24).required(),
  description: Joi.string().min(10).max(60).required(),
  image: Joi.string().uri({
    scheme: ['https'],
    allowRelative: false,
  }),
  price: Joi.number().positive().precision(2).default(0),
  quantity: Joi.number().positive().default(0),
  active: Joi.boolean().default(false),
});

module.exports = CreateProductForm;
