import { Request, Response } from 'express';
import { createProduct } from '../service/ProductService';

export const createProductController = async (req: Request, res: Response) => {
    const { name, price, orderId } = req.body;
    const product = await createProduct(name, price, orderId);
    res.status(201).json({ id: product.id, name, price });
};
