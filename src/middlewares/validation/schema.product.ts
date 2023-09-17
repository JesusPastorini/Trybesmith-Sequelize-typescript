import Joi from 'joi';

// esquema de validação para o campo "name"
const nameSchema = Joi.string()
  .required()
  .min(3)
  .messages({
    'any.required': '"name" is required',
    'string.base': '"name" must be a string',
    'string.min': '"name" length must be at least 3 characters long',
  });

// esquema de validação para o campo "price"
const priceSchema = Joi.string()
  .required()
  .min(3)
  .messages({
    'any.required': '"price" is required',
    'string.base': '"price" must be a string',
    'string.min': '"price" length must be at least 3 characters long',
  });

const orderIdSchema = Joi.number() // esquema para o campo "orderId"
  .required()
  .messages({
    'any.required': '"orderId" is required',
    'number.base': '"orderId" must be a number',
  });

const productSchema = Joi.object({
  name: nameSchema,
  price: priceSchema,
  orderId: orderIdSchema,
});
  
export default productSchema;
