import express from 'express';
import productController from './controller/productController';

const app = express();

app.use(express.json());

app.post('/products', productController.createProductController);
app.get('/products', productController.listProductsController);

export default app;
