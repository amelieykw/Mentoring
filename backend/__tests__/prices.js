import supertest from 'supertest';
import server from '../app';
import prices from '../testDBpricesData';
import { getPricesFromDB, saveNewPricesToDB } from '../service';

jest.mock('../db/SingletonObservableDataSet');
jest.mock('../service');

describe('test /prices routes', () => {
  const app = server();

  let request;
  beforeEach(() => {
    request = supertest(app);
  });

  describe('GET /prices', () => {
    it('when success, responds json : status code 200, an array of data which is all current prices!', async () => {
      getPricesFromDB.mockImplementation(() => prices);
      const response = await request.get('/prices');
      expect(response.status).toBe(200);
      expect(response.body).toStrictEqual(prices);
    });
  });

  describe('POST /prices', () => {
    it('when success, responds json : status code 201, an array of data which is all current prices', async () => {
      const newData = [{ timeStamp: 325, price: 3243 }, { timeStamp: 1000, price: 100 }];
      const previousPricesData = JSON.parse(JSON.stringify(prices));

      saveNewPricesToDB.mockImplementation((data) => {
        previousPricesData.push(...data);
        return previousPricesData;
      });

      const response = await request
        .post('/prices')
        .send(newData);

      expect(response.status).toBe(201);
      expect(response.body).toStrictEqual(previousPricesData);
    });
  });
});
