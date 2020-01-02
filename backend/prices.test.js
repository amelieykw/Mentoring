import supertest from 'supertest';
import server from './app';
import prices from './db';

describe('test /prices routes', () => {
  const app = server();

  let request;

  beforeEach(() => {
    request = supertest(app);
  });

  describe('GET /prices', () => {
    it('when success, responds json : status code 200, an array of data which is all current prices!', async () => {
      const response = await request.get('/prices');

      expect(response.status).toBe(200);
      expect(response.body.data).toStrictEqual(prices);
    });
  });

  describe('POST /prices', () => {
    it('when data format is not an array, responds json : status code 400, error message "data format need to be an array"', async () => {
      const response = await request
        .post('/prices')
        .send({ timestamp: '1000', price: '2000' });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('data format need to be an array');
    });

    it('when [], responds json : status code 400, error message "no new prices are added, because the incoming data is empty"', async () => {
      const response = await request
        .post('/prices')
        .send([]);

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('no new prices are added, because the incoming data is empty');
    });

    it('when missing one or more property of data, responds json : status code 400, error message "data format is wrong"', async () => {
      const response = await request
        .post('/prices')
        .send([{ timeStamp: 325, price: 3243 }, { timeStamp: 1000 }]);

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('data format is wrong');
    });

    it('when success, responds json : status code 201, an array of data which is all current prices', async () => {
      const previousPricesData = Array.from(prices);
      const response = await request
        .post('/prices')
        .send([{ timeStamp: 325, price: 3243 }, { timeStamp: 1000, price: 100 }]);

      expect(response.status).toBe(201);
      // eslint-disable-next-line max-len
      expect(response.body).toStrictEqual(previousPricesData.concat([{ timeStamp: 325, price: 3243 }, { timeStamp: 1000, price: 100 }]));
    });
  });
});
