import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Deve listar pedidos com produtos associados com sucesso', async () => {
    
    const order = await OrderModel.create({ userId: 1 });
    console.log(order)
    await ProductModel.create({ name: 'Produto 1', price: '10.00', orderId: 1 });
    await ProductModel.create({ name: 'Produto 2', price: '20.00', orderId: 2 });

    const response = await chai.request(app).get('/orders');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');

    const orderWithProducts = response.body[0];
    expect(orderWithProducts).to.have.property('id');
    expect(orderWithProducts).to.have.property('userId', 1);
    expect(orderWithProducts).to.have.property('productIds');
    expect(orderWithProducts.productIds).to.be.an('array');
  });

  it('Deve retornar uma lista de pedidos', async () => {
    const response = await chai.request(app).get('/orders');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

});
