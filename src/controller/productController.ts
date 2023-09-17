import { Request, Response } from 'express';
import productService from '../service/ProductService';
import productSchema from '../middlewares/validation/schema.product';

const createProductController = async (req: Request, res: Response): Promise<Response> => {
  const { error } = productSchema.validate(req.body);
 
  if (error) {
    const statusCode = error.details[0].type.includes('required') ? 400 : 422;
    return res.status(statusCode).json({ message: error.details[0].message });
  }

  const { name, price, orderId } = req.body;
  const product = await productService.createProduct(name, price, orderId);
  return res.status(201).json({ id: product.id, name, price });
};

const listProductsController = async (req: Request, res: Response): Promise<void> => {
  const products = await productService.listProducts();
  res.status(200).json(products);
};

export default {
  createProductController,
  listProductsController,
};
