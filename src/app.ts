import express from 'express';
import createProductController from './controller/productController';

const app = express();

app.use(express.json());

app.post('/products', createProductController);

export default app;
