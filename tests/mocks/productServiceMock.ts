import { Product } from '../../src/types/Product';

export const createProductMock = async (
  name: string,
  price: string,
  orderId: number
): Promise<Product> => {
  const product: Product = {
    id: 1,
    name,
    price,
    orderId,
  };
  return product;
};
