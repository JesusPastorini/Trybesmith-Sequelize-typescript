import { Request, Response } from 'express';
import createProduct from '../service/ProductService';

const createProductController = async (req: Request, res: Response): Promise<void> => {
  const { name, price, orderId } = req.body;
  const product = await createProduct(name, price, orderId);
  res.status(201).json({ id: product.id, name, price });
};

export default createProductController;