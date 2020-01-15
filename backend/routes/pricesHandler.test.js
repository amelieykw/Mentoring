/* eslint-disable no-underscore-dangle */
import createError from 'http-errors';
import httpMocks from 'node-mocks-http';
import events from 'events';
import { Router } from 'express';

import prices from '../testDBpricesData';
import { pricesGetHandler, pricesPostHandler } from './pricesHandler';
import { getPricesFromDB, saveNewPricesToDB } from '../service';
import createPricesRouter from './prices';

jest.mock('../service');
jest.mock('express');

describe('test /prices routes', () => {
  describe('GET /prices', () => {
    const mockRequest = httpMocks.createRequest();
    const mockResponse = httpMocks.createResponse({
      eventEmitter: events.EventEmitter,
    });

    it('when pricesData got from DB is null, responds throw Error("get data from db error")', async () => {
      getPricesFromDB.mockImplementation(() => null);
      await expect(pricesGetHandler(mockRequest, mockResponse)).rejects.toThrow(createError(404, 'get data from db error'));
    });

    it('when pricesData got from DB is not an array, responds throw Error("prices need to be an array")', async () => {
      getPricesFromDB.mockImplementation(() => prices.toString());
      await expect(pricesGetHandler(mockRequest, mockResponse)).rejects.toThrow(createError(406, 'prices need to be an array'));
    });

    it('when success, responds json : status code 200, an array of data which is all current prices!', async () => {
      getPricesFromDB.mockImplementation(() => prices);
      const result = await pricesGetHandler(mockRequest, mockResponse);

      expect(result.statusCode).toBe(200);
      expect(result._getData()).toStrictEqual(prices);
    });
  });

  describe('POST /prices', () => {
    const newData = [{ timeStamp: 325, price: 3243 }, { timeStamp: 1000, price: 100 }];

    const mockResponse = httpMocks.createResponse({
      eventEmitter: events.EventEmitter,
    });

    it('when data format is not an array, responds throw Error("data format need to be an array")', async () => {
      const mockRequest = httpMocks.createRequest({
        body: newData.toString(),
      });
      await expect(pricesPostHandler(mockRequest, mockResponse)).rejects.toThrow(createError(406, 'data format need to be an array'));
    });

    it('when [], responds throw Error("no new prices are added, because the incoming data is empty")', async () => {
      const mockRequest = httpMocks.createRequest({
        body: [],
      });
      await expect(pricesPostHandler(mockRequest, mockResponse)).rejects.toThrow(createError(400, 'no new prices are added, because the incoming data is empty'));
    });

    it('when missing one or more property of data, responds throw Error("data format is wrong")', async () => {
      const mockRequest = httpMocks.createRequest({
        body: [{ timeStamp: 325, price: 3243 }, { price: 100 }],
      });
      await expect(pricesPostHandler(mockRequest, mockResponse)).rejects.toThrow(createError(400, 'data format is wrong'));
    });

    it('when success, responds json : status code 201, an array of data which is all current prices', async () => {
      const mockRequest = httpMocks.createRequest({
        body: newData,
      });

      const previousPricesData = JSON.parse(JSON.stringify(prices));

      saveNewPricesToDB.mockImplementation((data) => {
        previousPricesData.push(...data);
        return previousPricesData;
      });

      const result = await pricesPostHandler(mockRequest, mockResponse);

      expect(result.statusCode).toBe(201);
      expect(result._getData()).toStrictEqual(previousPricesData);
    });
  });

  describe('test route /prices', () => {
    it('all the request handlers of prices router should be called correctly', () => {
      const mockRouter = {
        get: jest.fn(),
        post: jest.fn(),
        ws: jest.fn(),
        use: jest.fn(),
      };

      Router.mockReturnValue(mockRouter);

      const wss = {};

      const finalRouter = createPricesRouter(wss);
      expect(finalRouter).toEqual(mockRouter);
      expect(mockRouter.get).toHaveBeenCalledWith('/', expect.any(Function));
      expect(mockRouter.post).toHaveBeenCalledWith('/', expect.any(Function));
      expect(mockRouter.ws).toHaveBeenCalledWith('/', expect.any(Function));
    });
  });
});
