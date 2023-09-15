import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

const createProduct = async (
  name: string,
  price: string,
  orderId: number,
): Promise<Product> => {
  const product = await ProductModel.create({ name, price, orderId });
  return product.toJSON() as Product;
};

export default createProduct;