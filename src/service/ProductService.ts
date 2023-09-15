import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

const createProduct = async (
  name: string,
  price: string,
  orderId: number,
): Promise<Product> => {
  const product = await ProductModel.create({ name, price, orderId });
  return product.toJSON() as Product;
};

const listProducts = async (): Promise<Product[]> => {
  const products = await ProductModel.findAll();
  const productList: Product[] = products.map((product: ProductSequelizeModel) => {
    return product.toJSON() as Product;
  });  
  return productList;
};

export default {
  createProduct,
  listProducts,
};
