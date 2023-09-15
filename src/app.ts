import express from 'express';
import productController from './controller/productController';
import listOrdersController from './controller/orderController';

const app = express();

app.use(express.json());

app.post('/products', productController.createProductController);
app.get('/products', productController.listProductsController);
app.get('/orders', listOrdersController);

export default app;
