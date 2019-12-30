const request = require('supertest');
const app = require('./app');
const prices = require('./db');

describe('GET /prices', () => {
  it('when success, responds json : status code 200, success "true", message "prices retrieved successfully" and an array of data which is pricesData', async (done) => {
    const response = await request(app).get('/prices');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe('true');
    expect(response.body.message).toBe('prices retrieved successfully');
    expect(response.body.data).toStrictEqual(prices.default);
    done();
  });
});

describe('POST /prices', () => {
  it('when data format is not an array, responds json : status code 200, success "false", message "data format need to be an array"', async (done) => {
    const response = await request(app)
      .post('/prices')
      .send({ timestamp: '1000', price: '2000' });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe('false');
    expect(response.body.message).toBe('data format need to be an array');
    done();
  });

  it('when [], responds json : status code 201, success "true", message "no new prices are added, because the incoming data is empty"', async (done) => {
    const response = await request(app)
      .post('/prices')
      .send([]);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe('true');
    expect(response.body.message).toBe('no new prices are added, because the incoming data is empty');
    done();
  });

  it('when missing one or more property of data, responds json : status code 400, success "false", message "data format is wrong"', async (done) => {
    const response = await request(app)
      .post('/prices')
      .send([{ timeStamp: 325, price: 3243 }, { timeStamp: 1000 }]);

    expect(response.status).toBe(400);
    expect(response.body.success).toBe('false');
    expect(response.body.message).toBe('data format is wrong');
    done();
  });

  it('when success posted, responds json : status code 201, success "true", message "new price added successfully" and an array of data which is newData', async (done) => {
    const response = await request(app)
      .post('/prices')
      .send([{ timeStamp: 325, price: 3243 }, { timeStamp: 1000, price: 100 }]);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe('true');
    expect(response.body.message).toBe('new price added successfully');
    // eslint-disable-next-line max-len
    expect(response.body.newData).toStrictEqual([{ timeStamp: 325, price: 3243 }, { timeStamp: 1000, price: 100 }]);
    done();
  });
});
