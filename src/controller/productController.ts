import { Request, Response } from 'express';
import productService from '../service/ProductService';

const createProductController = async (req: Request, res: Response): Promise<void> => {
  const { name, price, orderId } = req.body;
  const product = await productService.createProduct(name, price, orderId);
  res.status(201).json({ id: product.id, name, price });
};

const listProductsController = async (req: Request, res: Response): Promise<void> => {
  const products = await productService.listProducts();
  res.status(200).json(products);
};

export default {
  createProductController,
  listProductsController,
};
