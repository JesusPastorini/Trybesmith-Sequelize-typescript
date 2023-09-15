import { Request, Response } from 'express';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

const listOrdersController = async (req: Request, res: Response): Promise<void> => {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });

  const formattedOrders = orders.map((order) => {
    const orderJson = order.toJSON();
    const productIds = orderJson.productIds?.map((productId) => productId.id);
    return { id: orderJson.id, userId: orderJson.userId, productIds };
  });

  res.status(200).json(formattedOrders);
};

export default listOrdersController;