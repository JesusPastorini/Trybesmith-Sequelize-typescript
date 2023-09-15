import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import createProductMock from '../../mocks/productServiceMock';

chai.use(chaiHttp);

describe('/products', function () { 
  beforeEach(function () { sinon.restore(); });
 
  it('Deve criar um produto com sucesso', async () => {
    chai.request(app).post('/products').send(createProductMock.createProductMock);

    const res = await chai.request(app)
      .post('/products')
      .send({
        name: 'Produto de Teste',
        price: '10.00',
        orderId: 4,
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.keys('id', 'name', 'price');
  });

  it('Deve listar produtos com sucesso', async () => {
    const listProductsResponse = await chai.request(app).get('/products');

    expect(listProductsResponse.status).to.equal(200);
    expect(listProductsResponse.body).to.be.an('array');
  });
});
